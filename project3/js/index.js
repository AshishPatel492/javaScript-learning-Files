/* 

console.log('News.js');
// first get News API KEY

// Initialize the news api Parameters
let source='country=in';
let apiKey='aeb54a6fa3ae4fa7adb96e9e96aa4a53';
// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajex get request
const xhr=new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?${source}&apikey=${apiKey}`,true);
// xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=aeb54a6fa3ae4fa7adb96e9e96aa4a53`,true);
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(json);
        console.log(articles);
        let newsHTML="";
        articles.forEach(function(element,index){
            let news = `<div class="card">
                            <div class="card-header" id="heading${index}">
                                <h2 class="mb-0">
                                    <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                        aria-expanded="true" aria-controls="collapse${index}">
                                        <b> Breking News${index+1}</b> ${element.title} <!-- second methode to use element.["title"] -->
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                data-parent="#newsAccordion">
                                <div class="card-body">${element.content}. <a href="${element.url}" target="_blank"> Read More Here</a></div>
                            </div>
                        </div>`;
                        newsHTML+=news;
    });
        newsAccordion.innerHTML=newsHTML;

    }
    else{
        console.log('opps Error');
    }
}
xhr.send();
*/

// Edited

console.log('News.js');
// first get News API KEY

// Initialize the news api Parameters
let source='country=in';
let apiKey='aeb54a6fa3ae4fa7adb96e9e96aa4a53';
// grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajex get request
const xhr=new XMLHttpRequest();

xhr.open('GET',`http://newsapi.org/v2/top-headlines?${source}&apikey=${apiKey}`,true);
// xhr.open('GET',`http://newsapi.org/v2/top-headlines?country=in&apiKey=aeb54a6fa3ae4fa7adb96e9e96aa4a53`,true);
xhr.onload=function(){
    if(this.status===200){
        let json=JSON.parse(this.responseText);
        let articles=json.articles;
        console.log(json);
        console.log(articles);
        let newsHTML="";
        articles.forEach(function(element){
            let news = `<div class="card" style="width: 18rem;">
                            <img src="${element.urlToImage}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${element.title}</h5>
                                <p class="card-text">${element.content}</p>
                                <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
                                <a href="${element.url}" target="_blank"> Read More Here</a>
                            </div>
                        </div>`;
                        /* 
                        
                        let news = `<div class="card">
                                        <div class="card-header" id="heading${index}">
                                            <h2 class="mb-0">
                                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapse${index}"
                                                    aria-expanded="true" aria-controls="collapse${index}">
                                                    <b> Breking News${index+1}</b> ${element.title} <!-- second methode to use element.["title"] -->
                                                </button>
                                            </h2>
                                        </div>
            
                                        <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}"
                                            data-parent="#newsAccordion">
                                            <div class="card-body">${element.content}. <a href="${element.url}" target="_blank"> Read More Here</a></div>
                                        </div>
                                    </div>`;
                        */
                        newsHTML+=news;
    });
        newsAccordion.innerHTML=newsHTML;

    }
    else{
        console.log('opps Error');
    }
}
xhr.send();