//Content for the films view
function filmer(id) {
     let film = data.filmer.find(x => x.id === id);

     $('main').html(/*html*/`
		<div class="row camera-bg">
			<div class="col-12">
				<iframe class="youtubeTrailers" content="width=device-width, initial-scale=1.0" src="https://www.youtube.com/embed/${film.youtubeTrailers}
														" title="YouTube video" allowfullscreen></iframe>
			</div>
		</div>


		<div class="row mt-5">

  		<div class="offset-1 col-10 offset-sm-2 col-sm-8 offset-md-2 col-md-4">
				<div class="film-images-fluid">
					<img src="${film.images}" class="img-fluid" style="border-radius: 5%" alt="filmer">
				</div>
			</div>

			<div class="offset-1 col-10 offset-sm-2 col-sm-8 col-md-4 mt-5 mt-md-0 offset-md-0">
				<div class="text-white">
					<h3> Titel: ${film.title} </h3>
					<p>Produktionsland: ${film.productionCountries} <br> Produktionsår: ${film.productionYear} <br>
						Längd: ${film.length}<br> Genre: ${film.genre} <br> Åldersgräns: ${film.ageRestrictions}
						<br> Distributör: ${film.distributor}<br> Språk: ${film.language}<br> Textning: ${film.subtitles} <br>
						Regissör: ${film.director}<br> Skådespelare: ${film.actors} <br>
						Handling: ${film.description}
						Recensioner: ${film.reviews[0].source} <br> ${film.reviews[0].quote}
					</p>
					<h5> Ratning: ${film.reviews[0].stars} / ${film.reviews[0].max}<h5>
				</div>
			</div>

		</div>

		<div class="col-sm">
			
		</div>
		</div>
		</div>

		</div>
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

 <div class="span">
  <div class="screen">
 
 </div>
 </div>
 </div>
<div class="col-12" >
          <div class="all-seats">
               
      </div>
          <div class=wrap-btn>
          <button type="button" disabled class="btn btn-success btn3">Boka</button>
          </div>
     </div>
  `);
	window.scrollTo(0, 0);
     findByfilm('shows', film.title);

     cameraImageSetHeight();
}


// Set proportional height on the camera image
function cameraImageSetHeight() {
     // camera image element
     let ci = $('.camera-bg');
     ci.height(''); // reset before reading width
     let width = ci.width();
     let height = width * 768 / 1366; // proportional height
     ci.height(height);
     // trailer set height proportional to width
     let yt = $('.youtubeTrailers');
     yt.height();
     let ywidth = yt.width();
     let yheight = ywidth * 9 / 16;
     yt.height(yheight);
}


$(window).resize(cameraImageSetHeight);