function addMasksAndStylesToFields() {
  $('#telephone').mask('+7 (000) 000 00 00');
  $('#pasportData').mask('0000 - 000000');
  $(':input[type="checkbox"]').checkboxradio()
}