import React, { useEffect, useState } from 'react'

function StopWatch() {
  const [seconds, setSeconds] = useState(0)
  const [milseconds, setMilSeconds] = useState(0)
  const clearState = ()=>{
    setMilSeconds(0)
  }

  function startTimer(){
    useEffect(()=>{
      setInterval(()=>{
        if(milseconds > 59){
          setSeconds(seconds + 10)
         clearState()
       }
       else{
         setMilSeconds(milseconds + 10)
       }
      }, 1000)
    })
  }
  return (
    <div>
       <p>STOPWATCH</p>
       <b>{seconds}</b>
       :
       <b>{milseconds}</b>
       <br></br>
       <button onClick={()=> startTimer()}>Start</button>
    </div>
  )
}

export default StopWatch