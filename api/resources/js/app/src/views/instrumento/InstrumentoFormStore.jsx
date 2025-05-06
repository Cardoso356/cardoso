import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, Link } from "react-router-dom";

export default function InstrumentoFormStore(){

    const navigate = useNavigate();

    const [instrumento, setInstrumento] = useState({
        id: null,
        nomeInstrumento:"",
        tipo:"",
        marca:"",
        modelo:"",
    });


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.post(`/instrumento/store`, instrumento) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setInstrumento({});
                console.log('Instrumento incluído com sucesso');
                navigate('/instrumento/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    <h1>Inclusão do instrumento</h1>
                    
                

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input type="text" value={instrumento.nomeInstrumento} placeholder="Nome do Instrumento" onChange={e=> setInstrumento({...instrumento, nomeInstrumento: e.target.value})}/>
                    <input type="text" value={instrumento.tipo} placeholder="Tipo do Instrumento" onChange={e=> setInstrumento({...instrumento, tipo: e.target.value})}/>
                    <input type="text" value={instrumento.marca} placeholder="Marca do Instrumento" onChange={e=> setInstrumento({...instrumento, marca: e.target.value})}/>
                    <input type="text" value={instrumento.modelo} placeholder="Modelo do Instrumento" onChange={e=> setInstrumento({...instrumento, modelo: e.target.value})}/>

                    <button className="btn btn-add" to="/instrumento/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/instrumento/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

