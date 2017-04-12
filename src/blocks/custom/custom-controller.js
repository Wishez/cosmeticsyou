// jshint esversion: 6
$(document).on('click', '.anchor, .address__item, .submitForm__agreement, .submitForm__conditions, #navStore .navItem__refer', function(e) {
  let url = $(this).attr('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click

//$(document).on('click', '.navItem', () => {
//  $cmt.switchMenu(this);
//});

// Тесты
if (!Modernizr.placeholder) {
   $.html5support();
   $.placeholder();
}