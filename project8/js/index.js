console.log("this is index.js");

let boxes = document.getElementsByClassName("boxes");
let imgBox = document.querySelector(".img");

// Add Event Listener for Dragable Element imgBox
imgBox.addEventListener("dragstart", (e) => {
  console.log("drag started triggred");
  e.target.className += " hold";
  setTimeout(()=>{

      e.target.className += " hide";
  },0);

});
imgBox.addEventListener("dragend", (e) => {
    e.target.className='img'
  console.log("drag end trigred");
});

for (let box of boxes) {
    box.addEventListener("dragover", (e) => {

        console.log("dragOver trigred");
        e.preventDefault();
    });
    
    box.addEventListener("dragenter", (e) => {
        
        console.log("drag enter trigred");
    });
    
    box.addEventListener("dragleave", (e) => {
        console.log("drag leave trigred");
        
    });
    
    box.addEventListener("drop", (e) => {
        e.target.append(imgBox);
        console.log("Drop trigred");

  });
}
