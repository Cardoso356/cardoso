<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Notifications\Notifiable;

class Musica extends Model
{
    use HasFactory, Notifiable, SoftDeletes;

     /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
     protected $fillable = [ //esses são os campos em que o usuário tem para atualizar em massa
        'nomeMusica',
        'genero',
        'gravadora',
        'albumId',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var list<string>
     *
     */
    protected $hidden = [ //esses são os campos em que nós não queremos mostrar na resposta
        'remember_token',
        'updated_at',
        'created_at',
        'deleted_at',
    ];
 
    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            //'email_verified_at' => 'datetime',
            //'senha' => 'hashed',
        ];
    }

    public function album(){ //album no singular pois, musica esta relacionado a um único album apenas e não vários albums
        return $this->belongsTo(Album::class, 'albumId'); //uma música pertence a um album
    }
}
