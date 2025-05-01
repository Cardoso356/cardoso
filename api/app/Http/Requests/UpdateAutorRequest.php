<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateAutorRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'nome'=>'required|string|max:100', //max é tamanho máximo
            'cidade'=>'required|string|max:100',
            'endereco'=>'required|string|max:100',
            'bairro'=>'required|string|max:100',
            'cep'=>'required|string|max:20',
            'email'=>'required|string|email|max:255|unique:autors,email',
            'telefone'=>'required|string|max:100',
        ];
    }

    public function messages(){
        return [
            'nome.required'=>'O nome do autor deve ser informado',
            'cidade.required'=>'O nome da cidade deve ser informado',
            'endereco.required'=>'O endereço do autor deve ser informado',
            'bairro.required'=>'O bairro do autor deve ser informado',
            'cep.required'=>'O CEP do autor deve ser informado',
            'email.required'=>'O email do autor deve ser informado',
            'telefone.required'=>'O telefone do autor deve ser informado',
        ];
    }

}
