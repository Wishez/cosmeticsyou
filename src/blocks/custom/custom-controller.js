// jshint esversion: 6

$('.preloader').fadeOut(1000);
$('.curtains').fadeOut(1200);

$(document).on('click', '.anchor, .address__item, .submitForm__agreement, .submitForm__conditions, #navStore .navItem__refer', function(e) {
  let url = $(this).attr('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click

// Тесты
if (!Modernizr.placeholder) {
   $.html5support();
   $.placeholder(); 
}

//= ../header/callback/callback.js