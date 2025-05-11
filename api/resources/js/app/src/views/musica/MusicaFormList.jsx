import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function MusicaFormList(){

    const [musicas, setMusicas] = useState([]);

    const getMusicas = () => {
        axiosClient.get('/musica/index')
                    .then(({data}) => {
                    setMusicas(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getMusicas();
    },[]);

    //console.log(users);


    return(
        <div>
            
            <div className='display'>
                <div className='card animated fadeInDown'> 
                    <div style={{
                        display:'flex',
                        justifyContent:'space-between',
                        alignItems:'center'
                    }}>
                        <h1>
                            Músicas
                        </h1>
                        <Link className='btn-add' to="/musica/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Gênero</th>
                                <th>Gravadora</th>
                                <th>ID do Álbum</th>
                                <th>Título do Álbum</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                musicas.length > 0 ? (
                                    musicas.map(musica => (
                                        <tr key={musica.id} >
                                            <td>{musica.id}</td>
                                            <td>{musica.nomeMusica}</td>
                                            <td>{musica.genero}</td>
                                            <td>{musica.gravadora}</td>
                                            <td>{musica.albumId}</td>
                                            <td>{musica.album?.tituloAlbum}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/musica/update/${musica.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/musica/destroy/${musica.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/musica/show/${musica.id}`}>Show</Link>
                                            </td>
                                        </tr>
                                    ))
                                ):(
                                    <tr>
                                        <td>
                                            Nenhum registro localizado
                                        </td>
                                    </tr>
                                
                                )
                            }

                        </tbody>

                    </table>


                </div>

            </div>



        </div>
    )
}

