
// Content for the start/hem page
function hem() {
  $('main').html(`
<div id="carouselExampleInterval" class="carousel slide carousel-fade" data-bs-ride="carousel" data-interval="1000">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="4000">
    <img src="Filmer-images/dead-pool-2.jpg" class="d-block w-100" max-width="460" height="auto" alt="dead-pool-2.jpg">
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="Filmer-images/bad-boys-2.jpg" class="d-block w-100" max-width="460" height="auto" alt="bad-boys-2.jpg">
    </div>
    <div class="carousel-item" data-bs-interval="4000">
         <img src="Filmer-images/10-things-i-hate-about-you-2.png" class="d-block w-100" max-width="460" height="auto"  alt="Filmer-images/10-things-i-hate-about-you-2.png">
    </div>
     <div class="carousel-item" data-bs-interval="4000">
      <img src="Filmer-images/No-time-to-die-2.jpg" class="d-block w-100" max-width="460" height="auto"  alt="No-time-to-die-2.jpg">
    </div>
     <div class="carousel-item" data-bs-interval="4000">
      <img src="Filmer-images/up-2.jpg" class="d-block w-100" max-width=" 460" height="auto"  alt="up-2.jpg">
    </div>
    <div class="carousel-item" data-bs-interval="4000">
      <img src="Filmer-images/white-chicks-2.jpg" class="d-block w-100" max-width=" 460" height="auto"  alt="white-chicks-2.jpg">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>



 
`);
  let html = '';


  var newdiv = document.createElement('div');
  newdiv.className = 'row';


  for (let i = 0; i < data.filmer.length; i++) {
    let div = document.createElement("div");
    div.className = 'col-md-4 col-xs-4';
    newdiv.appendChild(div);
    div.innerHTML = `<div class = "hem-poster-title"><p><a href="#film-${data.filmer[i].id}"><img class="poster" src="${data.filmer[i].images}"></img></a></p><h2 id ='title'><br>  ${data.filmer[i].title} <br></h2> </div>`
  }
  //console.log('html är:' + html.innerHTML);
  $('main').append(newdiv);
}

