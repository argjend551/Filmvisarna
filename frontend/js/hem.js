
// Content for the start/hem page
function hem() {
  $('main').html(`
  
 <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="true">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="Filmer-images/bad-boys-2.jpg" class="d-block w-100" alt="bad-boys-2.jpg">
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="Filmer-images/bad-boys-2.jpg" class="d-block w-100" alt="bad-boys-2.jpg">
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="Filmer-images/bad-boys-2.jpg" class="d-block w-100" alt="bad-boys-2.jpg">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
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
    div.innerHTML = `<p><a href="#film-${data.filmer[i].id}"><img class="poster" src="${data.filmer[i].images}"></img></a></p><h2 id ='title'><br>  ${data.filmer[i].title} <br></h2>`
  }
  //console.log('html är:' + html.innerHTML);
  $('main').append(newdiv);
}

