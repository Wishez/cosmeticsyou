// jshint esversion: 6
cmt.showBusinessPage = () => {
  r.getBusinessPage().done(businessPage => {
    select.$main.html(businessPage);
  });
};