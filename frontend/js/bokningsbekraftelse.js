//Content for the bokningsbekraftelse view

//let booking = data.bookings.find(x => x.id === (data.bookings.length - 1));



function bokningsbekraftelse() {
  let booking = data.bookings[data.bookings.length - 1];
  let show = data.shows.find(x => x.id == (booking.showId));



  let seats = `<div> `;
  booking.seats.forEach(seat => {
      seats += `
        <hr>
              <h3> Stolsnummer : ${seat.number}</h3>
              <h4>  Typ  : ${seat.type} </h4>
              <h4> pris : ${seat.price}kr </h4>
        <hr>
              `;
  })
  seats += '</div>';



  //Add bokning inf in the report 
  $('main').html(`
<div class="booking"><u><h1>Bokningsbekräftelse</h1></u>
<h1>${show.film}<h1>
<h3>${show.auditorium}<br>${show.date}<br>Kl: ${show.time}<br>Stolsnummer:</h3>
<!-- //  -->
${seats}
<br>
<h2>Totalpris: ${booking.totalPrice}kr</h2>
<h2>Bokningsnummer: ${booking.id}</h2>
</div>
  `);

}