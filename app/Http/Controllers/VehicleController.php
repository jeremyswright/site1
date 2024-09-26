<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\Vehicle;
use Illuminate\Contracts\View\View;
use Inertia\Inertia;
use Inertia\Response;

class VehicleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Response
    {
        $vehicles = Vehicle::all();

        return Inertia::render('Vehicle/List', [
            'vehicles' => $vehicles
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create(): Response
    {
        $vehicle = new Vehicle();

        return Inertia::render('Vehicle/Maint', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreVehicleRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(Vehicle $vehicle): Response
    {
        return Inertia::render('Vehicle/Maint', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Vehicle $vehicle): Response
    {
        return Inertia::render('Vehicle/Maint', [
            'vehicle' => $vehicle
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateVehicleRequest $request, Vehicle $vehicle)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
