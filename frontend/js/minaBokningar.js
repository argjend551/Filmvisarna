let bookingNumber;

function minaBokningar() {
  $('main').html(`
  <div class="container-fluid myBookingPage">
  <h1>Mina Bokningar</h1>
  <h2><lable>Skriv in ditt bokningsnummer:</lable></h2>
<input type="text" id="text" name="name" placeholder="Bokningsnummer..." />
<input type="button" id="text_value" value="Sök" onclick="setBookingNumber()"/>
<div class="input"></div>   
 <!-- Modal -->
<div class="modal custom fade" id="bookingNumberNotFoundModal" tabindex="-1" aria-labelledby="bookingNumberNotFoundModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="bookingNumberNotFoundModalLabel">Bokningsnummer saknas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p class="input-body">Bokningsnumret kan inte hittas. Kontrollera att du skrivit rätt.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
<div class="modal fade" id="noInputModal" tabindex="-1" aria-labelledby="noInputModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="noInputModalLabel">Bokningsnummer saknas</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p class="input-body">Skriv in ditt bokningsnummer</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
      </div>
    </div>
  </div>
</div>
<!--modal-->
<div class="modal fade" id="bookingCancelledModal" tabindex="-1" aria-labelledby="bookingCancelledModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="bookingCancelledModalLabel"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <p class="input-body">Din bokning är avbokad</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="minaBokningar()">OK</button>
      </div>
    </div>
  </div>
</div>

</div>
   `);
}
//Finds the booking to cancel in bookings.json and then the
//index of that booking. Then removes the booking-object at that
//index and then saves to bookings.json.
async function cancelBooking(bookingId) {
  let bookings = data.bookings;
  console.log(bookings);
  let bookingToCancel = bookings.find(function (booking) {
    return booking.id === bookingId;
  });
  let bookingToCancelIndex = bookings.indexOf(bookingToCancel);
  let cancelledBooking = bookings.splice(bookingToCancelIndex, 1);
  await JSON._save('bookings', data.bookings);
  showBookingCancelledModal();
}

//Function to print information about the booking on the webpage.
//User kan cancel booking via cancelBtn. When it is pressed the 
//cancelBooking() is called.
function renderBookingInfo(bookingNumber) {
  let booking = data.bookings.find(x => x.id == (bookingNumber));
  let show = data.shows.find(x => x.id == (booking.showId));
  $('.input').html(`
  <div class="myBookings"><h1>Min bokning</h1>
  <h2>Bokningsnummer: ${booking.id}</h2>
  <h2>Film: ${show.film}</h2>
  <h2>Datum: ${show.date}</h2>
  <h2>Tid: ${show.time}</h2>
  <h2>Salong: ${show.auditorium}</h2>
  <div><button type='button'class="cancelBtn btn-success" onclick="cancelBooking(bookingNumber)">Avboka</button></div>
  </div>
  `)
}
//Reads booking number from text input.
//Checks if booking number exists in bookings.json. 
//If it does renderBookingInfo() is called with the argument
//bookingNumber
//If it doesn't exist an alertbox informs user of this.
//If text input is empty user i asked to enter booking number.
function setBookingNumber() {
  bookingNumber = $("#text").val();
  let valueExists = false;
  let booking = data.bookings.find(x => x.id == (bookingNumber));
  if (booking == undefined) {
    valueExists = false;
  }
  else {
    valueExists = true;
  }
  if (valueExists) {
    renderBookingInfo(bookingNumber);
  }
  else {
    if (bookingNumber == "") {
      showNoInputModal();
    }
    else {
      bookingNumber = "";
      showNumberNotFoundModal();
    }
  }
}


function showNumberNotFoundModal() {
  console.log("Kör showNumberNotFoundModal")
  $('document').ready(function () {
    $('#bookingNumberNotFoundModal').modal('show');
  }
  );
}

function showNoInputModal() {
  console.log("Kör noInputModal")
  $('document').ready(function () {
    $('#noInputModal').modal('show');
  }
  );
}

function showBookingCancelledModal() {
  console.log("Kör ShowBookingCancelledModal")
  $('document').ready(function () {
    $('#bookingCancelledModal').modal('show');
  }
  );
}