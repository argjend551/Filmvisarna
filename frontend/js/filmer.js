let films;


//Content for the films view
function filmer() {
  $('main').html(`
  <h1>Filmer</h1>
  <p>Här kommer information om filmerna att visas</p>
<p><img src="Filmer-images/Upp.jpg" alt="UPP"></img></p>
    `);

  // Read the film data from the filmer.json file
  async function readFilmsFromJson() {
    films = await $.getJSON('/json/filmer.json');
    // Native/vanilla JS doing the same thing as $.getJSON
    // persons = await (await fetch('persons.json')).json();
    renderFilmsToScreen();
  }

  // Render the films as HTML to the DOM
  function renderFilmsToScreen() {
    for (let film of films) {
      $('main').append(/*html*/`
    <div class="film">
    <h3>${film.title}</h3> 
    <p>${film.title} is made in ${film.productionYear}</p>
    </div>`)
    }
  }

  readFilmsFromJson();
  // List the films
  let html = '';
  for (let film of films) {
    html += `<p><a href="#film-${film.id}">${film.title}</a></p>`
  }
  $('main').append(html);

}
