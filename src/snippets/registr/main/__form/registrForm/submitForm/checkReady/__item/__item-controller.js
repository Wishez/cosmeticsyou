$('#subButton').prop('disabled', true);
$(document).on('click', '#checkReady', () => {
  let $checkReady = $('#checkReady');
  let $subButton = $('#subButton');

  if ($checkReady.prop('checked'))
    $subButton.prop('disabled', false);
  else 
    $subButton.prop('disabled', true);  
});// end click

// Автозаполнение поля города и области