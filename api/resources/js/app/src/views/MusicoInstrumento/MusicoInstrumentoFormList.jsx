import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function MusicoInstrumentoFormList(){

    const [musicoinstrumentos, setMusicoInstrumentos] = useState([]);

    const getMusicoInstrumentos = () => {
        axiosClient.get('/musicoinstrumento/index')
                    .then(({data}) => {
                    setMusicoInstrumentos(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getMusicoInstrumentos();
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
                            Relação de Músicos - Instrumentos
                        </h1>
                        <Link className='btn-add' to="/musicoinstrumento/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Id do Músico</th>
                                <th>Músico</th>
                                <th>Id do Instrumento</th>
                                <th>Instrumento do Músico</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                musicoinstrumentos.length > 0 ? (
                                    musicoinstrumentos.map(musicoinstrumento => (
                                        <tr key={musicoinstrumento.id} >
                                            <td>{musicoinstrumento.id}</td>
                                            <td>{musicoinstrumento.musicoId}</td>
                                            <td>{musicoinstrumento.musico?.nomeMusico}</td>
                                            <td>{musicoinstrumento.instrumentoId}</td>
                                            <td>{musicoinstrumento.instrumento?.nomeInstrumento}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/musicoinstrumento/update/${musicoinstrumento.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/musicoinstrumento/destroy/${musicoinstrumento.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/musicoinstrumento/show/${musicoinstrumento.id}`}>Show</Link>
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

