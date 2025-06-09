import { createRef, useState } from 'react';
import { Link, useNavigate } from "react-router-dom"
import axiosClient from "../../axiosClientjs";
import { useValidarDadosSignup } from '../../rules/SignupValidationRules';
import MensagemErro from '../../Componentes/Mensagens/MensagemErro';

export default function Signup(){
    
    const {model, error, formValid, handleChangeField, validateAll} = useValidarDadosSignup();
    
    const navigate = useNavigate();

    const [message, setMessage] = useState(null);

    const getInputClass = (error) => {

        if(error){
            return "form-control is-invalid";
        } else if (error === false){
            return "form-control is-valid";
        }
        return "form-control";

    }

    const onSubmit = (e) => {
        e.preventDefault();
        formValid();
        console.log(error);
        //validateAll();


       /* const login = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        axiosClient.post('/login', login)
                    .then(({data})=>{
                        console.log(data);
                        _setToken(data.token);
                        _setUser(data.user);
                        navigate('/dashboard'); //ao fazer o login, se der certo ele abre a página principal do sistema
                    })
                    .catch((erro)=>{
                        console.log(erro);
                    })

       */ //setMessage('Login realizado com sucesso');
    }

    return(
        <div className="login-signup-form animated fadeInDown">
            <div className="form">
                <form onSubmit={onSubmit}>
                    <h1 className="title p-20">Registre sua conta</h1>
                    {
                        message &&
                        <div className="alert">
                            <p>{message}</p>
                        </div>
                    }
                    <div className='p-20'>
                        <input type="text" 
                        placeholder="Nome" 
                        className={getInputClass(error.name)}
                        name="name"
                        value={model.name}
                        onChange={handleChangeField}
                        />
                        {
                            <MensagemErro
                                error = {error.name}
                                mensagem = {error.nameMensagem}
                            />
                        }
                    </div>

                    <div className='p-20'>
                        <input type="text" 
                        placeholder="E-mail" 
                        className={getInputClass(error.email)}
                        name="email"
                        value={model.email}
                        onChange={handleChangeField}
                        />
                        {
                            <MensagemErro
                                error = {error.email}
                                mensagem = {error.emailMensagem}
                            />
                        }
                    </div>

                    <div className='p-20'>
                        <input type="password" 
                        placeholder="Senha" 
                        className={getInputClass(error.password)}
                        name="password"
                        value={model.password}
                        onChange={handleChangeField}
                        />
                        {
                            <MensagemErro
                                error = {error.password}
                                mensagem = {error.passwordMensagem}
                            />
                        }
                    </div>

                    <div className='p-20'>
                        <input type="password" 
                        placeholder="Confirme a senha" 
                        className={getInputClass(error.confirmPassword)}
                        name="confirmPassword"
                        value={model.confirmPassword}
                        onChange={handleChangeField}
                        />
                        {
                            <MensagemErro
                                error = {error.confirmPassword}
                                mensagem = {error.confirmPasswordMensagem}
                            />
                        }
                    </div>

                    {/*<input type="text" placeholder="Nome"/>
                    <input type="text" placeholder="E-mail"/>
                    <input type="password" placeholder="Senha"/>
                    <input type="password" placeholder="Confirme Senha"/> */}
                    <button type="Submit" className='btn btn-block p-20'>Salvar</button>
                    <p className='message'>Está registrado ? <Link to='/login'>Login</Link> </p>
                </form>
            </div>
        </div>
    )
    
}