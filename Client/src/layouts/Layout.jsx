import React from 'react'
import NavBar from './NavBar.jsx'
import Footer from './Footer.jsx'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <main>
        <NavBar /> 
        <Outlet />
        <Footer />
    </main>
  )
}

export default Layout