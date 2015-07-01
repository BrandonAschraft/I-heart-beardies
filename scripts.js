$(document).ready(function() {
  var $pics = "#slideshow div";
   $($pics).hide();
   setInterval(function() {
    $($pics).each(function(index) {
      $(this).fadeIn(2000).delay(3000).fadeOut(2000);
         $(".wait").delay(5000); 
      
    });
   },0);
});

 



//********* PETCARE html BUTTONS*******

// 1 Hide text elements
var hidden= $('.hide');

 hidden.hide();
 

// 2 show button spans for 'enclosures', 'lighting/Heat', 'Water/Bathing'
            // 2a DO THIS FOR ALL TOPICS IN EACH SECTION

$("#enclosures").append('<button class="textReveal">ENCLOSURES</button>');
$("#lighting").append('<button class="textReveal">LIGHTING AND HEAT</button>');
$("#water").append('<button class="textReveal">WATER</button>');
$("#overview").append('<button class="textReveal">OVERVIEW</button>');
$("#veggies").append('<button class="textReveal">FRUITS AND VEGETABLES</button>');
$("#bugs").append('<button class="textReveal">FEEDER ANIMALS</button>');
$("#nutrition").append('<button class="textReveal">NUTRITION INFORMATION</button>');
$("#notFood").append('<button class="textReveal">FOODS TO AVOID</button>');
$("#cohabitation").append('<button class="textReveal">COHABITATION</button>');
// 3 on toggle, show/hide text
$(".textReveal").click(function(){
    $(this).parent().next().slideToggle();
  });
  




