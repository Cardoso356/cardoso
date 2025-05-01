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
        Schema::create('autors', function (Blueprint $table) {
            $table->id(); //chave primária
            $table->string('nome',100);
            $table->string('cidade',100);
            $table->string('endereco',100);
            $table->string('bairro',100);
            $table->string('cep',20);
            $table->string('email',100);
            $table->string('telefone',100);
            $table->timestamps(); //é a data do registro
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('autors');
    }
};
