<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Profesori;

class ProfesoriController extends Controller
{
    public function index()
    {
        $profesoris = Profesori::all();
        return view('profesoris.index', compact('profesoris'));
    }

    public function create()
    {
        return view('profesoris.create');
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|numeric',
            'Email' => 'required|email|unique:profesoris',
            'Password' => 'required',
        ]);

        Profesori::create($validatedData);

        return redirect('/profesoris')->with('success', 'Profesori added successfully.');
    }

    public function show(string $id)
    {
        $profesori = Profesori::findOrFail($id);
        return view('profesoris.show', compact('profesori'));
    }

    public function edit(string $id)
    {
        $profesori = Profesori::findOrFail($id);
        return view('profesoris.edit', compact('profesori'));
    }

    public function update(Request $request, string $id)
    {
        $validatedData = $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|numeric',
            'Email' => 'required|email|unique:profesoris,Email,'.$id,
            'Password' => 'required',
        ]);

        Profesori::whereId($id)->update($validatedData);

        return redirect('/profesoris')->with('success', 'Profesori updated successfully.');
    }

    public function destroy(string $id)
    {
        Profesori::findOrFail($id)->delete();
        return redirect('/profesoris')->with('success', 'Profesori deleted successfully.');
    }
}
