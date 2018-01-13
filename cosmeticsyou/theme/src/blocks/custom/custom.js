import NormalizeWheel from './../../js/lib/normwheel.js';

let cmt = (function() {
  return {};
}());

$(function() {
  $('.preloader, .curtains').css({
    'opacity': 0,
    'zIndex': -10000
  });
  const $mainSlider = $('#mainSlider');

  $mainSlider.on('wheel', '.owl-stage', function(e) {
    const norm = NormalizeWheel(e.originalEvent);

    if (norm.spinY > 0) {
      $mainSlider.trigger('next.owl');
    } else {
      $mainSlider.trigger('prev.owl');
    }

    e.preventDefault();
  });

  $mainSlider.owlCarousel({
  	loop: true,
    autoplay: true,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    items: 1,
    smartSpeed: 1000,
    autoplaySpeed: 1000
  });

  $(document).on('click', '.not-follow', function(e) {
	  const url = $(this).attr('href');
	  
	  window.open(url);
	  
	  e.preventDefault();
  }); // end click
});

// if (!Modernizr.placeholder) {
//    $.html5support();
//    $.placeholder(); 
// }
// select = {
//   $main: $('#mainContent')
// };
// requests;

// cmt.showLoading = elem => {
//   let img = '<img src="/static/cosmeticsyou/img/loader/ajax-loader.svg" alt="" style="margin: 50px auto; display: block;" />';
  
//   $(elem).html(img);
// };

// cmt.switchMenu = elem => {
//   $('.navItem').removeClass('active');
//   $('#navHome').removeClass('active');
  
//   $(elem).addClass('active');
// };

// Запросы страничек.

// requests = () => {
//   let home = '/static/cosmeticsyou/snippets/home/home.html',
//       shares = '/static/cosmeticsyou/snippets/shares/shares.html',
//       business = '/static/cosmeticsyou/snippets/opportunities/business.html',
//       registr = '/static/cosmeticsyou/snippets/registr/registr.html',
//       videos = '/static/cosmeticsyou/snippets/videos/videos.html',
//       contacts = '/static/cosmeticsyou/snippets/contacts/contacts.html';
  
//   return {
//     getHomePage: () => $.get(home),
//     getSharesPage: () => $.get(shares),
//     getBusinessPage: () => $.get(business),
//     getRegistrPage: () => $.get(registr),
//     getVideosPage: () => $.get(videos),
//     getContactsPage: () => $.get(contacts)
//   };
// };

// let r = requests();
