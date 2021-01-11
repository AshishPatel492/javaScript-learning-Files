console.log("this is frut&veg.js");

let frutBtn=document.getElementById('frutsbtn');
frutBtn.addEventListener('click',showFruts);

function showFruts(){
    console.log('you have clicked on Frut Button');

    const xhr=new XMLHttpRequest();

    xhr.open('GET','./js/fruts.json',true);

    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            let FObj=JSON.parse(this.responseText);
            let fList=document.getElementById('frutslist');
            let str="";
            for(let key in FObj){
                for (let index = 0; index < FObj[key].length; index++) {
                    str+=`<li class="list-group-item list-group-item-primary">
                    ${FObj[key][index]}</li>`;
                }
            }
            fList.innerHTML=str;
        }
        else{
            console.log("some Error");
        }
    }
    xhr.send();
}

let vegBtn=document.getElementById('vegbtn');
vegBtn.addEventListener('click',showVegs);

function showVegs(){
    console.log('you have clicked on Veg Button');

    const xhr=new XMLHttpRequest();

    xhr.open('GET','./js/veg.json',true);

    xhr.onload=function(){
        if(this.status===200){
            // console.log(this.responseText);
            let VObj=JSON.parse(this.responseText);
            let VList=document.getElementById('veglist');
            let str="";
            for(let key in VObj){
                for (let index = 0; index < VObj[key].length; index++) {
                    str+=`<li class="list-group-item list-group-item-success">
                    ${VObj[key][index]}</li>`;
                }
            }
            VList.innerHTML=str;
        }
        else{
            console.log("some Error");
        }
    }
    xhr.send();
}