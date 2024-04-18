<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Stafi;

class StafiController extends Controller
{
    public function index()
    {
        $stafi = Stafi::all();
        return view('stafi.index', compact('stafi'));
    }

    public function create()
    {
        return view('stafi.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|integer',
            'Email' => 'required|email',
            'Password' => 'required',
            'Kategoria' => 'required',
        ]);

        Stafi::create($request->all());

        return redirect()->route('stafi.index')
                         ->with('success', 'Stafi created successfully.');
    }

    public function show(Stafi $stafi)
    {
        return view('stafi.show', compact('stafi'));
    }

    public function edit(Stafi $stafi)
    {
        return view('stafi.edit', compact('stafi'));
    }

    public function update(Request $request, Stafi $stafi)
    {
        $request->validate([
            'Emri' => 'required',
            'Mbiemri' => 'required',
            'Mosha' => 'required|integer',
            'Email' => 'required|email',
            'Password' => 'required',
            'Kategoria' => 'required',
        ]);

        $stafi->update($request->all());

        return redirect()->route('stafi.index')
                         ->with('success', 'Stafi updated successfully');
    }

    public function destroy(Stafi $stafi)
    {
        $stafi->delete();

        return redirect()->route('stafi.index')
                         ->with('success', 'Stafi deleted successfully');
    }
}
