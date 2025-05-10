import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, Link } from "react-router-dom";

export default function AlbumFormStore(){

    const navigate = useNavigate();

    const [album, setAlbum] = useState({
        id: null,
        tituloAlbum:"",
        formato:"",
        dataAlbum:"",
    });


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.post(`/album/store`, album) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setAlbum({});
                console.log('Álbum incluído com sucesso');
                navigate('/album/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    <h1>Inclusão do álbum</h1>
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={album.tituloAlbum} placeholder="Título do Álbum" onChange={e=> setAlbum({...album, tituloAlbum: e.target.value})}/>
                    <input type="text" value={album.formato} placeholder="Formato do Álbum" onChange={e=> setAlbum({...album, formato: e.target.value})}/>
                    <input type="text" value={album.dataAlbum} placeholder="Data de lançamento do Álbum" onChange={e=> setAlbum({...album, dataAlbum: e.target.value})}/>

                    <button className="btn btn-add" to="/album/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/album/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

