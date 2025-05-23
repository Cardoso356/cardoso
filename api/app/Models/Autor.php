<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Autor extends Model
{
    use HasFactory;

    protected $table='autors';

    protected $fillable = [ //para o armazenamento em massa
        'nome',
        'cidade',
        'endereco',
        'bairro',
        'cep',
        'email',
        'telefone',
    ];

    protected $hidden = [
        'updated_at',
        'created_at',
    ];

    public function user(){ //relacionamento com a tabela User
        $this->belongsTo(User::class); //relacionamento 1 para 1, o autor pertence a um usuário
    }

    public function livros(){
        $this->hasMany(EditoraLivroAutor::class); //um autor pode ter vários livros -> aqui é de um relacionamento n para n
    }

}
