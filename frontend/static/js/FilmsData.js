fetch("/json/filmer.json")
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


  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    div.innerHTML = '<img class="poster" src= ' + data[i].images + '></img>' + "<h2 id ='title'><br>" + data[i].title + "<br></h2>"

    mainContainer.appendChild(div);

  }
}