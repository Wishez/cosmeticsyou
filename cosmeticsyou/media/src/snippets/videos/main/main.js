cmt.showVideosPage = () => {
  r.getVideosPage().done(videosPage => {
    select.$main.html(videosPage);
  });
};