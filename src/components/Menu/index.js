import React from 'react'
import { Link } from 'react-router-dom'

import './Menu.css'
import Button from '../../components/Button'

import Logo from '../../assets/img/logo.png'

export default function Menu () {
  return (
    <nav className='Menu'>
      <Link to='/'>
        <img className='Logo' src={Logo} alt='logo'/>
      </Link>

      <Button as={Link} className='ButtonLink' to='/cadastro/video' >
          Novo video
      </Button>
    </nav>
  )
}
