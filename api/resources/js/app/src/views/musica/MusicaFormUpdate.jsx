import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicaFormUpdate(){

    const navigate = useNavigate();

    const [musica, setMusica] = useState({
        id:null,
        nomeMusica:"",
        genero:"",
        gravadora:"",
        albumId:"",
        album: {
            tituloAlbum:"",
        }
    });


    const {id} = useParams();

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
        axiosClient.put(`/musica/update/${id}`, musica) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusica({});
                console.log("Música alterada com sucesso");
                navigate('/musica/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musica.id && <h1>Alteração da música</h1>}

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input value={musica.nomeMusica} placeholder="Nome da Música" onChange={e=> setMusica({...musica, nomeMusica: e.target.value})}/>
                    <input value={musica.genero} placeholder="Gênero da Música" onChange={e=> setMusica({...musica, genero: e.target.value})}/>
                    <input value={musica.gravadora} placeholder="Gravadora da Música" onChange={e=> setMusica({...musica, gravadora: e.target.value})}/>
                    <input value={musica.albumId} placeholder="Id do Álbum da Música" onChange={e=> setMusica({...musica, albumId: e.target.value})}/>
                    <input value={musica.album?.tituloAlbum || ""} readOnly/> {/*é apenas para visualização*/}

                    <button className="btn btn-edit" to="/musica/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/musica/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

