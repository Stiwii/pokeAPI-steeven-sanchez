import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './styles/selectByType.css'

const SelectByType = ({setTypeSelected, setPage,setOtherTypeSelected}) => {
  
  const [types, setTypes] = useState()
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/type`
    axios.get(URL)
      .then(res => setTypes(res.data.results))
      .catch(err => console.log(err))
  }, [types])

  const handleChange = e =>{
    setTypeSelected(e.target.value)
    console.log(e.target.value)
    setPage(1)
  }

  return (
    <select className='select-by-type' onChange={handleChange}>
      <option className='select-by-type__option' value='All Pokemons'>All Pokemons</option>
      {
        types?.map(type => (
          <option className='select-by-type__option' key={type.url} value={type.url}  >{type.name}</option>
        ))
      }
    </select>
  )
}

export default SelectByType