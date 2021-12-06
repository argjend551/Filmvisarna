//Content for the bokningsbekraftelse view

//let booking = data.bookings.find(x => x.id === (data.bookings.length - 1));



function bokningsbekraftelse() {
  let booking = data.bookings[data.bookings.length - 1];
  let show = data.shows.find(x => x.id == (booking.showId));



  let seats = `<div> `;
  booking.seats.forEach(seat => {
      seats += `
        <hr>
              <h3> Seat Number : ${seat.number}</h3>
              <h4>  Type  : ${seat.type} </h4>
              <h4> price : ${seat.price} </h4>
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
<h2>Total price: ${booking.totalPrice}</h2>
<h2>Bokningsnummer: ${booking.id}</h2>
</div>
  `);

}