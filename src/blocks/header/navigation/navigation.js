// jshint esversion: 6
$("#navbarToggle").click(function (event) {
    $(event.target).focus();
});

$('#toggleButton').on('blur', function() {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) 
    $('#collapsable').collapse('hide');
}); // end blur

$(document).on('click', '#btnTop' , function() {
  let $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 500,);
  
  return false;
});// end click
let $btnTop = $('#btnTop');
  
$btnTop.hide();
$(window).scroll(function(){
  if ($(this).scrollTop() < 100) {
    $btnTop.fadeOut(1000);
  } else {
    $btnTop.fadeIn(1000);
  }  
});// end scroll