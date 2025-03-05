<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function getCategories(){
        $categories = Category::all();
        if ($categories->isEmpty()) {
            return response()->json(["message" => "No categories found"]);
        }
        return response()->json(["data" => $categories]);
    }

    public function createCategory(Request $request){
        $category = Category::create($request->only(['name']));
        return response()->json([
            "message" => "Category created successfully",
            "data" => $category
        ]);
    }

    public function getCategory($categoryId){
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }
        return response()->json(["data" => $category]);
    }

    public function updateCategory(Request $request, $categoryId){
        $category = Category::find($categoryId);

        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }
        $category->update($request->only(['name']));
        return response()->json([
            "message" => "Category updated successfully",
            "data" => $category
        ]);
    }

    public function deleteCategory($categoryId){
        $category = Category::find($categoryId);
        if (!$category) {
            return response()->json(["message" => "Category not found"], 404);
        }
        $category->delete();
        return response()->json(["message" => "Category deleted successfully"]);
    }

    public function countActiveCategories(){
        $count = Category::where('active', 1)->count();
        return response()->json([
            "message" => "Active categories count retrieved successfully",
            "data" => $count
        ]);
    }

    public function findOrCreateCategory(Request $request){
        $category = Category::firstOrCreate(['name' => $request->name]);
        return response()->json([
            "message" => "Category retrieved or created successfully",
            "data" => $category
        ]);
    }

    public function truncateCategories(){
        Category::truncate();
        return response()->json(["message" => "Categories table truncated successfully"]);
    }
}