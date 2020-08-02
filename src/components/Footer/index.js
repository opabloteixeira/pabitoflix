import React from 'react'

import { FooterBase } from './styles'
import Logo from '../../assets/img/logo.png'


function Footer () {
  return (
    <FooterBase>
      <a href="https://www.linkedin.com/in/pablo-teixeira-30713777/">
        <img src={Logo} width='120' alt="Logo Alura" />
      </a>
      <p>
        Made with ♥ by Pablo Teixeira
        {' '}
        <a href="https://www.linkedin.com/in/pablo-teixeira-30713777/">
        My Linkedin
        </a>
      </p>
    </FooterBase>
  )
}

export default Footer
