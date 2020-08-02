import React from 'react'

import Menu from '../Menu'
import Footer from '../Footer'

export default function PageDefault({ children }){
  return(
    <>
      <Menu />
        {children}
      <Footer />
    </>
  )
}
