<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Customer extends Model
{
    use SoftDeletes;

    protected $table = 'customer';
    protected $fillable = ['name', 'email', 'phone'];

    public function cart()
    {
        return $this->hasMany(Cart::class); // A customer can have many carts
    }

    public function wishlist()
    {
        return $this->hasMany(Wishlist::class); // A customer can have many wishlists
    }

    public function order()
    {
        return $this->hasMany(Order::class); // A customer can have many orders
    }

    public function payment()
    {
        return $this->hasMany(Payment::class); // A customer can have many payments
    }
}
