// jshint esversion: 6
let $toggleButton = $("#toggleButton");

$toggleButton.click((e) => {
    $(e.target).focus();
}); // end click

$toggleButton.on('blur', (e) => {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) 
    $('#collapsable').collapse('hide');
}); // end blur

$toggleButton.on('click', (e) => {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) 
    $('#navOpportunities').addClass('open');
});


$(document).on('click', '#btnTop' , (e) =>  {
  let $this = $(this);
  $('html, body').stop().animate({
    scrollTop: $($this.attr('href')).offset().top
  }, 500);
  
  return false;
});// end click
let $btnTop = $('#btnTop');


// Кнопка, ведущая наверх
$btnTop.hide();
$(window).scroll((e) => {
  if ($(this).scrollTop() < 100) {
    $btnTop.fadeOut(1000);
  } else {
    $btnTop.fadeIn(1000);
  }  
});// end scroll
