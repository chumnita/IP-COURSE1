<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;
use App\Models\Category;

class ProductTest extends TestCase
{
    use RefreshDatabase;

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_if_we_can_access_get_all_products_api()
    {
        $response = $this->get('/api/products');
        $response->assertStatus(200);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_create_product()
    {
        $category = Category::create(['name' => 'Test Category']);

        $response = $this->postJson('/api/products', [
            'name'        => 'Test Product',
            'category_id' => $category->id,
            'pricing'     => 19.99,
            'description' => 'A sample product',
            'images'      => json_encode(['product.jpg'])
        ]);

        $response->assertStatus(201)
                 ->assertJsonFragment(['name' => 'Test Product']);

        $this->assertDatabaseHas('products', [
            'name' => 'Test Product',
        ]);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_get_single_product()
    {
        $category = Category::create(['name' => 'Category']);
        $product = Product::create([
            'name'        => 'Single Product',
            'category_id' => $category->id,
            'pricing'     => 10,
            'description' => 'Test',
            'images'      => json_encode(['1.jpg'])
        ]);

        $response = $this->get("/api/products/{$product->id}");
        $response->assertStatus(200)
                 ->assertJsonFragment(['name' => 'Single Product']);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_update_product()
    {
        $category = Category::create(['name' => 'Old Category']);
        $product = Product::create([
            'name'        => 'Old Name',
            'category_id' => $category->id,
            'pricing'     => 5,
            'description' => 'Old',
            'images'      => json_encode(['old.jpg'])
        ]);

        $response = $this->patchJson("/api/products/{$product->id}", [
            'name' => 'Updated Product'
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['name' => 'Updated Product']);

        $this->assertDatabaseHas('products', ['name' => 'Updated Product']);
    }

    #[\PHPUnit\Framework\Attributes\Test]
    public function test_delete_product()
    {
        $category = Category::create(['name' => 'Delete Category']);
        $product = Product::create([
            'name'        => 'To Be Deleted',
            'category_id' => $category->id,
            'pricing'     => 50,
            'description' => 'To delete',
            'images'      => json_encode(['del.jpg'])
        ]);

        $response = $this->delete("/api/products/{$product->id}");
        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Product deleted successfully']);

        $this->assertDatabaseMissing('products', ['id' => $product->id]);
    }
}
