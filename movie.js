$(document).ready(function(){
    
for (var i = 0; i < movie.length; i++) {
	var img = movie[i].image;
    var moviename = movie[i].name;
    var moviecontent = movie[i].content;
    var year= movie[i].year;
    
   

	$(".allmovies").append(`
 	
        
          <div class=" eachmovie col-lg-6 p-5">  
            <div class=" movieinfo">
               <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12"> 
                  <div > 
                     <img src=${img} class="img-fluid border border-white" > 
                     
                  </div>
               </div>
               <div class="col-lg-7 col-md-7 col-sm-12 col-xs-12 movie-deatil ">
                  
                     <h5 class="name">
                        <a class="nav-link" href="#">
                           ${moviename}
                        </a>
                     </h5>
                     <span class="text-white">${year}</span>
                     
                     
                  
                  <div class="movie description">
                     <p class="text-white" >${moviecontent}</p>
                  </div>
                  <div class="text-success like d-flex justify-content-end"><h4>like</h4>
                     <button class="btn text-success bg-black like-btn" >
                     <i class="glyphicon glyphicon-thumbs-up clicks d-flex justify-content-end text-success bg-black"></i></button>
                     <div class="rounded-circle text-white bg-success p-3 clicks-number">0</div>
                     
                  </div>
                  
               </div>
            </div>
         </div>  
         
        `);

    }


//likebutton
    $('.like-btn').on('click', function() {
        var x = $(this).parent().find(".clicks-number").text();
        x++
        $(this).parent().find(".clicks-number").text(x);

    /*$(this).siblings().child().find(".clicks").html(function(m, val) { return val*1+1 });*/
    });
/*    console.log($(this).parent().find(".clicks-number").text())*/

});   
    








