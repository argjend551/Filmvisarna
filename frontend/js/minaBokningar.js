let bookingNumber;

function minaBokningar() {
  $('main').html(`
  <div class="container-fluid myBookingPage">
  <h1>Mina Bokningar</h1>
  <h2><lable>Skriv in ditt bokningsnummer:</lable></h2>
<input type="text" id="text" name="name" placeholder="Bokningsnummer..." />
<input type="button" id="text_value" value="Bekräfta" onclick="setBookingNumber()"/>
<div class="input"></div>   
</div>
   `);
}

async function cancelBooking(bookingId) {
  let bookings = data.bookings;
  console.log(bookings);
  let bookingToCancel = bookings.find(function (booking) {
    return booking.id === bookingId;
  });
  console.log('bookingToCancel' + bookingToCancel);
  let bookingToCancelIndex = bookings.indexOf(bookingToCancel);
  console.log('bookingToCancelIndex' + bookingToCancelIndex);
  let cancelledBooking = bookings.splice(bookingToCancelIndex, 1);
  console.log('bookings' + bookings);
  await JSON._save('bookings', data.bookings);
  alert(" Din bokning med bokningsnummer " + bookingNumber + " är nu avbokad.");
}

function pressCancellationButton() {
  console.log(bookingNumber);
  cancelBooking(bookingNumber);
}

function renderBookingInfo(bookingNumber) {
  console.log('bokningsnummer' + bookingNumber);
  let booking = data.bookings.find(x => x.id == (bookingNumber));
  let show = data.shows.find(x => x.id == (booking.showId));
  console.log(show.film);
  $('.input').html(`
  <div class="myBookings"><h1>Min bokning</h1>
  <h2>Bokningsnummer: ${booking.id}</h2>
  <h2>Film: ${show.film}</h2>
  <h2>Datum: ${show.date}</h2>
  <h2>Tid: ${show.time}</h2>
  <h2>Salong: ${show.auditorium}</h2>
  <div><button type='button'class="cancelBtn btn-success" onclick="pressCancellationButton()">Avboka</button></div>
  </div>
  `)
}
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
    alert("Bokningsnumret är " + bookingNumber);
  }
  else {
    if (bookingNumber == "") {
      alert("Skriv in ditt bokningsnummer")
    }
    else {
      bookingNumber = "";
      alert("Bokningsnumret hittas inte");
    }
  }
}
