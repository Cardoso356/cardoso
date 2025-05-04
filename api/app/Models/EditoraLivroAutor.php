<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EditoraLivroAutor extends Model
{

    protected $table ="editora_livro_autor";
    
    public function editora(){
        $this->belongsTo(Editora::class); //editora_livro_autor pertence a uma editora

    }

    public function autor(){
        $this->belongsTo(Autor::class); //editora_livro_autor pertence a um livro
    }

}
