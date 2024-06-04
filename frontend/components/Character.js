import React, { useState } from 'react'

function Character({ character })  { // ❗ Add the props
  // ❗ Create a state to hold whether the homeworld is rendering or not
  const [showHomeworld, setShowHomeworld] = useState(false)
  // ❗ Create a "toggle" click handler to show or remove the homeworld
  const toggleHomeworld = () => {
    setShowHomeworld(!showHomeworld)
  }
  return (
    <div className="character-card" onClick={toggleHomeworld}>
      {/* Use the same markup with the same attributes as in the mock */}
      <h3 className="character-name">{character.name}</h3>
      {showHomeworld && (
        <p>
        planet: <span className="character-planet">{character.homeworld.name}</span>
        </p>
      )}

    </div>
  )
}

export default Character
