import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import Pokemon404 from '../components/pokedexId/Pokemon404'

const PokedexById = () => {

  const { id } = useParams()
  const [pokemon, setPokemon] = useState()
  const [hasError, setHasError] = useState(false)
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}/`
    axios.get(URL)
      .then(res => setPokemon(res.data))
      .catch(err => {
        setHasError(true)
      })
  }, [])

  console.log(pokemon)

  if (hasError) {
    return <Pokemon404 />
  }
  return (
    <BigDiv>
      <article className='container'>
        <header>
          <h2>Pokémon</h2>
        </header>
        <div className='size'>
          <div className='size__img'>

            <img src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />
          </div>
          <div className='size__abajo'>
            <div className='size__size'>
              <h4>{pokemon?.weight} <span>Weight</span></h4>
              <h4>{pokemon?.height} <span>Height</span></h4>
            </div>
            <div className='size__name'>
              <h3>{pokemon?.name}</h3>
              <h5>#{pokemon?.id}</h5>
            </div>
          </div>
        </div>

        <div className='movements'>
          <h3>Movements</h3>
          <div className=''>

          {
            pokemon?.moves.map(move => (
              <h4 key={move.move.name}> {move.move.name}</h4>
              ))
            }
            </div>
        </div>

        <div className='abilities'>
          <h3>Type</h3>
          <div>

          {
            pokemon?.types.map(type => (
              <h5 key={type.slot}>{type.type.name}</h5>
            ))
          }
          </div>
        </div>

        <div className='abilities'>
          <h3>Abilities</h3>
          <div>
          {
            pokemon?.abilities.map(type => (
              <h5 key={type.slot}>{type.ability.name}</h5>
            ))
          }

          </div>
        </div>
        


      </article>
    </BigDiv>
  )
}

export default PokedexById
const BigDiv = styled.div`
background: linear-gradient(45deg,rgba(255, 255, 255, 0.755), var(--color-red),white,rgba(0, 0, 0, 0.764));
display:flex;
justify-content:center;
article{
  display: grid;
  grid-template-columns: repeat(3, 1fr) ;
  justify-content:center;
  align-items:center;
  width:100%;
  max-width:1000px;
  height:100vh;
  margin:auto;
  /* border: 2px solid black; */
  column-gap: 20px;
  padding-bottom:50px;
  margin-left:10px;
  margin-right:10px;
  
  header{
    grid-column: 1/ 4;
    height:40px;
    position:relative;
   
    h2{
    position:absolute;
    text-align: left;
    font-size: 50px;
    background: linear-gradient(black 10% ,white 90%);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 2px white;
    font-weight: 1000;
    text-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    /* bottom:20px; */
    left:10px;
    }
  }
  .size{
    grid-column: 1/ 3;
    position:relative;
    background-color: #e1e1e1;
    /* border-radius:10px; */
    column-gap:20px;
    box-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    .size__img{
      height:120px;
      max-height:100%;
      /* border: 2px solid black; */
      max-width:100%;
      display: flex;
      justify-content:center;
      align-items:center;
      img{
       position: relative;
        max-height: 200px;
        max-width:200px;
        bottom:25px;

     }   
    }
    .size__abajo{
      
      position: relative;
      height:100px;
      .size__size{
        margin-top:15px;
        display:flex;
        justify-content:space-around;
        border-bottom: 1px solid #999; 
        color: #434343;
        align-items:center;
        text-align:center;
        padding-bottom:5px;
        font-size:22px;
        font-family:inherit;
        span{
          display:flex;
          justify-content:center;
          color:#7b7b7b;
          font-size:12px
        }
      }
      .size__name{
        display:flex;
        flex-direction:column;
        position:relative;
        justify-content:center;
        align-items:center;
        color: #333333;
        text-transform:capitalize;
        font-size:22px;
        font-family:inherit;
        top: -10px;
        background-size:cover;
        /*  */
        h3{
          /* border: 1px solid red; */
          z-index:0;
          background-color:#e1e1e1;
          text-align: center;
    background: linear-gradient(black 10% ,white 90%);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px white;
    font-weight: 1000;
    text-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
        }
        h5{
          border: 1px solid black;
          padding: 1px;
          background-color: #a4a2a2;
          font-size:10px;
        }
      }
    }
   
  }

  .movements{
    grid-area: 2 / 3 / 4 / 4;
    display:flex;
    flex-direction:column;
    justify-content:center;
    /* align-items:center; */
    background-color:#e1e1e1;
    height: 100%;
    max-height: 500px;
    /* border-radius:10px; */
    box-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    font-size:22px;
    font-family:inherit;  
    
    position:relative;
    margin-top:65px;
    background: linear-gradient(45deg,rgba(255, 255, 255, 0.755), var(--color-red),white,rgba(0, 0, 0, 0.764));
    h3{
      text-align: center;
    background: linear-gradient(black 10% ,white 90%);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px white;
    font-weight: 1000;
    text-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    }
    div{
      position:relative;
      max-height:100%;
    overflow:auto;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    
  margin: auto;
  width: 80%;
  border: 1px solid black;
  background: linear-gradient(-45deg,rgba(255, 255, 255, 0.755), var(--color-red),white,rgba(0, 0, 0, 0.764));
  z-index: 2;
  
  text-align: center;
  text-transform: capitalize;
    }
    h4{
      text-align:left;
      font-size:12px;
      /* text-align: center; */
      align-items:left;
      text-transform:uppercase;
      
      padding:4px;
      /* background-color:red; */
      /* border-radius:5px; */
      width:100px;
      height:30px;
      text-transform: uppercase ;
  font-weight: 1000;
  color: white;
  -webkit-text-stroke: 1px black;
    }
  }

  
  .abilities{
    box-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    text-align:center;
    height: 100%;
    max-height: ;
    /* border-radius:10px; */
    background-color:#e1e1e1;
    color:#444;
    font-size:18px;
    font-family:inherit; 
    margin-bottom:20px;
    h3{
      text-align: center;
    background: linear-gradient(black 10% ,white 90%);
    -webkit-background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px white;
    font-weight: 1000;
    text-shadow: 4px 4px 4px black, -4px -4px 4px var(--color-red), -4px 4px 4px black, 4px -4px 4px var(--color-red);
    margin-bottom: 20px;
    }
    div{
      margin-top:5px;
      display:flex;
      flex-direction: column;
      gap: 10px;
      text-transform: capitalize;
      color:#7b7b7b;
      font-size:14px;

      h5{
        /* margin-bottom:5px; */
    

      }

    }
  }

  @media (min-width: 500px) {
   
  }

}

`