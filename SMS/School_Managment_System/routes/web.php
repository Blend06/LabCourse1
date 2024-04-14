<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\OrariController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DrejtoriController;
use App\Http\Controllers\StudentiController;





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
Route::resource('oraris', OrariController::class);
Route::resource('drejtori', DrejtoriController::class);
Route::resource('_studenti', 'StudentiController');
require __DIR__.'/auth.php';

