//Content for the ticket page
function biljetter() {

     $('main').html(`
   <div id="span3">
<select id="mySelect">
     <option value="0">Välj film</option>
     <option value="1">${data.filmer[0].title}</option>
     <option value="2">${data.filmer[2].title}</option>
     <option value="3">${data.filmer[1].title}</option>
     <option value="4">${data.filmer[4].title}</option>
     <option value="5">${data.filmer[3].title}</option>
     <option value="6">${data.filmer[5].title}</option>
</select>

<select id="mySelect1">
 <option value="0">Ålder</option>
     <option value="1">7-14</option>
     <option value="2">15+</option>

</select>


     <table class="table table-hover">
          <thead>
               <tr>
                    <th scope="col">Film</th>
                    <th scope="col">Datum</th>
                     <th scope="col">Tid</th>
                    <th scope="col">Salong</th>

               </tr>
          </thead>
          <tbody class="table">
         
          </tbody>
     </table>


</div>


 <div class="cinema" >
<div class="col-12" >
          <div class="all-seats">
               
          </div>
          <button type="button" disabled class="btn btn-success btn3">Boka</button>
</div>
     </div>


  `);
     filterfilm();
     displayFilms();
}