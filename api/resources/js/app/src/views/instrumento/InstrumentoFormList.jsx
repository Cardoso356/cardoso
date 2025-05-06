import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function InstrumentoFormList(){

    const [instrumentos, setInstrumentos] = useState([]);

    const getInstrumentos = () => {
        axiosClient.get('/instrumento/index')
                    .then(({data}) => {
                    setInstrumentos(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getInstrumentos();
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
                            Instrumentos
                        </h1>
                        <Link className='btn-add' to="/instrumento/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Tipo</th>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                instrumentos.length > 0 ? (
                                    instrumentos.map(instrumento => (
                                        <tr key={instrumento.id} >
                                            <td>{instrumento.id}</td>
                                            <td>{instrumento.nomeInstrumento}</td>
                                            <td>{instrumento.tipo}</td>
                                            <td>{instrumento.marca}</td>
                                            <td>{instrumento.modelo}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/instrumento/update/${instrumento.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/instrumento/destroy/${instrumento.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/instrumento/show/${instrumento.id}`}>Show</Link>
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

