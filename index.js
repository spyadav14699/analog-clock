// Sets the clock each second
setInterval(setClock, 1000)

// Identifying the hands' elements
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
const timeDisplay = document.querySelector('.time-display')

// Sets the clock
function setClock() {
  const currentDate = new Date()
  const secondsRatio = currentDate.getSeconds() / 60
  const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
  const hoursRatio = (minutesRatio + currentDate.getUTCHours()) / 12
  
  setRotation(secondHand, secondsRatio)
  setRotation(minuteHand, minutesRatio)
  setRotation(hourHand, hoursRatio)
  
  displayTime()
  
}

// Function to set a value to the element's '--rotation' variable
function setRotation(element, rotationRatio) {
  element.style.setProperty('--rotation', rotationRatio * 360)
}

function displayTime(){
  const time = new Date()
  const fullTime = `${time.getUTCHours()} : ${time.getMinutes()} : ${time.getSeconds()}`
  timeDisplay.innerText = fullTime
}

setClock()