console.log("This is tute61.js");
function updateClock() {
    // Get the Current date

  let time = new Date();

  // Extract hour, minute and seconds from the date
  let hr = time.getHours();
  let mm = time.getMinutes();
  let ss = time.getSeconds();

  // Pad 0 if mm ss is less then 10 for single Digits
  mm=(mm<10?"0":"")+mm;
  ss=(ss<10?"0":"")+ss;

  // Convert railway clock to AM/PM
  hr=(hr>12)?hr-12:hr;
  hr=(hr==0)?12:hr;

  // Choose AM/PM as per time of the day
  let timeOfDay = hr < 12 ? "AM" : "PM";

  // Prepare the time string hours, minutes and seconds
  let currentTimeStr = hr + ":" + mm + ":" + ss + ":" + " " + timeOfDay;

  // Insert the time string inside to Dom
  document.getElementById("time").innerHTML=currentTimeStr; 
}
