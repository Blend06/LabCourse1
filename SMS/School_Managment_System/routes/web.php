<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrariController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\StudentiController;
use App\Http\Controllers\LendaController;
use App\Http\Controllers\StafiController;





Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});
Route::resource('oraris', 'OrariController');
Route::resource('_studenti', 'StudentiController');
Route::resource('_lenda', 'LendaController');
Route::resource('stafitable', 'StafiController');


require __DIR__.'/auth.php';

