import React, { useState, useEffect } from 'react'

function RandomNumberGenerator() {
    const [randomNumber, setRandomNumber] = useState(null)
     
    useEffect(() =>{

        const generateRandomNumber = () =>{
            return Math.floor(Math.random()* 100) + 1
        }
        setRandomNumber(generateRandomNumber)
    },[])

    
  return (
    <div>
        <h1>RANDOM NUMBER GENERATOR</h1>
        {
            randomNumber !== null ? (<p>Random Number: {randomNumber}</p>)
            : (<p>Loading.....</p>)
        }
    </div>
  )
}

export default RandomNumberGenerator