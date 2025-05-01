<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class EditoraLivroAutor extends Model
{

    protected $table ="editora_livro_autor";
    
    public function editora(){
        $this->belongsTo(Editora::class); //relacionamento de muitos para muitos

    }

    public function autor(){
        $this->belongsTo(Autor::class);
    }

}
