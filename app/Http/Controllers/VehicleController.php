<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreVehicleRequest;
use App\Http\Requests\UpdateVehicleRequest;
use App\Models\Vehicle;
use Illuminate\Contracts\View\View;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
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
    public function store(StoreVehicleRequest $request): RedirectResponse
    {
        try {
            Vehicle::create([
                'name' => $request->name,
                'registration' => $request->registration,
                'no_seats' => $request->no_seats
            ]);

            return to_route('vehicles.index')->with(['message' => 'vehicle created successfully']);
        } catch (\Throwable $th) {
            $message = 'failed: ' . $th->getMessage();
            Log::info(basename(__FILE__, '.php') . '->' . __FUNCTION__ . ': ' . $message);

            return back()->with(['error' => $message]);
        }
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
        try {
            $vehicle->update([
                'name' => $request->name,
                'registration' => $request->registration
            ]);
        } catch (\Throwable $th) {
            $message = 'failed to update vehicle: ' . $th->getMessage();
            Log::error(basename(__FILE__, '.php') . '->' . __FUNCTION__ . ': ' . $message);

            return back()->withErrors($th->getMessage());
        }

        return redirect('/vehicles');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Vehicle $vehicle)
    {
        //
    }
}
