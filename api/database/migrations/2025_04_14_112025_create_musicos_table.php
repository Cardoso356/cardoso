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
        Schema::create('musicos', function (Blueprint $table) { //tenho que colocar na mão os campos da tabela aqui
            $table->id();
            $table->string('nomeMusico');
            $table->string('idade');
            $table->string('endereco');
            $table->string('telefone');
            $table->string('cidade');
            $table->string('cpf');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('musicos');
    }
};
