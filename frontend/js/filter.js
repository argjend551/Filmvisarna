let showid;
var items = [];
// This function allows us to filter the shows.js and find the specific shows for the film we want to find
function findByfilm(type, film) {

     let ar;
     ar = data[type].filter(x => x.film === film);
     console.log(ar);
     for (let show of ar) {
          $('.film').append("<tr><td class=" + show.id + ">" + show.film + "</td></hr></tr>");
          $('.datum').append("<tr><td class=" + show.id + ">" + show.date + "</td></tr>");
          $('.salong').append("<tr><td class=" + show.id + ">" + show.auditorium + "</td></tr>");

     }

     // this function sends the id of the film you click to the method choice
     items.push("</tr>");

     $("td").click(function () {
          showid = parseInt($(this).closest('td').attr('class'));
          $(".row1").empty();
          $(".row2").empty();
          $(".row3").empty();
          $(".row4").empty();
          $(".row5").empty();
          $(".row6").empty();
          $(".row7").empty();
          $(".row8").empty();
          console.log(showid);
          freeSeats(showid);
          seatsFunction(showid);
     });



}




// this method prints out all the shows in the table at start
function displayFilms(type) {


     for (let show of data.shows) {
          $('.film').append("<tr><td class=" + show.id + ">" + show.film + "</td></hr></tr>");
          $('.datum').append("<tr><td class=" + show.id + ">" + show.date + "</td></tr>");
          $('.salong').append("<tr><td class=" + show.id + ">" + show.auditorium + "</td></tr>");

     }
     $("td").click(function () {

          showid = parseInt($(this).closest('td').attr('class'));
          console.log(showid);
          $(".row1").empty();
          $(".row2").empty();
          $(".row3").empty();
          $(".row4").empty();
          $(".row5").empty();
          $(".row6").empty();
          $(".row7").empty();
          $(".row8").empty();

          freeSeats(showid);
          seatsFunction(showid);
     });


}

// this method filters the film you choose in the selector
function filterfilm(a) {
     $('#mySelect').change(function () {
          var value = $(this).val();
          console.log(value);


          if (value == 0) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               displayFilms();
          }

          if (value == 1) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "White Chicks");

          }
          if (value == 2) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "Deadpool");
          }
          if (value == 3) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "Tio Orsaker Att Hata Dig");

          }
          if (value == 4) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "Bad Boys");

          }
          if (value == 5) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "No Time to Die");

          }
          if (value == 6) {
               $(".film").empty();
               $(".datum").empty();
               $(".salong").empty();
               findByfilm('shows', "UPP");

          }
     });
}






