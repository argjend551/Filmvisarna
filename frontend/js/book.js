// Make a booking
// showId = id of the show to book
// seats should be an array of set numbers
let a = "";

//Hisham 
// Add totalPrice as parameter 
async function book(showId, totalPrice, seats) {

  let availableSeats = freeSeats(showId);

  // We have got an error from freeSeats, just return it
  if (typeof availableSeats === 'string') {
    return availableSeats;
  }

  // Flatten available seats to ONE array (instead of having separate rows)
  availableSeats = availableSeats.flat();

  // Check that all the seats we want to book are available
  for (let seat of seats) {
    // Hisham 
    // before  seat  after seat.number
    //  
    if (!availableSeats.includes(seat.number)) {
      return "Could not perform booking. Seat " + seat.number + " not available";
    }
  }

  function makeid(length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
    //
    totalPrice
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
  // taking out the seats number
    let seat = booking.seats.map(x => x.number);
    // Add the seats as occupied

    occupiedSeats.push(...seat);
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
    storaSalong(seats);

    // if its not bigger than 80 send array values to 'lillaSalong'
  } else {
    lillaSalong(seats);

  }

  return seats;
}

// the function to select seats to book
function seatsFunction(a) {
  // Hisham 
  // prices 
  //
  const priceingTypes = [{
    type: "Barn",
    amount: "65"

  },
  {
    type: "Vuxen",
    amount: "85"

  },
  {
    type: "Pensionär",
    amount: "75"

  }
  ];
  // confirm model
  //
  let modelForm = new bootstrap.Modal($("#confirmBooking"));
  $("#confirmBooking").on("hidden.bs.modal", function() {
    $(".all-seats").text("");
    selectedSeats = [];
    $(".btn").attr("disabled", true);
});
  //creating empty array
  let selectedSeats = [];
  // if you click on a seat displayed on the screen,
  // change the class attribute to selected-seats and push the array index you pressed to array selectedSeats
  $('.seats').click(function () {
    if ($(this).attr("class") == "seats") {
      $(this).addClass('selected-seat');
      let clickedSeats = parseInt($(this).text());
      selectedSeats.push(clickedSeats);
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

    // the button book is disabled, but if you click on a seat it will become enabled.
    if (selectedSeats.length > 0) {
      $(".btn").removeAttr("disabled");
    } else {
      $(".btn").attr("disabled", true);
    }



  });


  // when you press the confirm book button make a booking.
  // 
  $("#btnConfirmBook").on('click', function () {
    let totalPrice = 0.0;
    selectedSeats = selectedSeats.map(function (seat) {

      // get information about seat  (type  and amount )
      let selectedPriceingType = priceingTypes.find(function (priceingType) {
        try {
          return priceingType.type == (new Array(...document.querySelectorAll(`input[name='seat-${seat}']`))).find((input) => { return input.checked }).value
        } catch (er) {
          return false;
        }
      });
      //

      if (typeof selectedPriceingType != 'object') {
        selectedPriceingType = {
          type: "Normal",
          amount: "85"

        }
      }
      totalPrice += parseFloat(selectedPriceingType.amount);
      return {
        number: seat,
        type: selectedPriceingType.type,
        price: selectedPriceingType.amount,
      }
    });
    if (selectedSeats.length > 0) {
      book(showid, totalPrice, [...selectedSeats]);

    }
    // 
    modelForm.hide();
    window.bokningsbekraftelse();
    selectedSeats = [];


  });
  //

  // when you press the book button show confirm button.
  $(".btn3").on("click", function () {

    if (selectedSeats.length > 0) {

      // to get show information
      let show = data.shows.find(x => x.id == (showid));
      let bodyContent = `<div class='d-flex flex-column'>
            <div> 
            <h1>  ${show.film}<h1>
            <h3>${show.auditorium}<br>${show.date}<br>Kl: ${show.time}</h3>
            </div>
          `;
      selectedSeats.forEach(function (seat) {
        bodyContent += `
        <div class=' mb-2' > <h3> Stolsnummer : ${seat} </h3>   <div class="d-flex flex-wrap justify-content-evenly">
              `;
        priceingTypes.forEach(function (pricingType, index) {

          bodyContent += `
          <div class="btn-group my-1" role="group" aria-label="Basic radio toggle button group">
          <input type="radio" class="btn-check" name="seat-${seat}" id="btnradio-${index}-${seat}" autocomplete="off"  value=${pricingType.type}  ${index === 1 ? 'checked' : ''}>
          <label class="btn btn-outline-primary" for="btnradio-${index}-${seat}">${pricingType.type} (${pricingType.amount}kr) </label>
        </div>
        `;
        });
        bodyContent += `</div> </div>`
      });
      bodyContent += `</div>`;
      $("#confirmBookingBody").html(bodyContent);
      modelForm.show();
      // 


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




function storaSalong(seats) {
  let html = '';
  for (let row of seats) {
    html += '<div class="crow">'
    for (let seat of row) {
      html += '<div class="seats" value=' + seat + '>' + seat + '</div>';
    }
    html += '</div>';
  }
  $('.all-seats').html(html);
  // if a seat is booked it will get the value X, and here we give all button that have the value X an class 'disabledseats'
  // then we disable the buttons so you cannot press them.
  $('[value="X"]').attr('class', 'disabledseats');
  $(".disabledseats").attr("disabled", "disabled");
}

function lillaSalong(seats) {
  let html = '';
  for (let row of seats) {
    html += '<div class ="crow">'
    for (let seat of row) {
      html += '<div class="seats" value=' + seat + '>' + seat + '</div>';
      ;
    }
    html += '</div>';
  }
  $('.all-seats').html(html);
  // if a seat is booked it will get the value X, and here we give all button that have the value X an class 'disabledseats'
  // then we disable the buttons so you cannot press them.
  $('[value="X"]').attr('class', 'disabledseats');
  $(".disabledseats").attr("disabled", "disabled");

}