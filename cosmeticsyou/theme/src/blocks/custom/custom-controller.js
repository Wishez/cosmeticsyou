// jshint esversion: 6

$('.preloader, .curtains').css({
	'opacity': 0,
	'zIndex': -10000
});

$(document).on('click', '.anchor, .address__item, .submitForm__agreement, .submitForm__conditions, #navStore .navItem__refer', function(e) {
  const url = $(this).attr('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click

// Тесты
if (!Modernizr.placeholder) {
   $.html5support();
   $.placeholder(); 
}

//= ../header/callback/callback.js