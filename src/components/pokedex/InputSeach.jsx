import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './styles/inputSeach.css'
import SuggestionList from './SuggestionList'

const InputSeach = ({pokemons,typeSelected, otherTypeSelected}) => {

  const [suggestedList, setSuggestedList] = useState()
  const [searchInput, setSearchInput] = useState()

 const navigate = useNavigate()
  const submit = e => {
    e.preventDefault()
    navigate(`/pokedex/${e.target.search.value.trim().toLowerCase()}`)
  }



  const handleChange = e => {
  
    if (e.target.value.trim() === '') {
      return setSuggestedList()
    }
     const list = []
     
     pokemons?.filter(pokemon => {
        if(pokemon.name.includes(e.target.value.trim().toLowerCase())) 
        {list.push(pokemon.name) }
      })
      setSuggestedList(list)
     
  }

  
useEffect(()=>{
  // console.log(typeSelected)
},[typeSelected])

useEffect(()=>{
  
  console.log(otherTypeSelected)
   },[otherTypeSelected])


  return (
    <form className='input__form' onSubmit={submit}>
      <div>
         <input 
      className='input__in' 
      id='search' type="text" 
      placeholder={`${typeSelected == 'All Pokemons' ? 'Search All Pokemons' : `Search this ⬇ pokemons`}`}
      onChange={handleChange}
      autocomplete="off"
      />
      <SuggestionList 
      
      suggestedList={suggestedList}
      setSearchInput={setSearchInput}
      setSuggestedList={setSuggestedList}
      />
      </div>
     
      <button className='button-54'>Search</button>
    </form>
  )
} 

export default InputSeach