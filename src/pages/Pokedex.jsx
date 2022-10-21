import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import CardPoke from '../components/pokedex/CardPoke'
import InputSeach from '../components/pokedex/InputSeach'
import Pagination from '../components/pokedex/Pagination'
import SelectByType from '../components/pokedex/SelectByType'
import './styles/pokedex.css'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [typeSelected, setTypeSelected] = useState('All Pokemons')
  const [otherTypeSelected, setOtherTypeSelected] = useState('')

  useEffect(() => {
    if (typeSelected !== 'All Pokemons') {
      axios.get(typeSelected)
        .then(res => {
          
         const result = res.data.pokemon.map( e => e.pokemon)
          setPokemons(result)
        })
        .catch(err => console.log(err))
    } else {
      //si quiero todos los pokemons
      const URL = `https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0`
      axios.get(URL)
        .then(res => setPokemons(res.data.results))
        .catch(err => console.log(err))
    }
  }, [pokemons])

 

  const userName = useSelector(state => state.userName)

// Logica de paginacion
const [page, setPage] = useState(1)
const [pokePerPage, setPokePerPage] = useState(8)
const initialPoke = (page - 1) * pokePerPage
const finalPoke = page * pokePerPage

// TIPOS DE POKEMON


  return (
    <div className='pokedexComponent'>
      <header className='pokedexComponent__header'>
      <img className='pokedex__img' src="/imagenes/home/pokedex.png" alt="" />
        <p className='pokedexComponent__welcome'>Welcome <span className='pokedexComponent__span'>{userName}</span></p>
      </header>
      <aside className='pokedexComponent__aside'>
        <InputSeach
        pokemons = {pokemons}
        typeSelected ={typeSelected}
        otherTypeSelected = {otherTypeSelected}
         />
        <SelectByType 
        setTypeSelected={setTypeSelected}
        setPage = {setPage}
        setOtherTypeSelected = {setOtherTypeSelected}
        
        />
        <Pagination 
          page = {page}
          pagesLength={pokemons && Math.ceil(pokemons.length/pokePerPage)}
          setPage = {setPage}
        />
      </aside>
      <main>
        <div className='cardPoke__container'>
          {
            pokemons?.slice(initialPoke, finalPoke).map(pokemon => (
              <CardPoke 
                key={pokemon.url}
                url={pokemon.url}
              />
            ))
          }
        </div>
      </main>
      <aside className='pokedexComponent__aside'>
       <Pagination 
          page = {page}
          pagesLength={pokemons && Math.ceil(pokemons.length/pokePerPage)}
          setPage = {setPage}
        />  
      </aside>
     
    </div>
  )
}

export default Pokedex