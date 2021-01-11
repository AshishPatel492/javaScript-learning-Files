console.log("This is My Project 6 this is index.js");

// Utility function:
// 1. Utility function to get DOM element from string
function getElString(string) {
  let div = document.createElement("div");
  div.innerHTML = string;
  return div.firstElementChild;
}
// Initialize no of parameters
let addedParaCount = 0;

// Hide the parameters box initially
let parametersBox = document.getElementById("parameterBox");
parametersBox.style.display = "none";

// If the User clicks on customePara customePara box, hide the json box
let customeParaRadio = document.getElementById("customePara");
customeParaRadio.addEventListener("click", () => {
  document.getElementById("requestJsonBox").style.display = "none";
  document.getElementById("parameterBox").style.display = "block";
});

// If the User clicks on json box, hide the customePara box
let jsonRadio = document.getElementById("json");
jsonRadio.addEventListener("click", () => {
  document.getElementById("parameterBox").style.display = "none";
  document.getElementById("requestJsonBox").style.display = "block";
});

// If the User Clicks on + Button, add more parameters

let addPara = document.getElementById("addPara");
addPara.addEventListener("click", () => {
  let addParaDy = document.getElementById("addParaDy");
  let string = `<div class="form-row my-2">
                    <label for="url" class="col-sm-2 col-form-label">Parameter ${
                      addedParaCount + 2
                    }</label>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterKey${
                          addedParaCount + 2
                        }" placeholder="Enter Parameter ${
    addedParaCount + 2
  } key">
                    </div>
                    <div class="col-md-4">
                        <input type="text" class="form-control" id="parameterValue${
                          addedParaCount + 2
                        }" placeholder="Enter Parameter ${
    addedParaCount + 2
  } Value">
                    </div>
                    <button class="btn btn-primary deletePara"> - </button>
                </div>`;
  // Convert the element string tho DOM node
  let paraElement = getElString(string);
  addParaDy.appendChild(paraElement);

  // Add an event listener to remove the parameter on clicking - button
  let deletePara = document.getElementsByClassName("deletePara");
  for (let item of deletePara) {
    item.addEventListener("click", (e) => {
      // TODA: add a confirmation box to confirm parameter deletion
      e.target.parentElement.remove();
    });
  }
  addedParaCount++;
});

// If the user clicks on submit button
let btnSubmit = document.getElementById("submit");
btnSubmit.addEventListener("click", () => {
  // Show please wait in the response box to request patience from the user
  //  document.getElementById("responceJsonBoxTxt").value =
  //  "Please Wait..Fetching Response...";
  document.getElementById("responceJsonBoxTxt").innerHTML =
    "Please Wait..Fetching Response...";

  // Fetch all the values user has entered
  let url = document.getElementById("url").value;
  let requestType = document.querySelector("input[name='types']:checked").value;
  let contentType = document.querySelector("input[name='contentTypes']:checked")
    .value;
  // If user ha used customePara option instead of json, collect all the parameters in an object
  if (contentType == "customePara") {
    data = {};
    for (let i = 0; i < addedParaCount + 1; i++) {
      if (document.getElementById("parameterKey" + (i + 1)) != undefined) {
        let key = document.getElementById("parameterKey" + (i + 1)).value;
        let value = document.getElementById("parameterValue" + (i + 1)).value;
        data[key] = value;
      }
    }
    data = JSON.stringify(data);
  } else {
    data = document.getElementById("jsonBoxTxt").value;
  }

  // Log all the values in the console for debugging
  console.log("URL is: ", url);
  console.log("requestType: ", requestType);
  console.log("contentType: ", contentType);
  console.log("data: ", data);

  // If the request type is get, invoke fetch api to create a post request
  if (requestType == "GET") {
    fetch(url, {
      method: "GET",
    })
      .then(response => response.text())
      .then((text) => {
        document.getElementById("responceJsonBoxTxt").value = text;
      });
  }
  else{
    fetch(url, {
      method: "POST",
      body:data, 
      headers:{
        "Content-type":"application/json; charset=UTF-8"
      }
    })
      .then(response => response.text())
      .then((text) => {
        document.getElementById("responceJsonBoxTxt").value = text;
      });
  }
});
