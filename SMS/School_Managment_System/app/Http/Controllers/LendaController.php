<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Lenda;

class LendaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $lendas = Lenda::all();
        return view('lendas.index', compact('lendas'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('lendas.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required',
            // Add validation rules for other fields as needed
        ]);

        Lenda::create($request->all());
        
        return redirect()->route('lendas.index')
            ->with('success', 'Lenda created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Lenda $lenda)
    {
        return view('lendas.show', compact('lenda'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Lenda $lenda)
    {
        return view('lendas.edit', compact('lenda'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Lenda $lenda)
    {
        $request->validate([
            'name' => 'required',
            // Add validation rules for other fields as needed
        ]);

        $lenda->update($request->all());
        
        return redirect()->route('lendas.index')
            ->with('success', 'Lenda updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Lenda $lenda)
    {
        $lenda->delete();
        
        return redirect()->route('lendas.index')
            ->with('success', 'Lenda deleted successfully');
    }
}
