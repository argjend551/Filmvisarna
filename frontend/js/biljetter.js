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




     <table class="table">
          <thead>
               <tr>
                    <th scope="col">Film</th>
                    <th scope="col">Datum</th>
                    <th scope="col">Salong</th>

               </tr>
          </thead>
          <tbody>
               <th class="film"></th>
               <th class="datum"></th>
               <th class="salong"></th>

          </tbody>
     </table>


</div>


 <div class="cinema">

          <div class="col-12 col-sm-6 col-lg-3">
               <div class="row1"></div>
               <div class="row2"></div>
               <div class="row3"></div>
               <div class="row4"></div>
               <div class="row5"></div>
               <div class="row6"></div>
               <div class="row7"></div>
               <div class="row8"></div>
          </div>
          <button type="button" class="btn btn-success">Book</button>

     </div>


  `);
  filterfilm();
  displayFilms();
}