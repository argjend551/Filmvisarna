// Make a booking
// showId = id of the show to book
// seats should be an array of set numbers
let a = "";
async function book(showId, seats) {

  let availableSeats = freeSeats(showId);

  // We have got an error from freeSeats, just return it
  if (typeof availableSeats === 'string') {
    return availableSeats;
  }

  // Flatten available seats to ONE array (instead of having separate rows)
  availableSeats = availableSeats.flat();

  // Check that all the seats we want to book are available
  for (let seat of seats) {
    if (!availableSeats.includes(seat)) {
      return "Could not perform booking. Seat " + seat + " not available";
    }
  }

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    result = characters.charAt(Math.floor(Math.random() *
      charactersLength));
    return result;
  }

  // Create a new booking
  let booking = {
    id: makeid(1) + (Math.floor(Math.random() * 8999) + 1000),
    showId,
    seats,
  };

  // Add the booking to the existing bookings
  data.bookings.push(booking);

  // Save the booking to the bookings.json file
  await JSON._save('bookings', data.bookings);


  // Return the booking
  return booking;
}


// Find all free seats for a show
function freeSeats(showId) {
  // Find the show
  let show = findById('shows', showId);
  if (!show) { return 'Show does not exist!'; }

  // Find the auditorium
  let auditorium = data.auditoriums.find(x => x.name == show.auditorium);
  if (!auditorium) { return 'Invalid auditorium in show data!'; }

  // Loop through all bookings to get occupied seats
  let occupiedSeats = [];
  for (let booking of data.bookings) {
    // If it is not the same show then do nothing
    if (booking.showId != showId) { continue; }
    // Add the seats as occupied
    occupiedSeats.push(...booking.seats);
  }

  // Build an array with all seats in the auditorium
  let seats = [], seatNumber = 1;
  for (seatsInARow of auditorium.seatsPerRow) {
    let row = [];
    seats.push(row);
    for (let i = 0; i < seatsInARow; i++) {
      row.push(occupiedSeats.includes(seatNumber) ? 'X' : seatNumber);
      seatNumber++;
    }

  }
  // if seatNumber is higher than 80 send all array values to 'storaSalong'
  if (seatNumber > 80) {
    storaSalong(seats[0], seats[1], seats[2], seats[3], seats[4], seats[5], seats[6], seats[7]);

    // if its not bigger than 80 send array values to 'lillaSalong'
  } else {
    lillaSalong(seats[0], seats[1], seats[2], seats[3], seats[4], seats[5]);

  }

  return seats;
}

// the function to select seats to book
function seatsFunction(a) {
  //creating empty array
  let selectedSeats = [];
  // if you click on a seat displayed on the screen,
  // change the class attribute to selected-seats and push the array index you pressed to array selectedSeats
  $('.seats').click(function () {
    if ($(this).attr("class") == "seats") {
      $(this).addClass('selected-seat');
      let a = parseInt($(this).text());
      selectedSeats.push(a);
      console.log(selectedSeats);
    }

    else {
      // if you click on a selected-seat ,
      // change the class attribute back to seats and splice/remove the value you pressed from the array
      $(this).removeClass('selected-seat');

      for (var i = 0; i < selectedSeats.length; i++) {
        let removeSelect = parseInt($(this).text());
        if (selectedSeats[i] === removeSelect) {

          selectedSeats.splice(i, 1);
          console.log(selectedSeats);
        }

      }
    }



  });
  // when you press the book button make a booking.
  $(".book").on("click", function () {
    console.log(showid);
    if (selectedSeats.length > 0) {
      book(showid, [...selectedSeats]);

    }
    $(".row1").empty();
    $(".row2").empty();
    $(".row3").empty();
    $(".row4").empty();
    $(".row5").empty();
    $(".row6").empty();
    $(".row7").empty();
    $(".row8").empty();
    freeSeats(showid);
  });
}


//Function that creates a button for every row and seat in the auditiorium 'storaSalong'
//.row1.append grabs the class and creates buttons for row1
// a[i] gives the value of the position in the array(seatnumber)
function storaSalong(a, b, c, d, e, f, g, h) {
  for (var i = 0; i < a.length; i++) {
    $('.row1').append('<button class="seats" value=' + a[i] + '>' + a[i] +
      '</button>');
  }
  for (var i = 0; i < b.length; i++) {
    $('.row2').append('<button class="seats"value=' + b[i] + '>' + b[i] +
      '</button>');
  }
  for (var i = 0; i < c.length; i++) {
    $('.row3').append('<button class="seats"value=' + c[i] + '>' + c[i] +
      '</button>');
  }
  for (var i = 0; i < d.length; i++) {
    $('.row4').append('<button class="seats"value=' + d[i] + '>' + d[i] +
      '</button>');
  }
  for (var i = 0; i < e.length; i++) {
    $('.row5').append('<button class="seats" value=' + e[i] + '>' + e[i] +
      '</button>');
  }
  for (var i = 0; i < f.length; i++) {
    $('.row6').append('<button class="seats" value=' + f[i] + '>' + f[i] +
      '</button>');
  }

  for (var i = 0; i < g.length; i++) {
    $('.row7').append('<button class="seats" value=' + g[i] + '>' + g[i] +
      '</button>');
  }
  for (var i = 0; i < h.length; i++) {
    $('.row8').append('<button class="seats" value=' + h[i] + '>' + h[i] +
      '</button>');
  }

  $('[value="X"]').attr('class', 'disabledseats');
  $(".disabledseats").attr("disabled", "disabled");

}

//Function that creates a button for every row and seat in the auditiorium 'lillaSalong'
//.row1.append grabs the class and creates buttons for row1
// a[i] gives the value of the position in the array(seatnumber)
function lillaSalong
  (a, b, c, d, e, f) {
  for (var i = 0; i < a.length; i++) {
    $('.row1').append('<button class="seats" value=' + a[i] + '>' + a[i] +
      '</button>');
  }
  for (var i = 0; i < b.length; i++) {
    $('.row2').append('<button class="seats"value=' + b[i] + '>' + b[i] +
      '</button>');
  }
  for (var i = 0; i < c.length; i++) {
    $('.row3').append('<button class="seats"value=' + c[i] + '>' + c[i] +
      '</button>');
  }
  for (var i = 0; i < d.length; i++) {
    $('.row4').append('<button class="seats"value=' + d[i] + '>' + d[i] +
      '</button>');
  }
  for (var i = 0; i < e.length; i++) {
    $('.row5').append('<button class="seats" value=' + e[i] + '>' + e[i] +
      '</button>');
  }
  for (var i = 0; i < f.length; i++) {
    $('.row6').append('<button class="seats" value=' + f[i] + '>' + f[i] +
      '</button>');
  }


  // if a seat is booked it will get the value X, and here we give all button that have the value X an class 'disabledseats'
  // then we disable the buttons so you cannot press them.

  $('[value="X"]').attr('class', 'disabledseats');
  $(".disabledseats").attr("disabled", "disabled");

}
