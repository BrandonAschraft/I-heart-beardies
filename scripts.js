/********Nav Dropdown for Small/Medium screens****/
var $select=$('<select class="mySelect"></select>');

$(".page_list").append($select);
$(".page_list a").each(function(){
  var $anchor= $(this);
  var $option= $('<option class="myOption"></option>');
  if($anchor.parent().hasClass("selected")){
    $option.prop("selected", true)
  }
  $option.val($anchor.attr("href"));
  $option.text($anchor.text());
  $select.append($option);
});

$(document).on("change",".mySelect", function(){
window.location = $select.val();
});


/*********Slideshow***********/
$(document).ready(function(){
  $(".slidesDiv img :gt(0)").hide();
  setInterval(function(){
    $(".slidesDiv :first-child").fadeOut(2000).next("img").fadeIn(2000).end().appendTo(".slidesDiv");
  },5000);
});

/*************Kiosk****************/
var colorSelect= $("#colorOption");
// colorSelect.color= $("option :selected").color;

colorSelect.change(function () {
    var color = $(this).children(":selected").attr("class");
    colorSelect.css('color',color);
});






//********* PETCARE html BUTTONS*******

// 1 Hide text elements
var hidden= $('.hide');
hidden.hide();

$(".textReveal").click(function(){
    $(this).parent().next().slideToggle();
  }); 

// 2 show button spans for 'enclosures', 'lighting/Heat', 'Water/Bathing'
            // 2a DO THIS FOR ALL TOPICS IN EACH SECTION
//Button names could go into the SPAN, then the JS could make this an "on click (), append this child" event. It would then be scalable.
// $("#enclosures").append('<button class="textReveal">ENCLOSURES</button>');
// $("#lighting").append('<button class="textReveal">LIGHTING AND HEAT</button>');
// $("#substrate").append('<button class="textReveal">SUBSTRATE AND CLEANING</button>');
// $("#water").append('<button class="textReveal">WATER</button>');
// $("#furniture").append('<button class="textReveal">FURNITURE</button>');
// $("#overview").append('<button class="textReveal">OVERVIEW</button>');
// $("#veggies").append('<button class="textReveal">FRUITS AND VEGETABLES</button>');
// $("#bugs").append('<button class="textReveal">FEEDER ANIMALS</button>');
// $("#nutrition").append('<button class="textReveal">NUTRITION INFORMATION</button>');
// $("#notFood").append('<button class="textReveal">FOODS TO AVOID</button>');
// $("#cohabitation").append('<button class="textReveal">COHABITATION</button>');
// $("#brumation").append('<button class="textReveal">BRUMATION</button>');
// $("#bodyLanguage").append('<button class="textReveal">BODY LANGUAGE</button>');
// $("#handling").append('<button class="textReveal">HANDLING YOUR BEARDIE</button>');
// 3 on toggle, show/hide text

  




