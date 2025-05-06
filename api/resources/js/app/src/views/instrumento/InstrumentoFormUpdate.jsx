import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function InstrumentoFormUpdate(){

    const navigate = useNavigate();

    const [instrumento, setInstrumento] = useState({
        id:null,
        nomeInstrumento:"",
        tipo:"",
        marca:"",
        modelo:"",
    });


    const {id} = useParams();

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
        axiosClient.put(`/instrumento/update/${id}`, instrumento) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setInstrumento({});
                console.log("Instrumento alterado com sucesso");
                navigate('/instrumento/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {instrumento.id && <h1>Alteração do Instrumento</h1>}

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input value={instrumento.nomeInstrumento} placeholder="Nome do Instrumento" onChange={e=> setInstrumento({...instrumento, nomeInstrumento: e.target.value})}/>
                    <input value={instrumento.tipo} placeholder="Tipo do Instrumento" onChange={e=> setInstrumento({...instrumento, tipo: e.target.value})}/>
                    <input value={instrumento.marca} placeholder="Marca do Instrumento" onChange={e=> setInstrumento({...instrumento, marca: e.target.value})}/>
                    <input value={instrumento.modelo} placeholder="Modelo do Instrumento" onChange={e=> setInstrumento({...instrumento, modelo: e.target.value})}/>

                    <button className="btn btn-edit" to="/instrumento/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/instrumento/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

