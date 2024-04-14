<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Orari; // Make sure to import the Orari model

class OrariController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $oraris = Orari::all(); // Retrieve all Orari records
        return view('oraris.index', ['oraris' => $oraris]); // Pass the records to the view
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('oraris.create'); // Return the create form view
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Dita' => 'required',
            'Koha' => 'required',
            'Lenda' => 'required',
            'Profesori' => 'required',
            'Klasa' => 'required',
        ]);

        Orari::create($validatedData); // Create a new Orari record with the validated data
        return redirect('/oraris')->with('success', 'Orari created successfully!'); // Redirect to the index page
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $orari = Orari::findOrFail($id); // Find the Orari record with the provided ID
        return view('oraris.show', ['orari' => $orari]); // Pass the record to the view
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit($id)
    {
        $orari = Orari::findOrFail($id); // Find the Orari record with the provided ID
        return view('oraris.edit', ['orari' => $orari]); // Pass the record to the edit form view
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, $id)
    {
        $validatedData = $request->validate([
            'Dita' => 'required',
            'Koha' => 'required',
            'Lenda' => 'required',
            'Profesori' => 'required',
            'Klasa' => 'required',
        ]);

        Orari::whereId($id)->update($validatedData); // Update the Orari record with the provided ID with the validated data
        return redirect('/oraris')->with('success', 'Orari updated successfully!'); // Redirect to the index page
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $orari = Orari::findOrFail($id); // Find the Orari record with the provided ID
        $orari->delete(); // Delete the Orari record
        return redirect('/oraris')->with('success', 'Orari deleted successfully!'); // Redirect to the index page
    }
}