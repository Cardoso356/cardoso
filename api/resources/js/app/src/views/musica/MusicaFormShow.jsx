import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function MusicaFormShow(){

    const navigate = useNavigate();

    const [musica, setMusica] = useState({
        id: null,
        nomeMusica:"",
        genero:"",
        gravadora:"",
        albumId:"",
        album: {
            tituloAlbum:"",
        }
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/musica/show/${id}`)
                .then(({data})=>{
                    setMusica(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/musica/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musica.id && <h1>Consulta de músicas: {musica.nomeMusica}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musica.nomeMusica} placeholder="Nome da Música" readOnly={true}/>
                    <input defaultValue={musica.genero} placeholder="Gênero da Música" readOnly={true}/>
                    <input defaultValue={musica.gravadora} placeholder="Gravadora da Música" readOnly={true}/>
                    <input defaultValue={musica.albumId} placeholder="Id do Álbum da Música" readOnly={true}/>
                    <input defaultValue={musica.album?.tituloAlbum} placeholder="Título do Álbum da Música" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}