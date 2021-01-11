console.log("this is tute54.js");

const alrmBtn = document.getElementById("btn-alarm");
alrmBtn.addEventListener("click", setAlarm);
var audio = new Audio(
  "https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3"
);

// function to play the alarm ring tone
function ringBell() {
  audio.play();
}

// this function will run whenever alarm is set from UI
function setAlarm(e) {
  // e.preventDefault();  // exeption for auto reloading page

  const alarm = document.getElementById("alarm");
  const alarmDate = new Date(alarm.value);
  console.log(`setting Alarm for ${alarmDate}...`);
  const now = new Date();
  const timeToalarm = alarmDate - now;
  console.log(timeToalarm);
  if (timeToalarm >= 0) {
    setTimeout(() => {
      ringBell();
    }, timeToalarm);
  }
}
