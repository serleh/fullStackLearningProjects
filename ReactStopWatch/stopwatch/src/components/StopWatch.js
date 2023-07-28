import React, { useEffect, useState } from 'react'

function StopWatch() {
  // declare seconds and minutes variables with thier methods
  const [seconds, Setseconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [isTimerRunning, setTimerRunning] = useState(false)
  // using useEffect hook to start the timer

    useEffect(()=>{
      let intervalId;
      // starting the timer if isTimerRunning is true
      if(isTimerRunning){
        intervalId = setInterval(() => {
             if(seconds == 59){
               setMinutes(minutes + 1)
               Setseconds(0)
             }
             else{
              Setseconds(prevSeconds => prevSeconds + 1)
             }
        }, 10);
        // doing cleanup
        return (()=>{
          clearInterval(intervalId)
        })
      }
    },[isTimerRunning, seconds])
    
    // function to start the timer
    const startTimer = ()=>{
      setTimerRunning(true)
    }

    // function to stop the timer
    const stopTimer = ()=>{
      setTimerRunning(false)
    }

    // function to restart the timer
    const restartTimer = ()=>{
      setTimerRunning(false)
      setMinutes(0)
      Setseconds(0)
    }
    
  return (
    <div>
      <h1>STOPWATCH</h1>
      <b>{minutes}</b>
      : 
      <b>{seconds}</b>
      <br/>
      <button onClick={startTimer}>Start</button>
     
      <button onClick={stopTimer}>Stop</button>
      <button onClick={restartTimer}>Reset</button>
      
    </div>
  )
}

export default StopWatch