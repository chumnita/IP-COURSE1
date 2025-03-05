<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\Collection;

class ProductController extends Controller
{
    public function index(){
        $products = Product::all();
        if ($products->isEmpty()) {
            return response()->json(["message" => "No products found"]);
        }
        return response()->json(["data" => $products]);
    }

    public function store(Request $request){
        $product = Product::create($request->only(['name', 'price', 'category_id']));
        return response()->json([
            "message" => "Product created successfully",
            "data" => $product
        ]);
    }

    public function show($id){
        $product = Product::find($id);
        if (!$product) {
            return response()->json(["message" => "Product not found"], 404);
        }
        return response()->json(["data" => $product]);
    }

    public function update(Request $request, $id){
        $product = Product::find($id);
        if (!$product) {
            return response()->json(["message" => "Product not found"], 404);
        }
        $product->update($request->only(['name', 'price', 'category_id']));
        return response()->json([
            "message" => "Product updated successfully",
            "data" => $product
        ]);
    }

    public function destroy($id){
        $product = Product::find($id);
        if (!$product) {
            return response()->json(["message" => "Product not found"], 404);
        }
        $product->delete();
        return response()->json(["message" => "Product deleted successfully"]);
    }

    public function getActiveProducts(){
        $products = Product::where('active', 1)
                            ->orderBy('name')
                            ->take(10)
                            ->get();
        return response()->json(["data" => $products]);
    }

    public function refreshProduct($id){
        $product = Product::find($id);
        if (!$product) {
            return response()->json(["message" => "Product not found"], 404);
        }
        $freshProduct = $product->fresh();
        return response()->json([
            "message" => "Product refreshed successfully",
            "data" => $freshProduct
        ]);
    }

    public function processProductsInChunks(){
        Product::chunk(200, function (Collection $products) {
            foreach ($products as $product) {
                // Perform operations on each product
            }
        });
        return response()->json(["message" => "Products processed in chunks"]);
    }

    public function findOrFailProduct($id){
        try {
            $product = Product::findOrFail($id);
            return response()->json(["data" => $product]);
        } catch (\Illuminate\Database\Eloquent\ModelNotFoundException $e) {
            return response()->json(["message" => "Product not found"], 404);
        }
    }

    public function findOrCreateProduct(Request $request){
        $product = Product::firstOrCreate(['name' => $request->name]);
        return response()->json([
            "message" => "Product retrieved or created successfully",
            "data" => $product
        ]);
    }

    public function updateOrCreateProduct(Request $request){
        $product = Product::updateOrCreate(
            ['name' => $request->name, 'category_id' => $request->category_id],
            ['price' => $request->price, 'discounted' => $request->discounted]
        );
        return response()->json([
            "message" => "Product updated or created successfully",
            "data" => $product
        ]);
    }

    public function truncateProducts(){
        Product::truncate();
        return response()->json(["message" => "Products table truncated successfully"]);
    }
}