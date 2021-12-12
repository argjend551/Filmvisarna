//Content for the films view
// fetch all informations (data) about the film when you click on a specific film with help of id 

function filmer(id) {
     let film = data.filmer.find(x => x.id === id);

     $('main').html(`
  <div id="filmContainer">
  <p><iframe width="560" height="315" src="https://www.youtube.com/embed/${film.youtubeTrailers}?rel=0&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen class="d-block w-100"></iframe></p>
   <img class='post' img style= "height: 500px"src="${film.images}"></img> 
   </div>
   <div class="filmText">
   <h3> Titel: ${film.title} </h3>  
   <p>Produktionsland: ${film.productionCountries} <br> Produktionsår: ${film.productionYear} <br>
      Längd: ${film.length}<br> Genre: ${film.genre} <br> Åldersgräns: ${film.ageRestrictions}
  <br> Distributör: ${film.distributor}<br> Språk: ${film.language}<br> Textning: ${film.subtitles} <br>
     Regissör: ${film.director}<br> Skådespelare: ${film.actors} <br> Handling: ${film.description} 
     Recensioner: ${film.reviews[0].source} <br> ${film.reviews[0].quote} </p>
    <h5> Ratning: ${film.reviews[0].stars}  / ${film.reviews[0].max}<h5></div>


   <div id="span3">


     <table class="table table-hover">
          <thead>
               <tr>
                      <th scope="col">Film</th>
                    <th scope="col">Datum</th>
                     <th scope="col">Tid</th>
                    <th scope="col">Salong</th>

               </tr>
          </thead>
          <tbody class="table">

          </tbody>
     </table>


</div>


 <div class="cinema" >
<div class="col-12" >
          <div class="all-seats">

          </div>
                   <button type="button" disabled class="btn btn-success btn3">Boka</button>

</div>
     </div>




    `);
     console.log(film.title);
     findByfilm('shows', film.title);

}
