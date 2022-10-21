import React from 'react'
import { useNavigate } from 'react-router-dom'

const SuggestionList = ({suggestedList, setSearchInput,setSuggestedList}) => {
    const navigate = useNavigate()
    const handleClick = e => {
        setSearchInput(e)
        setSuggestedList()
        navigate(`/pokedex/${e}`)
    }

   

  return (
    
    <ul className='list__ul'>
        {
             suggestedList?.map(e => (
        <li className='list__li' onClick={() => handleClick(e)} key={e}>{e}</li>
    
     ))
    }
    </ul>
  )
}

export default SuggestionList