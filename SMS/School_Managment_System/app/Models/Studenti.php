<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Studenti extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'Emri', 'Mbiemri', 'Mosha', 'Email', 'Mesatarja', 'Viti_Mesimore', 'Password', 'pozita'
    ];
}
