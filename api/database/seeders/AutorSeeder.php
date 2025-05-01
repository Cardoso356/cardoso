<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\models\Autor;

class AutorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Autor::factory()->count(20)->create(); //cria uma base de dados para testes, com 20 dados
    }
}
