<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    public function product()
    {
        return $this->belongsTo(Product::class); // A cart belongs to a product
    }

    public function customer()
    {
        return $this->belongsTo(Customer::class); // A cart belongs to a customer
    }
}
