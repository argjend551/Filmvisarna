/*fetch("/json/filmer.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data)
  })
  .catch(function (err) {
    console.log(err);
  })

function appendData(data) {

  let mainContainer = document.getElementById("films");
  var newdiv = document.createElement('div');
  newdiv.className = 'row';

  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.className = 'col-md-4 col-xs-4';
    newdiv.appendChild(div);
    div.innerHTML='<img class="poster" src=' + data[i].images + '></img>'
      + "<h2 id ='title'><br>" + data[i].title + "<br></h2>"


    mainContainer.appendChild(newdiv);

  }
}*/