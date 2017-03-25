//let input = document.getElementById('#city'),
//  options = {
//  types: ['(cities)'],
//  componentRestrictions: {country: 'ru'}
//},
//
//autocomplete = new google.maps.places.Autocomplete(input, options);

//ctm.getAutocomlete = (params) => {
//  /* Спецификация объекта
//    params = {
//       type : тип данных, который нужно получить(
//        (countries),
//        (cities),
//        (geocode(адреса))
//       ),
//       val : значение ввода
//    };
//  */
//  
//  let app = 'https://maps.googleapis.com/maps/api/place/autocomplete/json?',
//      types = 'types=' + params.type + '&',
//      key = 'key=AIzaSyCGILpaWvgIblfIgWdlvViQcprMnJtXgck',
//      language = 'language=ru&',
//      input = 'input=' + params.val + '&';
//  
//  let url = app + input + types + language + key;
//  
//  $.getJSON(url, (response) => {
//    
//  }); // end getJSON
//};// end getJSON