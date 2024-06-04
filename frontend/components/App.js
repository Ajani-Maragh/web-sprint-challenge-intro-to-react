import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Character from './Character'

const urlPlanets = 'http://localhost:9009/api/planets'
const urlPeople = 'http://localhost:9009/api/people'

function App() {
  // ❗ Create state to hold the data from the API
  const [characters, setCharacters] = useState([])
 
  // ❗ Create effects to fetch the data and put it in state
  
  useEffect(() => {
    const getData = async () => {
      try {
        const [peopleRes, planetRes] = await Promise.all([
          axios.get('http://localhost:9009/api/people'),
          axios.get('http://localhost:9009/api/planets')
        ]);
        
        const peopleData = peopleRes.data
        const planetData = planetRes.data

        //console.log(peopleData)
        //console.log(planetData)

        const combinedData = peopleData.map(person => {
          const homeworld = planetData.find(planet => planet.id === person.homeworld)
          return {...person, homeworld}
        })
        //console.log(combinedData)

        setCharacters(combinedData)
      } catch (error) {
        console.error(error)
      }
    }
    getData()
  }, [])
   


    return (
    <div>
      <h2>Star Wars Characters</h2>
      <p>See the README of the project for instructions on completing this challenge</p>
      {/* ❗ Map over the data in state, rendering a Character at each iteration */}

      <div>
        {characters.map(character => (
          <Character key={character.id} character={character} />
        ))}
      </div>
    </div>
  )
}

export default App

// ❗ DO NOT CHANGE THE CODE  BELOW
if (typeof module !== 'undefined' && module.exports) module.exports = App
