// cmt.showHomePage = () => {
//   r.getHomePage().done(homePage => {
//     // Отображение страницы
//     select.$main.html(homePage);
//     // Иницилизация слайдеров
    
//     // Главная карусель
//     $('.fadeSlider').slick({
//       dots: true,
//       infinite: true,
//       speed: 500,
//       fade: true,
//       cssEase: 'linear',
//       autoplay: true,
//       autoplaySpeed: 2000,
//       responsive: [{
//             breakpoint: 768,
//             settings: {
//               arrows: false
//             }  
//           }
//         ]
//       });
    
//       // В секции каталога
//       $('.catalogsStock').slick({
//         lazyLoad: 'ondemand',
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         arrows: true,
//         responsive: [{
//           breakpoint: 768,
//           settings: {
//              slidesToShow: 2,
//           }  
//         }, {
//           breakpoint: 991,
//           settings: {
//              slidesToShow: 3,
//           }
//         }]
//       });
//   }); // end getHomePage
// };// end showHomePage