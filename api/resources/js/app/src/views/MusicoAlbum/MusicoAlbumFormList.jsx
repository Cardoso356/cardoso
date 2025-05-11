import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function MusicoAlbumFormList(){

    const [musicoalbums, setMusicoAlbums] = useState([]);

    const getMusicoAlbums = () => {
        axiosClient.get('/musicoalbum/index')
                    .then(({data}) => {
                    setMusicoAlbums(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getMusicoAlbums();
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
                            Relação de Músicos - Álbuns
                        </h1>
                        <Link className='btn-add' to="/musicoalbum/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Id do Músico</th>
                                <th>Músico</th>
                                <th>Id do Álbum</th>
                                <th>Álbum do Músico</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                musicoalbums.length > 0 ? (
                                    musicoalbums.map(musicoalbum => (
                                        <tr key={musicoalbum.id} >
                                            <td>{musicoalbum.id}</td>
                                            <td>{musicoalbum.musicoId}</td>
                                            <td>{musicoalbum.musico?.nomeMusico}</td>
                                            <td>{musicoalbum.albumId}</td>
                                            <td>{musicoalbum.album?.tituloAlbum}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/musicoalbum/update/${musicoalbum.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/musicoalbum/destroy/${musicoalbum.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/musicoalbum/show/${musicoalbum.id}`}>Show</Link>
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

