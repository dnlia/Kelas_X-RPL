<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Pelanggan>
 */
class PelangganFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'pelanggan' => fake()->name(),
            'alamat' => fake()->name(),
            'telp' => fake()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'password' => 'ljsuyx78ydqzj',
        ];
    }
}
