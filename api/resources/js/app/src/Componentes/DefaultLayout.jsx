import React from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useLogin } from '../context/ContextProvider'
import axiosClient from "../axiosClientjs"

export default function DefaultLayout({children}){

const navigate = useNavigate();

const {token, _setUser, _setToken, user} = useLogin();

if(!token){
  return <Navigate to="/login"/>
}

const onLogout = (e) => {
  e.preventDefault();
  axiosClient.post('/logout', {email: user.email})
             .then(()=>{
                _setUser({}); //isso limpa o objeto
                _setToken(null);
                navigate('/login');
             })
             .catch((error)=>{
                console.log(error);
             })
}

console.log(token);
  return (
    <div id="defaultLayout">
        <aside>
            <Link to="/dashboard" >Dashboard</Link>
            <Link to="/user/index" >Usuários</Link>
            <Link to="/editora/index" >Editora</Link>
            <Link to="/autor/index" >Autor</Link>
            <Link to="/livro/index" >Livro</Link>
        </aside>
        <div className='content'>
          <header>
            <div className='header'>
              Sistema de Controle de Livros
            </div>
            <div>
              {user.name} &nbsp; |  &nbsp;
              <Link to="/changePassword" className="btn-link" href='#'>Alterar Senha</Link>
              &nbsp;  |&nbsp;
              <a onClick={onLogout} className='btn-logout' href='#'>Logout</a>
            </div>
          </header>
          <main>
              { children }
          </main>
        </div>
    </div>
  )
}
