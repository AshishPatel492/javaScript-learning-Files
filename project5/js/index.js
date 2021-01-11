console.log("this is index.js in project5");
const data = [
  {
    name: "ashish",
    city: "singad",
    age: 27,
    language: "javaScript",
    framework: "none",
       img:"./img/ashish.jpg"
  },
  {
    name: "mahesh",
    city: "vadichoundha",
    age: 22,
    language: "Marketing",
    framework: "none",
       img:""
  },
  {
    name: "vignesh",
    city: "limbarpada",
    age: 27,
    language: "Autocad",
    framework: "none",
       img:"./img/vignesh.jpg"
  },
];

// CV Iterator

function cvIterator(profiles) {
  let nextIndex = 0;
  return {
    next: function () {
      return nextIndex < profiles.length
        ? { value: profiles[nextIndex++], done: false }
        : { done: true };
    },
  };
}
const candidates = cvIterator(data);
nextCV();
// Button listener for next button
let nextBtn = document.getElementById("next");
nextBtn.addEventListener("click", nextCV);
function nextCV() {
  const currentCandidate = candidates.next().value;
  let image=document.getElementById("image");
  let profile = document.getElementById("profile");
  if (currentCandidate != undefined) {
    image.innerHTML=`<img src='${currentCandidate.img}'>`
    profile.innerHTML = `<ul class="list-group">
<li class="list-group-item">Name: ${currentCandidate.name}</li>
<li class="list-group-item">${currentCandidate.age} years old</li>
<li class="list-group-item">Lives in ${currentCandidate.city}</li>
<li class="list-group-item">Works on ${currentCandidate.language}</li>
<li class="list-group-item">with ${currentCandidate.framework} framework</li>
</ul>`;
  } else {
    alert("end of Candidates application");
  }
}
