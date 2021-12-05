//Content for the bokningsbekraftelse view

//let booking = data.bookings.find(x => x.id === (data.bookings.length - 1));

function bokningsbekraftelse() {
  let booking = data.bookings[data.bookings.length - 1];
  let show = data.shows.find(x => x.id == (booking.showId));
  $('main').html(`
  <div class="container-fluid">
  <div class="booking"><u><h1>Boknings&shy;bekräftelse</h1></u>
  <h1>${show.film}<h1>
  <h3>${show.auditorium}<br>${show.date}<br>Kl: ${show.time}<br>Stolsnummer: ${booking.seats}</h3>
  <br>
  <h2>Bokningsnummer: ${booking.id}</h2>
  </div></div>
    `);

}