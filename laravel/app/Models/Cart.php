<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Cart extends Model
{
    use SoftDeletes;
    
    protected $fillable = ['customer_id', 'product_id', 'quantity'];
    protected $table = 'cart';
    
    public function product()
    {
        return $this->belongsTo(Product::class); // A cart belongs to a product
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class); // A cart belongs to a customer
    }
}
