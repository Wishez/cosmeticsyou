$(document).on('click', '#checkReady', () => {
  let $checkReady = $('#checkReady');
  let $subButton = $('#subButton');
  console.log($checkReady.prop('checked'));
  if ($checkReady.prop('checked'))
    $subButton.prop('disabled', false);
  else 
    $subButton.prop('disabled', true);  
});// end click

// Автозаполнение поля города и области