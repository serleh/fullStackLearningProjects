import React, { useEffect, useState } from 'react'

function Timer() {
    const [seconds, setSeconds] = useState(0)

    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setSeconds(prevSeconds => prevSeconds + 1)
        }, 1000)
        return (()=>{
            clearInterval(intervalId)
        })
    }, [])

  return (
    <div>
        <h1>Timer</h1>
        <p>seconds {seconds}</p>

        
    </div>
  )
}

export default Timer