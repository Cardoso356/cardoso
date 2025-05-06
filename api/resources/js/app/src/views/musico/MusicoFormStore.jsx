import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, Link } from "react-router-dom";

export default function MusicoFormStore(){

    const navigate = useNavigate();

    const [musico, setMusico] = useState({
        id: null,
        nomeMusico:"",
        idade:"",
        endereco:"",
        telefone:"",
        cpf:"",
        cidade:"",
    });


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.post(`/musico/store`, musico) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusico({});
                console.log('Músico incluído com sucesso');
                navigate('/musico/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    <h1>Inclusão do músico</h1>
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={musico.nomeMusico} placeholder="Nome do Músico" onChange={e=> setMusico({...musico, nomeMusico: e.target.value})}/>
                    <input type="text" value={musico.idade} placeholder="Idade do Músico" onChange={e=> setMusico({...musico, idade: e.target.value})}/>
                    <input type="text" value={musico.cpf} placeholder="CPF do Músico" onChange={e=> setMusico({...musico, cpf: e.target.value})}/>
                    <input type="text" value={musico.telefone} placeholder="Telefone do Músico" onChange={e=> setMusico({...musico, telefone: e.target.value})}/>
                    <input type="text" value={musico.endereco} placeholder="Endereço do Músico" onChange={e=> setMusico({...musico, endereco: e.target.value})}/>
                    <input type="text" value={musico.cidade} placeholder="Cidade do Músico" onChange={e=> setMusico({...musico, cidade: e.target.value})}/>

                    <button className="btn btn-add" to="/musico/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/musico/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

