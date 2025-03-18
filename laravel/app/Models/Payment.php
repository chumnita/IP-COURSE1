<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    public function customer()
    {
        return $this->belongsTo(Customer::class); // A payment belongs to a customer
    }

    public function order()
    {
        return $this->belongsTo(Order::class); // A payment belongs to an order
    }
}
