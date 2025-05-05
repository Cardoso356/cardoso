import React from 'react'
import { Outlet } from 'react-router-dom'
import DefaultLayout from '../Componentes/DefaultLayout'

const Layout = () => {
  return (
    <div>
        <DefaultLayout>
            <Outlet/>
        </DefaultLayout>
    </div>
  )
}

export default Layout