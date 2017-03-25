let $checkReady = $('#checkReady');

$checkReady.checkboxradio();

$(document).on('click', '#checkReady', () => {
  let $subButton = $('#subButton');
  console.log($checkReady.prop('checked'));
  if ($checkReady.prop('checked'))
    $subButton.prop('disabled', false);
  else 
    $subButton.prop('disabled', true);  
});// end click

// Автозаполнение поля города и области

//https://maps.googleapis.com/maps/api/place/autocomplete/json?input=Vict&types=(cities)&language=pt_BR&key=YOUR_API_KEY
