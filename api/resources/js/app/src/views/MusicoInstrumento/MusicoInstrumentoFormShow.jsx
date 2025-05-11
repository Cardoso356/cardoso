import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function MusicoInstrumentoFormShow(){

    const navigate = useNavigate();

    const [musicoinstrumento, setMusicoInstrumento] = useState({
        id: null,
        musicoId:"",
        instrumentoId:"",
        musico: {
            nomeMusico:"",
        },
        instrumento: {
            nomeInstrumento:"",
        }
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/musicoinstrumento/show/${id}`)
                .then(({data})=>{
                    setMusicoInstrumento(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/musicoinstrumento/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoinstrumento.id && <h1>Consulta de Músicos-Instrumentos:</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musicoinstrumento.musicoId} placeholder="Id do Músico" readOnly={true}/>
                    <input defaultValue={musicoinstrumento.musico?.nomeMusico} placeholder="Nome do Músico" readOnly={true}/>
                    <input defaultValue={musicoinstrumento.instrumentoId} placeholder="Id do Instrumento" readOnly={true}/>
                    <input defaultValue={musicoinstrumento.instrumento?.nomeInstrumento} placeholder="Nome do Instrumento" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}