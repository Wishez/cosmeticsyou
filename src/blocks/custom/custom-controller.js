// jshint esversion: 6
$(document).on('click', '.officialSite__refer, .address__item, .submitForm__agreement, .submitForm__conditions', (e) =>  {
  let url = $(this).prop('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click

//$cmt.showLoading('#mainContent');

$(document).on('click', '.navItem', function() {
  $cmt.switchMenu(this);
  
  return false;
}); // end click