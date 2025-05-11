import {Fragment, useEffect, useState } from "react";
import axiosClient from "../../axiosClientjs";
import { useNavigate, useParams, Link } from "react-router-dom";

export default function MusicoInstrumentoFormUpdate(){

    const navigate = useNavigate();

    const [musicoinstrumento, setMusicoInstrumento] = useState({
        id:null,
        musicoId:"",
        instrumentoId:"",
        musico: {
            nomeMusico:"",
        },
        instrumento: {
            nomeInstrumento:"",
        }
    });


    const {id} = useParams();

    useEffect(()=>{
            if (id){
                    axiosClient.get(`/musicoinstrumento/show/${id}`)
                    .then(({data})=>{
                        setMusicoInstrumento(data.data);
                    }).catch((error)=>{
                        console.log(error);
                    });
            }
        },[id]);


    const onSubmit = (e) => {

        e.preventDefault(); //impede que o navegador recarregue a página
        axiosClient.put(`/musicoinstrumento/update/${id}`, musicoinstrumento) // o axios que faz o acesso ao banco de dados
            .then(()=>{
                setMusicoInstrumento({});
                console.log("Relação de Músico - Instrumento alterada com sucesso");
                navigate('/musicoinstrumento/index');
            }).catch((error)=>{
                console.log(error);
            });
    }

    


    return(
        <Fragment>

            <div className="display">

                <div className="card animated fadeinDown">
                    {musicoinstrumento.id && <h1>Alteração de Músico - Instrumento</h1>}

                <form onSubmit={(e)=>onSubmit(e)}>
                    <input value={musicoinstrumento.musicoId} placeholder="Id do Músico" onChange={e=> setMusicoInstrumento({...musicoinstrumento, musicoId: e.target.value})}/>
                    <input value={musicoinstrumento.musico?.nomeMusico || ""} readOnly/> {/*é apenas para visualização*/}
                    <input value={musicoinstrumento.instrumentoId} placeholder="Id do Instrumento" onChange={e=> setMusicoInstrumento({...musicoinstrumento, instrumentoId: e.target.value})}/>
                    <input value={musicoinstrumento.instrumento?.nomeInstrumento || ""} readOnly/> {/*é apenas para visualização*/}

                    <button className="btn btn-edit" to="/musicoinstrumento/index">Salvar</button>
                    <Link type="button" className="btn btn-cancel" to="/musicoinstrumento/index">Cancelar</Link>
                    

                </form>
                
                </div>

            </div>


        </Fragment>
    )
}

