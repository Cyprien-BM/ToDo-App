import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import './Header.css';

export default function Header() {

  const navigate = useNavigate()

  const navigateTo = (destination) => {
    navigate(destination)    
  }


  return (
    <header className='header'>
      <h1>ToDo-App</h1>
      <nav><Button class='header-btn' txt='Acceuil' handleClick={() => navigateTo('/')}/></nav>
    </header>
  )
}
