import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, Link } from "react-router-dom";

export default function MusicoAlbumFormStore(){

    const navigate = useNavigate();

    const [musicoalbum, setMusicoAlbum] = useState({
        id: null,
        musicoId:"",
        albumId:"",
    });


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.post(`/musicoalbum/store`, musicoalbum) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusicoAlbum({});
                console.log('Relação de Músico - Álbum incluída com sucesso');
                navigate('/musicoalbum/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    <h1>Inclusão de Músico - Álbum</h1>
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={musicoalbum.musicoId} placeholder="Id do Músico" onChange={e=> setMusicoAlbum({...musicoalbum, musicoId: e.target.value})}/>
                    <input type="text" value={musicoalbum.albumId} placeholder="Id do Álbum" onChange={e=> setMusicoAlbum({...musicoalbum, albumId: e.target.value})}/>

                    <button className="btn btn-add" to="/musicoalbum/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/musicoalbum/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

