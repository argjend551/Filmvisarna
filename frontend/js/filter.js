let showid;
// This function allows us to filter the shows.js and find the specific shows for the film we want to find
function findByfilm(type, film) {
     // Filter that filters by the type from parameters example shows then creates a new array with the films that matches the variable film from parameters
     let films;
     films = data[type].filter(x => x.film === film);

     // creating an array outside of the for loop so we can use it outside
     let shows = [];

     // for each show in films push to array
     for (let show of films) {
          shows.push("<tr>");
          shows.push("<td class=" + show.id + ">" + show.film + "</td>");
          shows.push("<td class=" + show.id + ">" + show.date + "</td>");
          shows.push("<td class=" + show.id + ">" + show.time + "</td>");
          shows.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
          shows.push("</tr>");
     }
     // print the array into the body
     $("<tbody/>", { "class": "mydata", html: shows.join("") }).appendTo("table");


     // this function sends the id of the film in the table you click on to the method freeseats and seatsfunction to show the seats on screen.
     $("td").click(function () {
          // saves the id to the showid on what you click on
          showid = parseInt($(this).closest('td').attr('class'));
          // grab the .all-seats and store in let element
          let element = document.querySelector(".screen");
          // empty the array so there is nothing stored in it when you change show
          selectedSeats = [];
          //scroll to the seats after you click on a show in the table
          element.scrollIntoView();
          freeSeats(showid);
          seatsFunction(showid);
     });

     // this function is when you click on a date on the date picker it runs the function dataFilter
     $('#date-picker-example').change(function () {
          dateFilter();
     })


}


// function that filters by the age 
function findbyAge(type, age) {

     let films;
     // creates new array with the age you select
     films = data[type].filter(x => x.ageRestrictions === age);
     // creating an array outside of the for loop so we can use it outside
     let shows = [];
     // for each show in films send the title that are in the age restriction you choosed to the findByFilm method
     for (let show of films) {
          findByfilm('shows', show.title);
     }

     // this function sends the id of the film in the table you click on to the method freeseats and seatsfunction to show the seats on screen.
     $("td").click(function () {
          // grab the .all-seats and store in let element
          let element = document.querySelector(".screen");
          // empty the array so there is nothing stored in it when you change show
          selectedSeats = [];
          //scroll to the seats after you click on a show
          element.scrollIntoView();
          // saves the id to the showid on what you click on
          showid = parseInt($(this).closest('td').attr('class'));
          freeSeats(showid);
          seatsFunction(showid);
     });



}


// this method prints out all the shows in the table at start
function displayFilms() {

     // creating an array outside of the for loop so we can use it outside
     let shows = [];

     // for each show in data.shows push to array
     for (let show of data.shows) {
          shows.push("<tr>");
          shows.push("<td class=" + show.id + ">" + show.film + "</td>");
          shows.push("<td class=" + show.id + ">" + show.date + "</td>");
          shows.push("<td class=" + show.id + ">" + show.time + "</td>");
          shows.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
          shows.push("</tr>");
     }
     // print the array into the body
     $("<tbody/>", { "class": "mydata", html: shows.join("") }).appendTo("table");


     // this function sends the id of the film in the table you click on to the method freeseats and seatsfunction to show the seats on screen.
     $("td").click(function () {
          // grab the .all-seats and store in let element
          let element = document.querySelector(".screen");
          // empty the array so there is nothing stored in it when you change show
          selectedSeats = [];
          //scroll to the seats after you click on a show
          element.scrollIntoView();
          // saves the id to the showid on what you click on
          showid = parseInt($(this).closest('td').attr('class'));
          freeSeats(showid);
          seatsFunction(showid);
     });


}

// this method filters the film you choose in the selector
function filterfilm() {
     // this method runs when you change in the selector 
     $('#mySelect').change(function () {
          // saves your choise you select in the selector
          let value = $(this).val();
          // reset the date selector to ååå-mm-dd 
          $('#date-picker-example').val(0);
          // reset the 'Age' to default
          $('#mySelect1').val(0);


          // if statments on what movie you choose it will send you to the findbyfilm method
          // and filter for you and display in the table
          // tbody.empty empties the table so it dosent get duplicate everytime you select new movie
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


     // this method runs when you choose to change something in the selector for age restrictions

     $('#mySelect1').change(function () {

          // saves your choise you select in the selector
          let value = $(this).val();
          // reset the date selector to ååå-mm-dd 
          $('#date-picker-example').val(0);
          // reset the 'välj film' to default
          $('#mySelect').val(0);
          // if statments on what movie you choose it will run the findbyAge method
          // and filter for you by age and display in the table
          // tbody.empty empties the table so it dosent get duplicate everytime you select new movie
          if (value == 0) {
               $("tbody").empty();
               displayFilms();
          }

          if (value == 1) {
               $("tbody").empty();
               findbyAge('filmer', '7');

          }
          if (value == 2) {
               $("tbody").empty();
               findbyAge('filmer', '15');
          }

     });

}


// function that filters shows by the date
function dateFilter() {
     $('#date-picker-example').change(function () {
          let showws = [];
          // reset the 'Age' to default
          $('#mySelect1').val(0);
          // reset the 'Age' to default
          $('#mySelect').val(0);
          // empty the body
          $("tbody").empty();
          // saves the date you clicked on in the selectedDate variable
          let selectedDate = $(this).val();
          // filtering the shows by the date you choosed
          let shows;
          shows = data['shows'].filter(x => x.date === selectedDate);

          // for each show in shows push to array
          for (let show of shows) {

               showws.push("<tr>");
               showws.push("<td class=" + show.id + ">" + show.film + "</td>");
               showws.push("<td class=" + show.id + ">" + show.date + "</td>");
               showws.push("<td class=" + show.id + ">" + show.time + "</td>");
               showws.push("<td class=" + show.id + ">" + show.auditorium + "</td>");
               showws.push("</tr>");
          }
          // print the array into the table body
          $("<tbody/>", { "class": "mydata", html: showws.join("") }).appendTo("table");



          // this function sends the id of the film in the table you click on to the method freeseats and seatsfunction to show the seats on screen.
          $("td").click(function () {
               // grab the .all-seats and store in let element
               let element = document.querySelector(".screen");
               // empty the array so there is nothing stored in it when you change show
               selectedSeats = [];
               //scroll to the seats after you click on a show
               element.scrollIntoView();
               // saves your choice you select in the selector
               showid = parseInt($(this).closest('td').attr('class'));
               freeSeats(showid);
               seatsFunction(showid);
          });

          if (showws.length == 0) {
               $('#datemodal').modal('show');
          }

          // when you click on the dateclose the OK button in the pop-up modal
          // empty table body
          // display all movies
          // hide the modal
          $(".dateclose").click(function () {
               // reset the date selector to ååå-mm-dd 
               $('#date-picker-example').val(0);
               $("tbody").empty();
               displayFilms();
               $('#datemodal').modal('hide');
          });
     })






}