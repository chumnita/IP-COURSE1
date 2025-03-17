<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

// Import Controllers
use App\Http\Controllers\CategoryController;
use App\Http\Controllers\ProductController;


// Authenticated User Route (Example with Sanctum Middleware)
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

// Category Routes
Route::controller(CategoryController::class)->prefix('categories')->group(function () {
    Route::get('/', 'getCategories'); // Fetch all categories
    Route::post('/', 'createCategory'); // Create a new category
    Route::get('/{categoryId}', 'getCategory'); // Fetch a specific category
    Route::patch('/{categoryId}', 'updateCategory'); // Update a specific category
    Route::delete('/{categoryId}', 'deleteCategory'); // Delete a specific category
    Route::get('/count-active', 'countActiveCategories'); // Count active categories
    Route::post('/find-or-create', 'findOrCreateCategory'); // Find or create a category
    Route::delete('/truncate', 'truncateCategories'); // Truncate the categories table
});

// Product Routes
Route::controller(ProductController::class)->prefix('products')->group(function(){
    Route::get('/', 'getProducts');
    Route::post("/", 'newProduct');
    Route::get("/{productId}", 'getProduct');
    Route::patch("/{productId}", 'updateProduct');
    Route::delete("/{productId}", 'deleteProduct');
});
