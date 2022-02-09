document.querySelector(".navbar-toggler").addEventListener("click", function(e){ document.querySelector("#SpartanNavbar").classList.toggle("show"); }); 
/////////
const apiKey= `7d7e7961b48a45d9bcb1d78f59329f2b`

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
                <a href="${element.url}" class="card-link" style="text-decoration:none; color: black;"><h5 class="card-title">${element.title}</h5></a>
                <p class="card-text">${element.description}${element.publishedAt}</p>
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
              <a href="${element.url}" class="card-link" style="text-decoration:none; color: black;"><h5 class="card-title">${element.title}</h5></a>
                <p class="card-text">${element.description}${element.publishedAt}</p>
              </div>
            </div>       
          </div>
      `
  ).join('')
  });
})



//weather api
let weatherApiKey="014519cf89c748a284f7afaa0265440b"

let city= "Riyadh";
let searchCitybtn = document.getElementById("srchcitybtn");
searchCitybtn.addEventListener("click",(event) => {
  event.preventDefault()
  city= document.getElementById("input-city").value;
  
  fetchWeather();
})

function fetchWeather(){
  fetch(`http://api.weatherbit.io/v2.0/current?key=${weatherApiKey}&city=${city}`)
  .then(res =>{
    res.json().then (data =>{
      console.log(data.data[0])
      let city_name =data.data[0].city_name;
      let temp = data.data[0].app_temp;
      let description = data.data[0].weather.description;
      let icon = data.data[0].weather.icon;
      document.querySelector(".weather").innerHTML = 
      `<div>
      <div>
        <div>
          <div>
            <h5>${city_name}</h5>
            <h6>${temp}</h6>
            <h6>${description}</h6>
            <img src="https://www.weatherbit.io/static/img/icons/${icon}.png"</img>
          </div>
        </div>
      </div>
    </div>`
    })
  })
}