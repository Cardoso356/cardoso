import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicoAlbumFormUpdate(){

    const navigate = useNavigate();

    const [musicoalbum, setMusicoAlbum] = useState({
        id:null,
        musicoId:"",
        albumId:"",
        musico: {
            nomeMusico:"",
        },
        album: {
            tituloAlbum:"",
        }
    });


    const {id} = useParams();

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
        axiosClient.put(`/musicoalbum/update/${id}`, musicoalbum) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusicoAlbum({});
                console.log("Relação de Músico - Álbum alterada com sucesso");
                navigate('/musicoalbum/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoalbum.id && <h1>Alteração de Músico - Álbum</h1>}

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input value={musicoalbum.musicoId} placeholder="Id do Músico" onChange={e=> setMusicoAlbum({...musicoalbum, musicoId: e.target.value})}/>
                    <input value={musicoalbum.musico?.nomeMusico || ""} readOnly/> {/*é apenas para visualização*/}
                    <input value={musicoalbum.albumId} placeholder="Id do Álbum" onChange={e=> setMusicoAlbum({...musicoalbum, albumId: e.target.value})}/>
                    <input value={musicoalbum.album?.tituloAlbum || ""} readOnly/> {/*é apenas para visualização*/}

                    <button className="btn btn-edit" to="/musicoalbum/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/musicoalbum/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

