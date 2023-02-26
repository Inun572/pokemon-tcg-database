import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Head from 'next/head'

const Layout = (props) => {
  return (
    <>
        <Head>
            <title>{props.title}</title>
        </Head>
        <Navbar />
            {props.children}
        <Footer />
    </>
  )
}

export default Layout