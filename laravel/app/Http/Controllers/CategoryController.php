<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 
use App\Models\Category;

class CategoryController extends Controller 
{ 
    // --- Get /api/categories
    public function getCategories() {  //change
        $categories = Category::all();
        return $categories; 
    } 

    // -- Post /api/categories  
    public function createCategory() { 
        $category = new Category();
        $category->name = $request->get('name');
        $category->save();
        return ["message" => "sucess"]; //change

    // --- Get/api/categories/{categoryId}  
    public function getCategory($categoryId) {  
        $category = Category::find($categoryId);
        if (!$category) {
            return ["message" => "Category not found"];
        }
        return $category;

    
    public function getActiveCategories() {
        return Category::where('active', 1)
                    ->orderBy('name')
                    ->take(10)
                    ->get();
    }

    public function createCategory(Request $request) {
        $category = new Category();
        $category->name = $request->get('name');
        $category->save();
        return ["message" => "Category created successfully"];
    }

    
    //--Patch/api/categories/{categoryId}  
    public function updateCategory($categoryId) {  
        return ["message" => "Updating 1 category base on given categoryId"];  
    } 

    // --- Delete /api/categories/{categoryId} 
    public function deleteCategory ($categoryId) {  
        return ["message" => "Deleting 1 category base on given categoryId"];  
    }  
}