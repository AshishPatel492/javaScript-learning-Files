console.log("this is index of project7");

let userNum = document.getElementById("userNum");
let buttons = document.querySelectorAll("button");
let userValue = "";
for (item of buttons) {
  item.addEventListener("click", (e) => {
    buttonText = e.target.innerText;
    if (buttonText == "X") {
      buttonText = "*";
      // console.log("button Text: ", buttonText);
      userValue += buttonText;
      userNum.value = userValue;
    } else if (buttonText == "C") {
      userValue = "";
      userNum.value = userValue;
    } else if (buttonText == "=") {
      userNum.value = eval(userValue);
    } else {
      userValue += buttonText;
      userNum.value = userValue;
    }
  });
}
