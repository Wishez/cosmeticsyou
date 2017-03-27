// jshint esversion: 6
let cmt = {},
    select = {
      $main: $('#mainContent')
    };


cmt.showLoading = elem => {
  let img = '<img src="../img/loader/ajax-loader.svg" alt="" style="margin: 50px auto; display: block;" />';
  
  $(elem).html(img);
};

cmt.switchMenu = elem => {
  $('.navItem').removeClass('active');
  
  $(elem).addClass('active');
};

