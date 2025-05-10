import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function AlbumFormUpdate(){

    const navigate = useNavigate();

    const [album, setAlbum] = useState({
        id:null,
        tituloAlbum:"",
        formato:"",
        dataAlbum:"",
    });


    const {id} = useParams();

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
        axiosClient.put(`/album/update/${id}`, album) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setAlbum({});
                console.log("Álbum alterado com sucesso");
                navigate('/album/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {album.id && <h1>Alteração do Álbum</h1>}

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input value={album.tituloAlbum} placeholder="Título do Álbum" onChange={e=> setAlbum({...album, tituloAlbum: e.target.value})}/>
                    <input value={album.formato} placeholder="Formato do Álbum" onChange={e=> setAlbum({...album, formato: e.target.value})}/>
                    <input value={album.dataAlbum} placeholder="Data do Álbum" onChange={e=> setAlbum({...album, dataAlbum: e.target.value})}/>

                    <button className="btn btn-edit" to="/album/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/album/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

