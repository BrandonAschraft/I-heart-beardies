$(document).ready(function() {
  var $pics = "#slideshow div";
   $($pics).hide();
  setInterval(function() {
    $($pics).each(function() {
      $(this).fadeIn(2000).delay(3000).fadeOut(2000);
      $(".wait").delay(5000);
    });
  }, 1000);
});

console.log("test");
