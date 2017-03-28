// jshint esversion: 6
$(document).on('click', '.officialSite__refer, .address__item, .submitForm__agreement, .submitForm__conditions, #navStore .navItem__refer', function(e) {
  let url = $(this).attr('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click

$(document).on('click', '.navItem', function() {
  $cmt.switchMenu(this);
  
  return false;
}); // end click

// Тесты
if (!Modernizr.placeholder) {
   $.html5support();
   $.placeholder();
}