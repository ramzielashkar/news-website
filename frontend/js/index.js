const newsSection = document.querySelector('.news');


// function to display news
const displayNews = (data) => {
  const card = `<div class="card" style="width: 18rem;">
    <img src="images/${data.news_picture}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${data.news_title}</h5>
      <p class="card-text">${data.news_content}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
`;
newsSection.innerHTML+= card;
};

// function to fetch Get News API
$.getJSON('http://localhost/news-website/backend/getnews.php',  // url
      function (data, textStatus, jqXHR) {  // success callback
        data.forEach((item, i) => {
          displayNews(item);
        });
    });
