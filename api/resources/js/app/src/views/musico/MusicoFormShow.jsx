import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function MusicoFormShow(){

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


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/musico/show/${id}`)
                .then(({data})=>{
                    setMusico(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/musico/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musico.id && <h1>Consulta de músicos: {musico.nomeMusico}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musico.nomeMusico} placeholder="Nome do Músico" readOnly={true}/>
                    <input defaultValue={musico.idade} placeholder="Idade do Músico" readOnly={true}/>
                    <input defaultValue={musico.cpf} placeholder="CPF do Músico" readOnly={true}/>
                    <input defaultValue={musico.telefone} placeholder="Telefone do Músico" readOnly={true}/>
                    <input defaultValue={musico.endereco} placeholder="Endereço do Músico" readOnly={true}/>
                    <input defaultValue={musico.cidade} placeholder="Cidade do Músico" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}