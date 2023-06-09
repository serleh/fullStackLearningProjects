
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
let clearStartInterval;

// startTimer function
function startTimer(){
  start.disabled = true // this will disable the start button once clicked
  
  clearStartInterval= setInterval(()=>{
    parseFloat(milsec)
    milsec++
    document.querySelector('.milliseconds').innerText = milsec
    if(milsec === 99){
      parseFloat(sec)
      document.querySelector('.seconds').innerText = ++sec
      milsec = 0
      // clearInterval(startInterval)
      // startWatch()
    }
  },10)
}

//stopTimer function
function stopTimer(){
  //This stops the setInterval from executing
  clearInterval(clearStartInterval)

}

//resetTimer functions
function resetTimer(){
  //This reset the milliseconds and seconds to 00
  document.querySelector('.milliseconds').innerText = '0' +0
  document.querySelector('.seconds').innerText = '0'+ 0;
 
}