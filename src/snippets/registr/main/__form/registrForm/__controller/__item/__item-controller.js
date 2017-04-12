// jshint esversion: 6

// Форматирование первой буквы слова, с возможностью добавлять ещё одно слово через дефис, но не через пробел.
$(document).on('input changepropery', '#id_last_name, #id_first_name, #id_middle_name', (e) => {
  let $firstName = $('#id_first_name'),
      $lastName = $('#id_last_name'),
      $middleName = $('#id_middle_name'),
      fNameVal = $firstName.val(),
      lNameVal = $lastName.val(),
      mNameVal= $middleName.val();
  
  $cmt.updateField($firstName, fNameVal);
  $cmt.updateField($lastName, lNameVal);
  $cmt.updateField($middleName, mNameVal);
}); // end input changeproperty

// Простое форматирование в верхний регистр первых букв
$(document).on('input changepropery', ' #id_street, #id_region, #id_city', (e) => {
let $street = $('#id_street'),
    $city = $('#id_city'),
    $region = $('#id_region'),
    streetVal = $street.val(),
    cityVal = $city.val(),
    regionVal = $region.val();
  
  $cmt.titleCase($region, regionVal);
  $cmt.titleCase($city, cityVal);
  $cmt.titleCase($street, streetVal);
});

$(document).on('click', '#id_citizenship', () => {
  let $checkInternational = $('#id_citizenship'),
      $passportData = $('#id_passport_data'),
      $phoneNumber = $('#id_phone_number'),
      passportMask = '0000 - 000000',
      ruTelMask = '+7 (000) 000 00 00',
      anotherTelMask = '+000000000000000';
  
  if ($checkInternational.prop('checked')) {
    $passportData.unmask(passportMask);
    
    $phoneNumber.mask(anotherTelMask);
  } else {
    $passportData.mask(passportMask);
    $phoneNumber.unmask(anotherTelMask);
    $phoneNumber.mask(ruTelMask);
  } 
});// end click

$(document).on('click', '#id_empty_middle_name', (e) => {
  let $checkboxEmptyField = $('#id_empty_middle_name'),
      $middleName = $('#id_middle_name'),
      $controller = $middleName.parent();
  
  if ($checkboxEmptyField.prop('checked')) {
    $controller.hide('fast');
  } else {
    $controller.show('fast');   
  }
}); // end click      