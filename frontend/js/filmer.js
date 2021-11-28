//Content for the films view
function filmer(id) {
  let film = data.filmer.find(x => x.id === id);
  $('main').html(`
  <div id="filmContainer">
  <p><iframe width="560" height="315" src="https://www.youtube.com/embed/${film.youtubeTrailers}?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe></p>
   <img classname='poster' src="${film.images}"></img> <h3><br> Titel: ${film.title} <br></h3>  <p>Produktionsland: ${film.productionCountries} <br> Produktionsår: ${film.productionYear} <br> 
Längd: ${film.length}<br> Genre: ${film.genre} <br> Åldersgräns: ${film.ageRestrictions}
  <br> Distributör: ${film.distributor}<br> Språk: ${film.language}<br> Textning: ${film.subtitles} <br>
     Regissör: ${film.director}<br> Skådespelare: ${film.actors} <br> Handling: ${film.description}
     Recensioner: ${film.reviews[0].source}<br>
      ${film.reviews[0].quote}<br> ${film.reviews[0].stars}<br> ${film.reviews[0].max}</div>
    `);

}
