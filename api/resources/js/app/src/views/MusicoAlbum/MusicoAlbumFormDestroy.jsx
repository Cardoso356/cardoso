import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicoAlbumFormDestroy(){

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
        axiosClient.delete(`/musicoalbum/destroy/${id}`) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusicoAlbum({});
                console.log('Relação de Músico - Álbum excluída com sucesso');
                navigate('/musicoalbum/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoalbum.id && <h1>Exclusão de Músico - Álbum:</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musicoalbum.musicoId} placeholder="Id do Músico" readOnly={true}/>
                    <input defaultValue={musicoalbum.musico?.nomeMusico || ""} placeholder="Nome do Músico" readOnly/>
                    <input defaultValue={musicoalbum.albumId} placeholder="Id do Álbum" readOnly={true}/>
                    <input defaultValue={musicoalbum.album?.tituloAlbum || ""} placeholder="Título do Álbum" readOnly/>

                    <button className="btn btn-delete">Excluir</button>
                    <Link type="button" className="btn btn-cancel" to="/musicoalbum/index">Cancelar</Link>
                    

                </form>

                </div>

            </div>


        </Fragment>
    )
}