<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Studenti;

class StudentiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Studenti::all();
        return view('studenti.index', compact('students'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('studenti.create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Emri' => 'required|string',
            'Mbiemri' => 'required|string',
            'Mosha' => 'required|integer',
            'Email' => 'required|email|unique:studenti,Email',
            'Mesatarja' => 'nullable|numeric',
            'Viti_Mesimore' => 'nullable|integer',
            'Password' => 'required|string',
            'pozita' => 'required|string', 
        ]);

        Studenti::create($validatedData);

        return redirect()->route('studenti.index')->with('success', 'Studenti u krijua me sukses!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $student = Studenti::findOrFail($id);
        return view('studenti.show', compact('student'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $student = Studenti::findOrFail($id);
        return view('studenti.edit', compact('student'));
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'Emri' => 'required|string',
            'Mbiemri' => 'required|string',
            'Mosha' => 'required|integer',
            'Email' => 'required|email|unique:studenti,Email,'.$id,
            'Mesatarja' => 'nullable|numeric',
            'Viti_Mesimore' => 'nullable|integer',
            'Password' => 'required|string',
            'pozita' => 'required|string', 
        ]);

        $student = Studenti::findOrFail($id);
        $student->update($validatedData);

        return redirect()->route('studenti.index')->with('success', 'Te dhenat e studentit u perditesuan me sukses!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $student = Studenti::findOrFail($id);
        $student->delete();

        return redirect()->route('studenti.index')->with('success', 'Studenti u fshi me sukses!');
    }
}
