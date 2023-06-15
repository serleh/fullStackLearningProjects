
//declaring variables for seconds and millseconds
let sec = '00';
let milsec = '00';

// declaring variables and accessing the dom for start, stop, and reset
let start = document.getElementById('start');
let stop = document.getElementById('stop');
let reset = document.getElementById('reset')


// click events for start, stop, and reset buttons
start.addEventListener('click', startTimer)
stop.addEventListener('click', stopTimer)
reset.addEventListener('click', resetTimer)


// declaring variable for clearing the setInterval
let clearStartInterval = 0;

// startTimer function
function startTimer(){
  start.disabled = true // this will disable the start button once clicked
  document.querySelector('.container').style.backgroundColor = 'green'
  
  clearStartInterval= setInterval(()=>{
    parseInt(milsec)
    milsec++
    document.querySelector('.milliseconds').innerText = milsec.toString().padStart(2, '0')
    if(milsec === 99){
      parseInt(sec)
      ++sec
      document.querySelector('.seconds').innerText = sec.toString().padStart(2, '0')
      milsec = '0'+ 0
      // clearInterval(startInterval)
      // startWatch()
    }
  },10)
  
}

//stopTimer function
function stopTimer(){
  document.querySelector('.container').style.backgroundColor = 'brown'
  //This stops the setInterval from executing
  clearInterval(clearStartInterval)
  
  start.disabled = false // this will enable the start button once clicked

}

//resetTimer functions
function resetTimer(){
  stopTimer()
  document.querySelector('.container').style.backgroundColor = '#fcad03'
  //This reset the milliseconds and seconds to 00
  
   sec = '0'
   milsec = '0'
  document.querySelector('.milliseconds').innerText = '0' +0
  document.querySelector('.seconds').innerText = '0'+ 0;
   start.disabled = false // this will enable the start button once clicked
 
}