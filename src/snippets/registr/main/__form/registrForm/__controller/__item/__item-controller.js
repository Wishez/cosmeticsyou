// jshint esversion: 6
$('#telephone').mask('+7 (000) 000 00 00');
$('#pasportData').mask('0000 - 000000');

// Можно добавить и область #region
$(document).on('input changepropery', '#lastName, #firstName, #middleName, #city', (e) => {
  let $firstName = $('#firstName'),
      $lastName = $('#lastName'),
      $middleName = $('#middleName'),
      $city = $('#city'),
      $region = $('#region'),
      fNameVal = $firstName.val(),
      lNameVal = $lastName.val(),
      mNameVal= $middleName.val(),
      cityVal = $city.val(),
      regionVal = $region.val();

  let fixText = val => {
    let arr = val.split(' ');
    
    arr[0] = arr[0][0].toUpperCase() +
             arr[0].slice(1);
    
    return arr[0];
  };
  
  // Обновляем поля.
  var updateField = ($field, val) => {
    if (val.length !== 0)
      $field.val(fixText(val))
  };
  
  updateField($firstName, fNameVal);
  updateField($lastName, lNameVal);
  updateField($middleName, mNameVal);
  updateField($city, cityVal);
  updateField($region, regionVal);
}); // end input changeproperty

// This example displays an address form, using the autocomplete feature
// of the Google Places API to help users fill in the information.

//var placeSearch, autocomplete;
//var componentForm = {
//  street_number: 'short_name',
//  route: 'long_name',
//  locality: 'long_name',
//  administrative_area_level_1: 'short_name',
//  country: 'long_name',
//  postal_code: 'short_name'
//};
//
//function initAutocomplete() {
//  // Create the autocomplete object, restricting the search to geographical
//  // location types.
//  autocomplete = new google.maps.places.Autocomplete(
//      /** @type {!HTMLInputElement} */(document.getElementById('')),
//      {types: ['geocode']});
//
//  // When the user selects an address from the dropdown, populate the address
//  // fields in the form.
//  autocomplete.addListener('place_changed', fillInAddress);
//}
//
//// [START region_fillform]
//function fillInAddress() {
//  // Get the place details from the autocomplete object.
//  var place = autocomplete.getPlace();
//
//  for (var component in componentForm) {
//    document.getElementById(component).value = '';
//    document.getElementById(component).disabled = false;
//  }
//
//  // Get each component of the address from the place details
//  // and fill the corresponding field on the form.
//  for (var i = 0; i < place.address_components.length; i++) {
//    var addressType = place.address_components[i].types[0];
//    if (componentForm[addressType]) {
//      var val = place.address_components[i][componentForm[addressType]];
//      document.getElementById(addressType).value = val;
//    }
//  }
//}
//// [END region_fillform]
//
//// [START region_geolocation]
//// Bias the autocomplete object to the user's geographical location,
//// as supplied by the browser's 'navigator.geolocation' object.
//function geolocate() {
//  if (navigator.geolocation) {
//    navigator.geolocation.getCurrentPosition(function(position) {
//      var geolocation = {
//        lat: position.coords.latitude,
//        lng: position.coords.longitude
//      };
//      var circle = new google.maps.Circle({
//        center: geolocation,
//        radius: position.coords.accuracy
//      });
//      autocomplete.setBounds(circle.getBounds());
//    });
//  }
//}
// [END region_geolocation]


// Скрываем одно из полей, которое не нужно.
$(document).on('input changepropery', '#city', (e) => {
  let $region = $('#region'),
      $city = $('#city'),
      $controller = $region.parent();
  
  if (e.target.val !== '') {
    $city.attr('required', true);
    $region.attr('required', false);
    $controller.hide('fast');
  }
  if ($city.val() === '')
    $controller.show('fast');
  
  let input = document.getElementById('city'),
  options = {
  types: ['(cities)'],
  componentRestrictions: {country: 'ru'}
},

autocomplete = new google.maps.places.Autocomplete(input, options);
});

$(document).on('input changepropery', '#region', (e) => {
  let $city = $('#city'),
      $region = $('#region'),
      $controller = $city.parent();
  
  if (e.target.val !== '') {
    $('#region').attr('required', true);
    $city.attr('required', false);
    $controller.hide('fast');
  }

  if ($region.val() === '')
    $controller.show('fast');   
});         
               