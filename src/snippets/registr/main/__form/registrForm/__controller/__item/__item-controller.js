// jshint esversion: 6

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
// Расскоментируй, если  хочешь ограничить ввод поля одим словом.
//  updateField($region, regionVal);
}); // end input changeproperty

$(document).on('click', '#checkInternational', () => {
  let $checkInternational = $('#checkInternational'),
      $pasportData = $('#pasportData'),
      mask = '0000 - 000000';
  
  if ($checkInternational.prop('checked'))
    $pasportData.unmask(mask);
  else 
    $pasportData.mask(mask);
});// end click


// Скрываем одно из полей, которое не нужно.
//$(document).on('input changepropery', '#city', (e) => {
//  let $region = $('#region'),
//      $city = $('#city'),
//      $controller = $region.parent();
//  
//  if (e.target.val !== '') {
//    $city.attr('required', true);
//    $region.attr('required', false);
//    $controller.hide('fast');
//  }
//  if ($city.val() === '')
//    $controller.show('fast');
//  
//  let input = document.getElementById('city'),
//  options = {
//  types: ['(cities)'],
//  componentRestrictions: {country: 'ru'}
//},
//
//autocomplete = new google.maps.places.Autocomplete(input, options);
//});
//
//$(document).on('input changepropery', '#region', (e) => {
//  let $city = $('#city'),
//      $region = $('#region'),
//      $controller = $city.parent();
//  
//  if (e.target.val !== '') {
//    $('#region').attr('required', true);
//    $city.attr('required', false);
//    $controller.hide('fast');
//  }
//
//  if ($region.val() === '')
//    $controller.show('fast');   
//});         
//               