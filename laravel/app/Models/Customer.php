<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Customer extends Model
{
    use SoftDeletes;
    use HasFactory;

    protected $table = 'customer';
    protected $fillable = ['name', 'email', 'phone'];

    public function carts()
    {
        return $this->hasMany(Cart::class); // A customer can have many carts
    }

    public function wishlists()
    {
        return $this->hasMany(Wishlist::class); // A customer can have many wishlists
    }

    public function orders()
    {
        return $this->hasMany(Order::class); // A customer can have many orders
    }

    public function payments()
    {
        return $this->hasMany(Payment::class); // A customer can have many payments
    }
    protected $dates = ['deleted_at'];

}
