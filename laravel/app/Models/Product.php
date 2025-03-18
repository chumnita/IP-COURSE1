<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = ['name', 'price', 'description', 'category_id']; // Include category_id for the relationship

    public function category()
    {
        return $this->belongsTo(Category::class); // A product belongs to one category
    }

    public function orders()
    {
        return $this->belongsToMany(Order::class, 'order_product'); // Many orders can have this product
    }
}
