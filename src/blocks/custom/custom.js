// jshint esversion: 6
let cmt = {},
    select = {
      $main: $('#mainContent')
    },
    requests;

cmt.showLoading = elem => {
  let img = '<img src="../img/loader/ajax-loader.svg" alt="" style="margin: 50px auto; display: block;" />';
  
  $(elem).html(img);
};

cmt.switchMenu = elem => {
  $('.navItem').removeClass('active');
  
  $(elem).addClass('active');
};

// Запросы страничек.

requests = () => {
  let that = this,
      home = '../snippets/home/home.html',
      shares = '../snippets/shares/shares.html',
      business = '../snippets/opportrunities/business.html',
      registr = '../snippets/registr/registr.html',
      videos = '../snippets/videos/videos.html',
      contacts = '../snippets/contacts/contacts.html';
  
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