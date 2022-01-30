url="https://newsapi.org/v2/everything?qInTitle=world&from=2021-12-29&sortBy=publishedAt&apiKey=7d7e7961b48a45d9bcb1d78f59329f2b"

const articlesss= [

    fetch(url).then((responsive) => {
        responsive.json().then((responsive) => {
            console.log([responsive.articles[0].urlToImage, responsive.articles[0].title, responsive.articles[0].url]);
            
        }).catch
    })
];


document.getElementById("hiii").innerHTML= articlesss.map(element => 
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