<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Drejtori;

class DrejtoriController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $drejtoris = Drejtori::all();
        return view('drejtori.index', compact('drejtoris'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('drejtori.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|integer',
            'Email' => 'required|email',
            'Password' => 'required',
        ]);

        Drejtori::create($validatedData);

        return redirect()->route('drejtori.index')->with('success', 'Drejtori created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $drejtori = Drejtori::findOrFail($id);
        return view('drejtori.show', compact('drejtori'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $drejtori = Drejtori::findOrFail($id);
        return view('drejtori.edit', compact('drejtori'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|integer',
            'Email' => 'required|email',
            'Password' => 'required',
        ]);

        Drejtori::findOrFail($id)->update($validatedData);

        return redirect()->route('drejtori.index')->with('success', 'Drejtori updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Drejtori::findOrFail($id)->delete();
        return redirect()->route('drejtori.index')->with('success', 'Drejtori deleted successfully.');
    }
}
