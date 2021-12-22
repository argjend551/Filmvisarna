let bookingNumber;

//Lets user enter booking number as input and runs the function setBookingNumber() to validate it and set it if it exists.
//If it exists the function renderBookingInfo() is run and adds booking information in the div with class 'input'.
function minaBokningar() {
  $('main').html(/*html*/`
<div class="myBookingPage">
  <div class="row mt-1">
    <div class="offset-2 offset-sm-3 offset-lg-4 col-8 col-sm-6 col-lg-4" id="enterBookingInfo">
      <h1 id="myBookingPageH1">Mina Bokningar</h1>
      <h6>
        <lable>Skriv in ditt bokningsnummer:</lable>
      </h6>
      <input type="text" id="text" name="name" placeholder="Bokningsnummer..." />
      <input type="button" id="text_value" value="Sök" onclick="setBookingNumber()" />
    </div>
  </div>
  <div class="input"></div>
  <!-- Modal that shows when booking number is not found -->
  <div class="modal custom fade" id="bookingNumberNotFoundModal" tabindex="-1"
    aria-labelledby="bookingNumberNotFoundModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="bookingNumberNotFoundModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="input-body">Bokningsnumret kan inte hittas. Kontrollera att du skrivit rätt.</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal that shows when no booking number is entered -->
  <div class="modal fade" id="noInputModal" tabindex="-1" aria-labelledby="noInputModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="noInputModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="input-body">Skriv in ditt bokningsnummer</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">OK</button>
        </div>
      </div>
    </div>
  </div>
  <!--modal that asks for confirmation about cancelling booking -->
  <div class="modal fade" id="confirmCancelModal" tabindex="-1" aria-labelledby="confirmCancelModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="confirmCancelModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="input-body">Vill du avboka din bokning?</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal"
            onclick="cancelBooking(bookingNumber)">OK</button>
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
            onclick="minaBokningar()">Avbryt</button>
        </div>
      </div>
    </div>
  </div>

  <!--modal that shows to confirm a booking is cancelled -->
  <div class="modal fade" id="bookingCancelledModal" tabindex="-1" aria-labelledby="bookingCancelledModalLabel"
    aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="bookingCancelledModalLabel"></h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <h5 class="input-body">Din bokning är avbokad</h5>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="minaBokningar()">OK</button>
        </div>
      </div>
    </div>
  </div>
</div>
`);
  window.scrollTo(0, 0);
}
//Finds the booking to cancel in bookings.json and then the
//index of that booking. Then removes the booking-object at that
//index and then saves to bookings.json.
async function cancelBooking(bookingId) {
  let bookings = data.bookings;
  let bookingToCancel = bookings.find(function (booking) {
    return booking.id === bookingId;
  });
  let bookingToCancelIndex = bookings.indexOf(bookingToCancel);
  let cancelledBooking = bookings.splice(bookingToCancelIndex, 1);
  await JSON._save('bookings', data.bookings);
  showBookingCancelledModal();
}

//Function to print information about the booking on the webpage.
//User can cancel booking via cancelBtn. When it is pressed the 
//cancelBooking() is called.
function renderBookingInfo(bookingNumber) {
  let booking = data.bookings.find(x => x.id == (bookingNumber));
  let show = data.shows.find(x => x.id == (booking.showId));
  let seats = booking.seats.map(function (seat) { return seat.number; });
  seats = seats.sort();
  let seatsString = seats.join(', ');
  $('.input').html(`
  <div class="row mt-5"><div class="offset-1 offset-sm-2 offset-md-3 col-10 col-sm-8 col-md-6"><div class="myBookings"><h1>Min bokning</h1>
  <h2>Bokningsnummer: ${booking.id}</h2>
  <h2>Film: ${show.film}</h2>
  <h2>Datum: ${show.date}</h2>
  <h2>Tid: ${show.time}</h2>
  <h2>Salong: ${show.auditorium}</h2>
  <h2>Platser: ${seatsString}</h2>
  <h2>Pris: ${booking.totalPrice} kr</h2>
  <button type='button'class="cancelBtn btn-success" onclick="showConfirmCancelModal()">Avboka</button>
  </div>
  </div>
  </div>
  `)
}
//Reads booking number from text input.
//Checks if booking number exists in bookings.json. 
//If it does, renderBookingInfo() is called with the argument
//bookingNumber.
//If it doesn't exist a modal informs user of this.
//If text input is empty a modal asks the user to enter booking number.
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

//Runs the bookingNumberNotFoundModal
function showNumberNotFoundModal() {
  $('document').ready(function () {
    $('#bookingNumberNotFoundModal').modal('show');
  }
  );
}
//Runs the noInputModal
function showNoInputModal() {
  $('document').ready(function () {
    $('#noInputModal').modal('show');
  }
  );
}

//Runs the bookingCancelledModal
function showBookingCancelledModal() {
  $('document').ready(function () {
    $('#bookingCancelledModal').modal('show');
  }
  );
}

//Runs the confirmCancelModal
function showConfirmCancelModal() {
  $('document').ready(function () {
    $('#confirmCancelModal').modal('show');
  }
  );
}
