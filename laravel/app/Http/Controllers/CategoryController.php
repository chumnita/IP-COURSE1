<?php 

namespace App\Http\Controllers; 

use Illuminate\Http\Request; 

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
        return ["message" => "Getting 1 category base on given categoryId"];  
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