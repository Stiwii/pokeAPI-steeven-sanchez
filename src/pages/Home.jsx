import React from 'react'
import FormHome from '../components/home/FormHome'
import './styles/home.css'

const Home = () => {
  return (
    <article className='pokedex'>
      <img className='pokedex__img' src="/imagenes/home/pokedex.png" alt="" />
      <header className='pokedex__header'>
         <h2 className="pokedex__subtitle">Hi Trainer!</h2>
      <p className="pokedex__text">Give me your name</p>
      </header>
       <FormHome />
    </article>
  )
}

export default Home

