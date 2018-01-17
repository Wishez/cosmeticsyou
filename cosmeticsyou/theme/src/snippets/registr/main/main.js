// jshint jsversion: 6s
// // Обновляет каждое слово с большой буквы.
// function _titleCase = ($selector, str) => {
//   str = str
//      .toLowerCase()
//      .split(' ')
//      .map( function(word) {
//        return word.replace(word.charAt(0), word.charAt(0).toUpperCase());
//      })
//      .join(' ');
    
//   $selector.val(str);
// };
// // Обновляет поле без пробелов, с большой буквы одно слово.
// let fixText = val => {
//     let arr = val.split(' ');
    
//     arr[0] = arr[0][0].toUpperCase() +
//              arr[0].slice(1);
    
//     return arr[0];
// };

// function _updateField = ($field, val) => {
//   if (val.length !== 0)
//     $field.val(fixText(val))
// };