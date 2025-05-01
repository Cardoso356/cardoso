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
        Schema::table('autors', function (Blueprint $table) { //schema::table para alterar os dados da tabela

            //configurando a chave estrangeira
            $table->foreignId('user_id') //estamos conectando a chave estrangeira
                  ->constrained('users') //aqui fala com qual tabela é a relação
                  ->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        //
    }
};
