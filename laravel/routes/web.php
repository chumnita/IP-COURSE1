<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UploadController;

// Default welcome page
Route::get('/', function () {
    return view('welcome');
});

// Dashboard for logged-in users
Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Profile routes (auth required)
Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// ✅ Upload File Form Route (no login required)
Route::get('/upload_file', function () {
    return view('upload_file');
});

// ✅ Upload POST Route (no login required)
Route::post('/upload', [UploadController::class, 'upload'])->name('upload');

require __DIR__.'/auth.php';
