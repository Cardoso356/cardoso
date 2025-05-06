import React, { useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { Link } from "react-router-dom";

export default function MusicoFormList(){

    const [musicos, setMusicos] = useState([]);

    const getMusicos = () => {
        axiosClient.get('/musico/index')
                    .then(({data}) => {
                    setMusicos(data.data); //o primeiro data é do react e o segundo é o nosso que foi gerado, é necessário os dois
                    })
                    .catch(()=>{
                        console.log(error);
                    });

    };

    useEffect(()=>{
        getMusicos();
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
                            Músicos
                        </h1>
                        <Link className='btn-add' to="/musico/store">Store</Link>

                    </div>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Nome</th>
                                <th>Idade</th>
                                <th>CPF</th>
                                <th>Telefone</th>
                                <th>Endereço</th>
                                <th>Cidade</th>
                                <th className='center actions' colSpan={3}>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                musicos.length > 0 ? (
                                    musicos.map(musico => (
                                        <tr key={musico.id} >
                                            <td>{musico.id}</td>
                                            <td>{musico.nomeMusico}</td>
                                            <td>{musico.idade}</td>
                                            <td>{musico.cpf}</td>
                                            <td>{musico.telefone}</td>
                                            <td>{musico.endereco}</td>
                                            <td>{musico.cidade}</td>
                                            <td className='center actions'>
                                                <Link className='btn-edit' to={`/musico/update/${musico.id}`}>Update</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-delete' to={`/musico/destroy/${musico.id}`}>Destroy</Link>
                                            </td>
                                            <td className='center actions'>
                                                <Link className='btn-show' to={`/musico/show/${musico.id}`}>Show</Link>
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

