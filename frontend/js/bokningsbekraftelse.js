function bokningsbekraftelse() {
  let booking = data.bookings[data.bookings.length - 1];
  let show = data.shows.find(x => x.id == (booking.showId));



  let seats = `<div> `;
  booking.seats.forEach(seat => {
    seats += `
        <hr>
              <h3> Stolsnummer : ${seat.number}</h3>
              <h4>  Typ  : ${seat.type} </h4>
              <h4> Pris : ${seat.price} kr </h4>
        <hr>
              `;
  })
  seats += '</div>';


  //Add bokning inf in the report 
  $('main').html(`
  <div class="row">
    <div class="offset-1 offset-sm-2 offset-md-3 offset-xxl-4 col-10 col-sm-8 col-md-6 col-xxl-4">
      <div class="booking"><h1>Boknings&shy;bekräftelse</h1><br>
        <h2>${show.film}<h2>
        <h4>${show.auditorium}<br>${show.date}<br>Kl: ${show.time}<br></h4>
        <!-- //  -->
        ${seats}
        <br>
        <h2>Totalpris: ${booking.totalPrice} kr</h2>
        <h3>Bokningsnummer: ${booking.id}</h3>
      </div>
    </div>
  </div>
  `);
  window.scrollTo(0, 0);
}