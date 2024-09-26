<?php

namespace Database\Factories;

use Faker\Factory as FakerFactory;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Vehicle>
 */
class VehicleFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $faker = FakerFactory::create('en_GB');
        $faker->addProvider(new \OrderMarket\Faker\Vehicle\Provider($faker));
        $make = $faker->vehicleMake;

        return [
            'no_seats' => $faker->numberBetween(16, 53),
            'name' => sprintf('%s %s', $make, $faker->vehicleModel($make)),
            'registration' => $faker->vehicleRegistration,
            'can_tow' => $faker->boolean(),
        ];
    }
}
