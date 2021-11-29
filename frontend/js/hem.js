
// Content for the start/hem page
function hem() {
  $('main').html(`
  <div class="carouselContainer">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/Xm12NSa8jsM?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/aeVkbNka9HM?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/AkdXuDAP2Ts?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/BIhNsAtPbPI?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Sy8nPI85Ih4?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
    <div class="carousel-item" >
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yEmcEuS6xm4?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>
</div> 
`);
  let html = '';
  
  
  var newdiv = document.createElement('div');
  newdiv.className = 'row';
  for (let i = 0; i < data.filmer.length; i++) {
    let div = document.createElement("div");
    newdiv.className = 'col-md-4 col-xs-4';
    newdiv.appendChild(div);
    html += `<p><a href="#film-${data.filmer[i].id}"><img class="poster" src="${data.filmer[i].images}"></img></a></p><h2 id ='title'><br>  ${data.filmer[i].title} <br></h2>`
  }
  //console.log('html är:' + html.innerHTML);
  $('main').append(html);
}
