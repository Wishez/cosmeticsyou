// jshint esversion: 6
$("#navbarToggle").click(function (event) {
    $(event.target).focus();
});

$('#toggleButton').on('blur', function() {
  let screenWidth = window.innerWidth;
  if (screenWidth < 768) 
    $('#collapsable').collapse('hide');
}); // end blur