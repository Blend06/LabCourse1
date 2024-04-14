<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('drejtori', function (Blueprint $table) {
            $table->id();
            $table->timestamps();
            $table->string('Emri');
            $table->string('Mbiemri');
            $table->integer('Mosha');
            $table->string('Email')->unique();
            $table->string('Password');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('drejtori');
    }
};
