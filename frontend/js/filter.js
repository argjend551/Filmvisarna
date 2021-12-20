let showid;
// This function allows us to filter the shows.js and find the specific shows for the film we want to find
function findByfilm(type, film) {

     let films;
     films = data[type].filter(x => x.film === film);
     console.log(films);
     let shows = [];
     for (let show of films) {
          shows.push("<tr>");
          shows.push("<td class=" + show.id + ">" + show.film + "</td>");
          shows.push("<td class=" + show.id + ">" + show.date + "</td>");
          shows.push("<td class=" + show.id + ">" + show.time + "</td>");
          shows.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
          shows.push("</tr>");
     }
     $("<tbody/>", { "class": "mydata", html: shows.join("") }).appendTo("table");
     // this function sends the id of the film you click to the method choice

     $("td").click(function () {
          showid = parseInt($(this).closest('td').attr('class'));
          let element = document.querySelector(".all-seats");
          selectedSeats = [];
          element.scrollIntoView();
          freeSeats(showid);
          seatsFunction(showid);
     });
     $('#date-picker-example').change(function () { 
          dateFilter();
     })


}
function findbyAge(type, age) {

     let films;
     films = data[type].filter(x => x.ageRestrictions === age);
     console.log(films);
     let shows = [];
     for (let show of films) {
          findByfilm('shows', show.title);
     }
     $("<tbody/>", { "class": "mydata", html: shows.join("") }).appendTo("table");
     // this function sends the id of the film you click to the method choice

     $("td").click(function () {
          let element = document.querySelector(".screen");
          selectedSeats = [];
          element.scrollIntoView();
          showid = parseInt($(this).closest('td').attr('class'));
          freeSeats(showid);
          seatsFunction(showid);
     });



}




// this method prints out all the shows in the table at start
function displayFilms() {

     let shows = [];
     for (let show of data.shows) {
          shows.push("<tr>");
          shows.push("<td class=" + show.id + ">" + show.film + "</td>");
          shows.push("<td class=" + show.id + ">" + show.date + "</td>");
          shows.push("<td class=" + show.id + ">" + show.time + "</td>");
          shows.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
          shows.push("</tr>");
     }
     $("<tbody/>", { "class": "mydata", html: shows.join("") }).appendTo("table");
     $("td").click(function () {
          let element = document.querySelector(".screen");
          selectedSeats = [];
          element.scrollIntoView();
          showid = parseInt($(this).closest('td').attr('class'));
          freeSeats(showid);
          seatsFunction(showid);
     });


}

// this method filters the film you choose in the selector
function filterfilm() {
     $('#mySelect').change(function () {
          let value = $(this).val();


          if (value == 0) {
               $("tbody").empty();
               displayFilms();
          }

          if (value == 1) {
               $("tbody").empty();
               findByfilm('shows', "White Chicks");

          }
          if (value == 2) {
               $("tbody").empty();
               findByfilm('shows', "Deadpool");
          }
          if (value == 3) {
               $("tbody").empty();
               findByfilm('shows', "Tio Orsaker Att Hata Dig");

          }
          if (value == 4) {
               $("tbody").empty();
               findByfilm('shows', "Bad Boys");

          }
          if (value == 5) {
               $("tbody").empty();
               findByfilm('shows', "No Time to Die");

          }
          if (value == 6) {
               $("tbody").empty();
               findByfilm('shows', "UPP");

          }
     });


     $('#mySelect1').change(function () {
          let value = $(this).val();


          if (value == 0) {
               $("tbody").empty();
               $("tbody").empty();
               $("tbody").empty();
               displayFilms();
          }

          if (value == 1) {
               $("tbody").empty();
               $("tbody").empty();
               $("tbody").empty();
               console.log(findbyAge('filmer', '7'));

          }
          if (value == 2) {
               $("tbody").empty();
               $("tbody").empty();
               $("tbody").empty();
               findbyAge('filmer', '15');
          }
         
     });




   


}






function dateFilter() {
     $('#date-picker-example').change(function () {
          let showws = [];

          $("tbody").empty();
          let selectedDate = $(this).val();
          let shows;
          shows = data['shows'].filter(x => x.date === selectedDate);
          console.log(shows);
          for (let show of shows) {
               
               showws.push("<tr>");
               showws.push("<td class=" + show.id + ">" + show.film + "</td>");
               showws.push("<td class=" + show.id + ">" + show.date + "</td>");
               showws.push("<td class=" + show.id + ">" + show.time + "</td>");
               showws.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
               showws.push("</tr>");
          }
          
          $("<tbody/>", { "class": "mydata", html: showws.join("") }).appendTo("table");
     // this function sends the id of the film you click to the method choice
          if (showws.length == 0) {
               $('#datemodal').modal('show');
          }
         


          $("td").click(function () {
               let element = document.querySelector(".screen");
               selectedSeats = [];
               
               element.scrollIntoView();
               showid = parseInt($(this).closest('td').attr('class'));
               freeSeats(showid);
               seatsFunction(showid);
          });
          $(".dateclose").click(function () {
               $("tbody").empty();
               displayFilms();
               $('#datemodal').modal('hide');
          });
     })


     



}