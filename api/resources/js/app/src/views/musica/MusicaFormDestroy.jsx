import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicaFormDestroy(){

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
        axiosClient.delete(`/musica/destroy/${id}`) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusica({});
                console.log('Música excluída com sucesso');
                navigate('/musica/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musica.id && <h1>Exclusão da Música: {musica.nomeMusica}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musica.nomeMusica} placeholder="Nome da Música" readOnly={true}/>
                    <input defaultValue={musica.genero} placeholder="Gênero da música" readOnly={true}/>
                    <input defaultValue={musica.gravadora} placeholder="Gravadora da música" readOnly={true}/>
                    <input defaultValue={musica.albumId} placeholder="Id do Álbum da música" readOnly={true}/>
                    <input value={musica.album?.tituloAlbum || ""} readOnly/> {/*é apenas para visualização*/}

                    <button className="btn btn-delete">Excluir</button>
                    <Link type="button" className="btn btn-cancel" to="/musica/index">Cancelar</Link>
                    

                </form>

                </div>

            </div>


        </Fragment>
    )
}