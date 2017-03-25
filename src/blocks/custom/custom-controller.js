// jshint esversion: 6
$(document).on('click', '.officialSite__refer, .address__item, .submitForm__agreement, .submitForm__conditions', (e) =>  {
  let url = $(this).attr('href');
  
  window.open(url);
  
  e.preventDefault();
}); // end click