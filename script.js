
let buttons= document.querySelector(".nav-link");
function acctive(){
   for(let buttonClick of buttons) {
       buttonClick.addEventListener("click",(event) => {
           event.target.classList.add("active");
           console.log("hiiii")
      })
   }
}

// an example I copied from javascript documentation
 //let btn = document.querySelector(".nav-link");
 //btn.addEventListener('click', function(event){
 //   console.log("Button Clicked");
 //});


let apiKey= `7d7e7961b48a45d9bcb1d78f59329f2b`
let url=`https://newsapi.org/v2/everything?q=${news}&from=2021-12-31&sortBy=publishedAt&apiKey=${apiKey}`

const worldBtn= document.getElementById("world-btn");


function funcListTopics(){
    fetch('url')
    .then(response => response.json())
    .then(data => console.log(data));
}

const articlList= [
   funcListTopics()
];

const news = document.getElementById("hiii").innerHTML= data.articlList.map(element => 
    `
    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
    <div class="col">
      <div class="card shadow-sm">
        <div class="col-md-3">
          <img class="img-fluid" src="${element.urlToImage}">
        </div>
        <div class="card-body">
          <p class="card-text">${element.title}</p>
          <div class="d-flex justify-content-between align-items-center">
            <div class="btn-group">
              <a href="${element.url}" class="read-more">Read more ></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    `
).join('')