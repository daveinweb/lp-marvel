import React from 'react'
import logo from './logo.png'

const Header = () => {
  return (
    <div className='App-header'>
        <ul className='menu'>
            <a className='i-link' href="/">
              <img src={logo} width={100} className='logo' alt='Logo' />
            </a>
            <li className='i-link'>
               <a href="spidey">
                Personajes
               </a>
            </li>
        </ul>
    </div>
  )
}

export default Header