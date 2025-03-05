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
Route::controller(ProductController::class)->prefix('products')->group(function () {
    Route::get('/', 'index'); // Fetch all products
    Route::post('/', 'store'); // Create a new product
    Route::get('/{id}', 'show'); // Fetch a specific product
    Route::put('/{id}', 'update'); // Update a specific product
    Route::delete('/{id}', 'destroy'); // Delete a specific product
    Route::get('/active', 'getActiveProducts'); // Get 10 active products ordered by name
    Route::get('/refresh/{id}', 'refreshProduct'); // Refresh a product instance
    Route::get('/process-chunks', 'processProductsInChunks'); // Process products in chunks
    Route::get('/find-or-fail/{id}', 'findOrFailProduct'); // Find or fail to retrieve a product
    Route::post('/find-or-create', 'findOrCreateProduct'); // Find or create a product
    Route::post('/update-or-create', 'updateOrCreateProduct'); // Update or create a product
    Route::delete('/truncate', 'truncateProducts'); // Truncate the products table
});