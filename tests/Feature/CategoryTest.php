<?php

namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Category;

class CategoryTest extends TestCase
{
    use RefreshDatabase;

    public function test_if_we_can_access_get_all_categories_api()
    {
        $category = Category::create(['name' => 'Test Category']);

        $response = $this->get('/api/categories');

        $response->assertStatus(200)
                 ->assertJsonStructure([
                     'data' => [
                         '*' => ['id', 'name', 'created_at', 'updated_at']
                     ]
                 ]);
    }

    public function test_can_create_category()
    {
        $response = $this->postJson('/api/categories', [
            'name' => 'Test Category'
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Category created successfully'])
                 ->assertJsonPath('data.name', 'Test Category');

        $this->assertDatabaseHas('categories', ['name' => 'Test Category']);
    }

    public function test_can_get_single_category()
    {
        $category = Category::create(['name' => 'Single Category']);

        $response = $this->get("/api/categories/{$category->id}");

        $response->assertStatus(200)
                 ->assertJsonPath('data.name', 'Single Category');
    }

    public function test_can_update_category()
    {
        $category = Category::create(['name' => 'Old Name']);

        $response = $this->patchJson("/api/categories/{$category->id}", [
            'name' => 'Updated Name'
        ]);

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Category updated successfully'])
                 ->assertJsonPath('data.name', 'Updated Name');

        $this->assertDatabaseHas('categories', ['id' => $category->id, 'name' => 'Updated Name']);
    }

    public function test_can_delete_category()
    {
        $category = Category::create(['name' => 'To Be Deleted']);

        $response = $this->delete("/api/categories/{$category->id}");

        $response->assertStatus(200)
                 ->assertJsonFragment(['message' => 'Category deleted successfully']);

        $this->assertDatabaseMissing('categories', ['id' => $category->id]);
    }
}
