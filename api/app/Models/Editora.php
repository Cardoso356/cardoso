<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Editora extends Model
{
    public function livros(){
        $this->hasMany(EditoraLivroAutor::class); //hasMany é de vários livros, ou seja, n livros
    }
}
