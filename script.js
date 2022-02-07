
/////////
const apiKey= `7d7e7961b48a45d9bcb1d78f59329f2b`

//

let category="general";
let newsApi=`https://newsapi.org/v2/top-headlines?category=${category}&sortBy=publishedAt&language=en&pageSize=9&apiKey=${apiKey}`

let links = document.querySelectorAll("#links a");
for(let link of links){
link.addEventListener("click",(event)=>{
    let category = event.target.id;
    newsApi = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=${apiKey}`
    fetchCategory() 
})
}
function fetchCategory(){
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
}
fetchCategory();

//news search
let searchNewsAPI=`https://newsapi.org/v2/everything?category=${category}&sortBy=publishedAt&language=en&pageSize=9&apiKey=${apiKey}`
let input = document.getElementById("searchWord");
const searchBtn= document.getElementById("searchbtn") ;

searchBtn.addEventListener("click",(event) =>{
  event.preventDefault()
  let userInput=input.value;
  searchNewsAPI=`https://newsapi.org/v2/everything?q=${userInput}&sortBy=publishedAt&language=en&pageSize=9&apiKey=${apiKey}`
  fetch(searchNewsAPI)
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
})



//weather api
//const weatherApi= `api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={API key}`
//
//fetch(weatherApi)
//  .then(response => response.json())
//  .then(data => {
//    document.getElementById("weathercard").innerHTML 
//      `
//      <div class="card" style="width: 100%;">
//          <div class="card-body">
//            <h5 class="card-title">..</h5>
//            <p class="card-text">
//            
//            
//            </p>
//          </div>
//        </div>
//      `
//      .join('')
//  });
