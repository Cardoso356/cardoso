import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicoFormDestroy(){

    const navigate = useNavigate();

    const [musico, setMusico] = useState({
        id: null,
        nomeMusico:"",
        idade:"",
        endereco:"",
        telefone:"",
        cpf:"",
        cidade:"",
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/musico/show/${id}`)
                .then(({data})=>{
                    setMusico(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.delete(`/musico/destroy/${id}`) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusico({});
                console.log('Músico excluído com sucesso');
                navigate('/musico/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musico.id && <h1>Exclusão do Músico: {musico.nomeMusico}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={musico.nomeMusico} placeholder="Nome do Músico" readOnly={true}/>
                    <input defaultValue={musico.idade} placeholder="Idade do músico" readOnly={true}/>
                    <input defaultValue={musico.cpf} placeholder="CPF do músico" readOnly={true}/>
                    <input defaultValue={musico.telefone} placeholder="Telefone do músico" readOnly={true}/>
                    <input defaultValue={musico.endereco} placeholder="Endereço do músico" readOnly={true}/>
                    <input defaultValue={musico.cidade} placeholder="Cidade do Músico" readOnly={true}/>

                    <button className="btn btn-delete">Excluir</button>
                    <Link type="button" className="btn btn-cancel" to="/musico/index">Cancelar</Link>
                    

                </form>

                </div>

            </div>


        </Fragment>
    )
}