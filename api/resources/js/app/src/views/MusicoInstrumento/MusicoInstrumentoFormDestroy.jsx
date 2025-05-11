import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicoInstrumentoFormDestroy(){

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
        axiosClient.delete(`/musicoinstrumento/destroy/${id}`) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusicoInstrumento({});
                console.log('Relação de Músico - Instrumento excluída com sucesso');
                navigate('/musicoinstrumento/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoinstrumento.id && <h1>Exclusão de Músico - Instrumento:</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musicoinstrumento.musicoId} placeholder="Id do Músico" readOnly={true}/>
                    <input defaultValue={musicoinstrumento.musico?.nomeMusico || ""} placeholder="Nome do Músico" readOnly/>
                    <input defaultValue={musicoinstrumento.instrumentoId} placeholder="Id do Instrumento" readOnly={true}/>
                    <input defaultValue={musicoinstrumento.instrumento?.nomeInstrumento || ""} placeholder="Nome do instrumento" readOnly/>
                   { /*<input value={musica.album?.tituloAlbum || ""} readOnly/> *é apenas para visualização*/}

                    <button className="btn btn-delete">Excluir</button>
                    <Link type="button" className="btn btn-cancel" to="/musicoinstrumento/index">Cancelar</Link>
                    

                </form>

                </div>

            </div>


        </Fragment>
    )
}