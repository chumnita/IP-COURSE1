<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Gd\Driver as GdDriver;

class UploadController extends Controller
{
    public function upload(Request $request)
    {
        // Validate the uploaded file
        $request->validate([
            'document' => 'required|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        // Get original image
        $image = $request->file('document');
        $originalName = uniqid() . '.' . $image->getClientOriginalExtension();

        // === 1. Upload original image to MinIO ===
        $originalPath = $image->storeAs('uploads', $originalName, 'minio');

        // === 2. Create thumbnail using GD driver ===
        $manager = new ImageManager(new GdDriver());
        $thumbnail = $manager->read($image)->cover(200, 200);
        $thumbTempPath = storage_path('app/temp_thumb_' . $originalName);
        $thumbnail->save($thumbTempPath); // Save temporarily to local disk

        // === 3. Upload thumbnail to MinIO ===
        $thumbName = 'thumbnails/' . $originalName;
        Storage::disk('minio')->put($thumbName, file_get_contents($thumbTempPath));

        // Cleanup temporary file
        unlink($thumbTempPath);

        // Return both paths in response
        return response()->json([
            'original' => $originalPath,
            'thumbnail' => $thumbName,
        ]);
    }
}
