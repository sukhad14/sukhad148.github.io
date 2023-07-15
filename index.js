let button1 = document.getElementById("startbtn");
let button2 = document.getElementById("stopbtn");
let button3 = document.getElementById("resetbtn");
let timertext = document.getElementById("timertext");

//initialising event listeners
button1.addEventListener("click", Start);
button2.addEventListener("click", Stop);
button3.addEventListener("click", Reset);

let milliSeconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let ev;
let ms, s, m, h;
let initialcheck = false;
let startcheck = false;

//Start function begins
function Start() {
  if (startcheck === true) return;

  initialcheck = true;
  startcheck = true;
  ev = setInterval(function () {
    milliSeconds += 5;
    if (milliSeconds === 1000) {
      milliSeconds = 0;
      seconds++;
    }
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
    if (hours === 24) {
      Reset();
    }

    //string conversion
        if (milliSeconds < 10) {
      ms = "00" + milliSeconds;
    } else if (milliSeconds < 100) {
      ms = "0" + milliSeconds;
    } else {
      ms = milliSeconds;
    }

    if (seconds < 10) {
      s = "0" + seconds;
    } else {
      s = seconds;
    }

    if (minutes < 10) {
      m = "0" + minutes;
    } else {
      m = minutes;
    }

    if (hours < 10) {
      h = "0" + hours;
    } else {
      h = hours;
    }

    timertext.innerHTML = h + " : " + m + " : " + s + " : " + ms;
  }, 5);
}

//Stop function starts
function Stop() {
  if (initialcheck === false) return;
  clearInterval(ev);
startbtn.innerText = "RESUME";
  startcheck = false;
}

//Reset function starts
function Reset() {
  initialcheck = false;
  startcheck = false;
  milliSeconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  timertext.innerHTML = "00 : 00 : 00 : 000";
  clearInterval(ev);
  startbtn.innerText = "START";
}