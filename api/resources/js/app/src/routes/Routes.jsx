import React from 'react'
import{Route, Routes} from 'react-router-dom'
import UserFormList from '../views/user/UserFormList'
import UserFormStore from '../views/user/UserFormStore'
import UserFormUpdate from '../views/user/UserFormUpdate'
import UserFormShow from '../views/user/UserFormShow'
import UserFormDestroy from '../views/user/UserFormDestroy'
import Layout from './Layout'
import Dashboard from '../Componentes/Dashboard'
import NotFound from '../views/NotFound'
import Login from '../views/login/Login'
import Signup from '../views/login/Signup'
import UpdatePassword from '../views/login/UpdatePassword'
import ForgotPassword from '../views/login/ForgotPassword'
import MusicoFormList from '../views/musico/MusicoFormList'
import MusicoFormShow from '../views/musico/MusicoFormShow'
import MusicoFormUpdate from '../views/musico/MusicoFormUpdate'
import MusicoFormStore from '../views/musico/MusicoFormStore'
import MusicoFormDestroy from '../views/musico/MusicoFormDestroy'
import InstrumentoFormList from '../views/instrumento/InstrumentoFormList'
import InstrumentoFormShow from '../views/instrumento/InstrumentoFormShow'
import InstrumentoFormUpdate from '../views/instrumento/InstrumentoFormUpdate'
import InstrumentoFormStore from '../views/instrumento/InstrumentoFormStore'
import InstrumentoFormDestroy from '../views/instrumento/InstrumentoFormDestroy'
import AlbumFormList from '../views/album/AlbumFormList'
import AlbumFormShow from '../views/album/AlbumFormShow'
import AlbumFormUpdate from '../views/album/AlbumFormUpdate'
import AlbumFormStore from '../views/album/AlbumFormStore'
import AlbumFormDestroy from '../views/album/AlbumFormDestroy'
import MusicaFormList from '../views/musica/MusicaFormList'
import MusicaFormShow from '../views/musica/MusicaFormShow'
import MusicaFormUpdate from '../views/musica/MusicaFormUpdate'
import MusicaFormStore from '../views/musica/MusicaFormStore'
import MusicaFormDestroy from '../views/musica/MusicaFormDestroy'
import MusicoInstrumentoFormList from '../views/MusicoInstrumento/MusicoInstrumentoFormList'
import MusicoInstrumentoFormShow from '../views/MusicoInstrumento/MusicoInstrumentoFormShow'
import MusicoInstrumentoFormStore from '../views/MusicoInstrumento/MusicoInstrumentoFormStore'
import MusicoInstrumentoFormUpdate from '../views/MusicoInstrumento/MusicoInstrumentoFormUpdate'
import MusicoInstrumentoFormDestroy from '../views/MusicoInstrumento/MusicoInstrumentoFormDestroy'
import MusicoAlbumFormList from '../views/MusicoAlbum/MusicoAlbumFormList'
import MusicoAlbumFormShow from '../views/MusicoAlbum/MusicoAlbumFormShow'
import MusicoAlbumFormStore from '../views/MusicoAlbum/MusicoAlbumFormStore'
import MusicoAlbumFormUpdate from '../views/MusicoAlbum/MusicoAlbumFormUpdate'
import MusicoAlbumFormDestroy from '../views/MusicoAlbum/MusicoAlbumFormDestroy'
import ChangePassword from '../views/login/ChangePassword'

const Rotas = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Signup/>}/>
        <Route path='/forgotpassword' element={<ForgotPassword/>}/>
        <Route path='/updatepassword' element={<UpdatePassword/>}/>
        <Route path='/changepassword' element={<ChangePassword/>}/>

        <Route element={<Layout/>}>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/user/index' element={<UserFormList />} />
          <Route path='/user/store' element={<UserFormStore />} />
          <Route path='/user/update/:id' element={<UserFormUpdate />} />
          <Route path='/user/show/:id' element={<UserFormShow />} />
          <Route path='/user/destroy/:id' element={<UserFormDestroy />} />
        </Route>




        <Route path='musico/index' element={<MusicoFormList />} />
        <Route path='musico/show/:id' element={<MusicoFormShow />} />
        <Route path='musico/update/:id' element={<MusicoFormUpdate />} />
        <Route path='musico/store' element={<MusicoFormStore />} />
        <Route path='musico/destroy/:id' element={<MusicoFormDestroy />} />

        <Route path='instrumento/index' element={<InstrumentoFormList />} />
        <Route path='instrumento/show/:id' element={<InstrumentoFormShow />} />
        <Route path='instrumento/update/:id' element={<InstrumentoFormUpdate />} />
        <Route path='instrumento/store' element={<InstrumentoFormStore />} />
        <Route path='instrumento/destroy/:id' element={<InstrumentoFormDestroy />} />

        <Route path='album/index' element={<AlbumFormList />} />
        <Route path='album/show/:id' element={<AlbumFormShow />} />
        <Route path='album/update/:id' element={<AlbumFormUpdate />} />
        <Route path='album/store' element={<AlbumFormStore />} />
        <Route path='album/destroy/:id' element={<AlbumFormDestroy />} />

        <Route path='musica/index' element={<MusicaFormList />} />
        <Route path='musica/show/:id' element={<MusicaFormShow />} />
        <Route path='musica/update/:id' element={<MusicaFormUpdate />} />
        <Route path='musica/store' element={<MusicaFormStore />} />
        <Route path='musica/destroy/:id' element={<MusicaFormDestroy />} />

        <Route path='musicoinstrumento/index' element={<MusicoInstrumentoFormList />} />
        <Route path='musicoinstrumento/show/:id' element={<MusicoInstrumentoFormShow />} />
        <Route path='musicoinstrumento/update/:id' element={<MusicoInstrumentoFormUpdate />} />
        <Route path='musicoinstrumento/store' element={<MusicoInstrumentoFormStore />} />
        <Route path='musicoinstrumento/destroy/:id' element={<MusicoInstrumentoFormDestroy />} />

        <Route path='musicoalbum/index' element={<MusicoAlbumFormList />} />
        <Route path='musicoalbum/show/:id' element={<MusicoAlbumFormShow />} />
        <Route path='musicoalbum/store' element={<MusicoAlbumFormStore />} />
        <Route path='musicoalbum/update/:id' element={<MusicoAlbumFormUpdate />} />
        <Route path='musicoalbum/destroy/:id' element={<MusicoAlbumFormDestroy />} />


        <Route path="*" element={<NotFound/>}/>



    </Routes>
  )
}

export default Rotas;