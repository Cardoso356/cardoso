import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams } from "react-router-dom";

export default function InstrumentoFormShow(){

    const navigate = useNavigate();

    const [instrumento, setInstrumento] = useState({
        id: null,
        nomeInstrumento:"",
        tipo:"",
        marca:"",
        modelo:"",
    });


    const { id } = useParams();

    useEffect(()=>{
        if (id){
            
                axiosClient.get(`/instrumento/show/${id}`)
                .then(({data})=>{
                    setInstrumento(data.data);
                }).catch((error)=>{
                    console.log(error);
                });
        }
    },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        navigate('/instrumento/index');

    }


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {instrumento.id && <h1>Consulta de Instrumentos: {instrumento.nomeInstrumento}</h1>}
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input defaultValue={instrumento.nomeInstrumento} placeholder="Nome do Instrumento" readOnly={true}/>
                    <input defaultValue={instrumento.tipo} placeholder="Tipo do Instrumento" readOnly={true}/>
                    <input defaultValue={instrumento.marca} placeholder="Marca do Instrumento" readOnly={true}/>
                    <input defaultValue={instrumento.modelo} placeholder="Modelo do Instrumento" readOnly={true}/>

                    <button className="btn btn-cancel">Cancelar</button>

                </form>
                </div>

            </div>


        </Fragment>
    )
}