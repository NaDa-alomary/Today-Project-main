const apiKey= `7d7e7961b48a45d9bcb1d78f59329f2b`
let apiCategory="sport";

const newsApi=`https://newsapi.org/v2/top-headlines?category=${apiCategory}&from=2022-01-01&sortBy=publishedAt&pageSize=9&apiKey=${apiKey}`


  
let btn = document.getElementById("general-btn");
let generalNews;
btn.addEventListener('click', function(event){
  fetch(newsApi); 
  console.log("Button Clicked");
});
 



fetch(newsApi)
  .then(response => response.json())
  .then(data => {

    document.getElementById("newsCards").innerHTML= data.articles.map(element => 
      `
      <div class="col-4">
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
