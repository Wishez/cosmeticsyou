// jshint esversion: 6
let cmt = {},
    select = {
      $main: $('#mainContent')
    },
    requests;

cmt.showLoading = elem => {
  let img = '<img src="/media/my/img/loader/ajax-loader.svg" alt="" style="margin: 50px auto; display: block;" />';
  
  $(elem).html(img);
};

cmt.switchMenu = elem => {
  $('.navItem').removeClass('active');
  $('#navHome').removeClass('active');
  
  $(elem).addClass('active');
};

// Запросы страничек.

requests = () => {
  let home = '/media//my/snippets/home/home.html',
      shares = '/media//my/snippets/shares/shares.html',
      business = '/media//my/snippets/opportunities/business.html',
      registr = '/media//my/snippets/registr/registr.html',
      videos = '/media//my/snippets/videos/videos.html',
      contacts = '/media//my/snippets/contacts/contacts.html';
  
  return {
    getHomePage: () => $.get(home),
    getSharesPage: () => $.get(shares),
    getBusinessPage: () => $.get(business),
    getRegistrPage: () => $.get(registr),
    getVideosPage: () => $.get(videos),
    getContactsPage: () => $.get(contacts)
  };
};

let r = requests();