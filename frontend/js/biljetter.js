//Content for the ticket page
function biljetter() {

     $('main').html(`
   <div id="span3">
<select id="mySelect">
     <option value="0">Välj film</option>
     <option value="1">White Chicks</option>
     <option value="2">Deadpool</option>
     <option value="3">Tio Orsaker Att Hata Dig</option>
     <option value="4">Bad Boys</option>
     <option value="5">No Time to Die</option>
     <option value="6">UPP</option>
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