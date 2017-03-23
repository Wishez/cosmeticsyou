$('.catalogsStock').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  responsive: [{
    breakpoint: 768,
    settings: {
       slidesToShow: 2,
    }  
  }, {
    breakpoint: 991,
    settings: {
       slidesToShow: 3,
    }
  }]
});