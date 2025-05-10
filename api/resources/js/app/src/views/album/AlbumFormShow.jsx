import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function AlbumFormShow(){

    const navigate = useNavigate();

    const [album, setAlbum] = useState({
        id: null,
        tituloAlbum:"",
        formato:"",
        dataAlbum:"",
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/album/show/${id}`)
                .then(({data})=>{
                    setAlbum(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/album/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {album.id && <h1>Consulta de Álbuns: {album.tituloAlbum}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={album.tituloAlbum} placeholder="Título do Álbum" readOnly={true}/>
                    <input defaultValue={album.formato} placeholder="Formato do Álbum" readOnly={true}/>
                    <input defaultValue={album.dataAlbum} placeholder="Data de Lançamento do Álbum" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}