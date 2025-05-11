import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function MusicoAlbumFormShow(){

    const navigate = useNavigate();

    const [musicoalbum, setMusicoAlbum] = useState({
        id: null,
        musicoId:"",
        albumId:"",
        musico: {
            nomeMusico:"",
        },
        album: {
            tituloAlbum:"",
        }
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/musicoalbum/show/${id}`)
                .then(({data})=>{
                    setMusicoAlbum(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/musicoalbum/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoalbum.id && <h1>Consulta de Músicos-Álbuns:</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musicoalbum.musicoId} placeholder="Id do Músico" readOnly={true}/>
                    <input defaultValue={musicoalbum.musico?.nomeMusico} placeholder="Nome do Músico" readOnly={true}/>
                    <input defaultValue={musicoalbum.albumId} placeholder="Id do Álbum" readOnly={true}/>
                    <input defaultValue={musicoalbum.album?.tituloAlbum} placeholder="Título do Álbum" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}