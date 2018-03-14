// 1. Open cache
// 2. Cache files
// 3. Confirm whether all the requored assets are cached or not

var CACHE_NAME = 'cosmeticsyou-cache-v1';
var staticCssPath = '/static/cosmeticsyou/css/';
var staticJsPath = '/static/cosmeticsyou/js/';
var staticFontPath = '/static/cosmeticsyou/fonts/'; 
var staticImagesPath = '/static/cosmeticsyou/img/'; 
var icons = staticImagesPath + 'icons/';

var urlsToCache = [
  staticCssPath + 'main.css',
  staticCssPath + 'fonts.css',

  staticJsPath + 'main.js',
  staticJsPath + 'registration.js',
  staticJsPath + 'media.js',

  staticFontPath + 'Politica/Politica.eot',
  staticFontPath + 'Politica/Politica.ttf',
  staticFontPath + 'Politica/Politica.woff',
  staticFontPath + 'Politica/Politica.woff2',
  staticFontPath + 'Politica/Politica.svg',

  staticFontPath + 'Politica/Politica-Bold.eot',
  staticFontPath + 'Politica/Politica-Bold.ttf',
  staticFontPath + 'Politica/Politica-Bold.woff',
  staticFontPath + 'Politica/Politica-Bold.woff2',
  staticFontPath + 'Politica/Politica-Bold.svg',

  staticFontPath + 'Politica/Politica-ExtraBold.eot',
  staticFontPath + 'Politica/Politica-ExtraBold.svg',
  staticFontPath + 'Politica/Politica-ExtraBold.ttf',
  staticFontPath + 'Politica/Politica-ExtraBold.woff',
  staticFontPath + 'Politica/Politica-ExtraBold.woff2',

  staticFontPath + 'Roboto/Roboto-Regular.eot',
  staticFontPath + 'Roboto/Roboto-Regular.svg',
  staticFontPath + 'Roboto/Roboto-Regular.ttf',
  staticFontPath + 'Roboto/Roboto-Regular.woff',
  staticFontPath + 'Roboto/Roboto-Regular.woff2',

  staticFontPath + 'Roboto/Roboto-Bold.eot',
  staticFontPath + 'Roboto/Roboto-Bold.svg',
  staticFontPath + 'Roboto/Roboto-Bold.ttf',
  staticFontPath + 'Roboto/Roboto-Bold.woff',
  staticFontPath + 'Roboto/Roboto-Bold.woff2',

  staticFontPath + 'Roboto/Roboto-Italic.eot',
  staticFontPath + 'Roboto/Roboto-Italic.svg',
  staticFontPath + 'Roboto/Roboto-Italic.ttf',
  staticFontPath + 'Roboto/Roboto-Italic.woff',
  staticFontPath + 'Roboto/Roboto-Italic.woff2',

  staticImagesPath + 'slides/hike.jpg',
  staticImagesPath + 'slides/business.jpg',
  staticImagesPath + 'slides/registration.jpg',
  staticImagesPath + 'slides/team.jpg',
  staticImagesPath + 'slides/quest.jpg',
  staticImagesPath + 'chains/programm.jpg',
  staticImagesPath + 'chains/group.jpg',
  staticImagesPath + 'chains/gifts.jpg',
  staticImagesPath + 'chains/stage.jpg',

  staticImagesPath + 'steps/w_step_1.jpg',
  staticImagesPath + 'steps/w_step_2.jpg',
  staticImagesPath + 'steps/w_step_3.png',
  staticImagesPath + 'steps/w_step_4.jpg',
  staticImagesPath + 'steps/m_step_4.jpg',

  icons + 'shopping_bag.png',
  icons + 'white_user.png',
  icons + 'white-phone.png',
  icons + 'contacts.png',
  icons + 'callback.png',
  icons + 'gift.png',
  icons + 'calendar.png',
  icons + 'user_card.png',
  icons + 'phone.png',
  icons + 'envelope.png',
  icons + 'city.png',
  icons + 'region.png',

  staticImagesPath + 'ladder/putin.svg',
  staticImagesPath + 'ladder/gentleman.png',
  staticImagesPath + 'ladder/knight.png',
  staticImagesPath + 'ladder/warrior.png',
  staticImagesPath + 'ladder/man.png'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );  
});

self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== CACHE_NAME) {
          return caches.delete(key);
        }
      })
      );
    })
  );

  return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
      cache.match(event.request).then(function(response) {
        return response || fetch(event.request);
      })
    );
});
