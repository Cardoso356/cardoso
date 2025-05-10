import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function AlbumFormDestroy(){

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
        axiosClient.delete(`/album/destroy/${id}`) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setAlbum({});
                console.log('Álbum excluído com sucesso');
                navigate('/album/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {album.id && <h1>Exclusão do Álbum: {album.tituloAlbum}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={album.tituloAlbum} placeholder="Título do Álbum" readOnly={true}/>
                    <input defaultValue={album.formato} placeholder="Formato do Álbum" readOnly={true}/>
                    <input defaultValue={album.dataAlbum} placeholder="Data do Álbum" readOnly={true}/>

                    <button className="btn btn-delete">Excluir</button>
                    <Link type="button" className="btn btn-cancel" to="/album/index">Cancelar</Link>
                    

                </form>

                </div>

            </div>


        </Fragment>
    )
}