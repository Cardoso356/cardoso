import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function AlbumFormList(){

    const [albums, setAlbums] = useState([]);

    const getAlbums = () => {
        axiosClient.get('/album/index')
                    .then(({data}) => {
                    setAlbums(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getAlbums();
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
                            Álbuns
                        </h1>
                        <Link className='btn-add' to="/album/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Formato</th>
                                <th>Data de Lançamento</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                albums.length > 0 ? (
                                    albums.map(album => (
                                        <tr key={album.id} >
                                            <td>{album.id}</td>
                                            <td>{album.tituloAlbum}</td>
                                            <td>{album.formato}</td>
                                            <td>{album.dataAlbum}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/album/update/${album.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/album/destroy/${album.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/album/show/${album.id}`}>Show</Link>
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

