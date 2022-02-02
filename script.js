const apiKey= `7d7e7961b48a45d9bcb1d78f59329f2b`

//
const theWorldNews="the world";
const theWorldApi=`https://newsapi.org/v2/everything?qInTitle=${theWorldNews}&from=2022-01-01&sortBy=publishedAt&pageSize=3&apiKey=${apiKey}`

fetch(theWorldApi)
  .then(response => response.json())
  .then(data => {

    document.getElementById("static-news").innerHTML= data.articles.map(element => 
      `
         
      <div class="carousel-item active" data-bs-interval="10000">
        <div class="container">
          <div class="col-12 carousel-shadow">
            <div class="card bg-dark text-white" style="width: 70rem; height:10rem;">
              <img src="${element.urlToImage}" class="card-img" >
              <div class="card-img-overlay">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}</p>
                <a href="${element.url}" class="card-link">View</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item" data-bs-interval="2000">
        
      </div>
      <div class="carousel-item" data-bs-interval="200">
        
    </div>
      `
  ).join('')
  });





//
let apiCategory="sport";

const newsApi=`https://newsapi.org/v2/top-headlines?category=${apiCategory}&from=2022-01-01&sortBy=publishedAt&language=en&pageSize=9&apiKey=${apiKey}`


  
let generalBtn = document.getElementById("general-btn");
generalBtn.addEventListener('click', function(event){
  fetch(newsApi); 
  console.log("Button Clicked");
});
 



fetch(newsApi)
  .then(response => response.json())
  .then(data => {

    document.getElementById("newsCards").innerHTML= data.articles.map(element => 
      `
      <div class="col-md-4 col-sm-6 ">
            <div class="card" style="width: 20rem;">
              <img src="${element.urlToImage}" class="card-img-top" >
              <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <p class="card-text">${element.description}${element.publishedAt}</p>
              </div>
              <div class="card-body">
                <a href="${element.url}" class="card-link">View</a>
              </div>
            </div>       
          </div>
      `
  ).join('')


  });
