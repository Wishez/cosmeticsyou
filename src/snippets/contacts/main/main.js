// jshint esversion: 6
cmt.showContactsPage = () => {
  let map = '<iframe class="map__item"  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8966.279574741344!2d37.726095!3d55.818067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b53450cf0645b9%3A0x869f26e9d7ad24d3!2z0JjQstCw0L3RgtC10LXQstGB0LrQsNGPINGD0LsuLCAxM9C6MSwg0JzQvtGB0LrQstCwLCDQoNC-0YHRgdC40Y8sIDEwNzE1MA!5e0!3m2!1sru!2sru!4v1490693223242" frameborder="0" allowfullscreen></iframe>';
  
  r.getContactsPage().done(contactsPage => {
    select.$main.html(contactsPage);
    
    
    $('.map').html(map);
  });
};