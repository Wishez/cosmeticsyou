// 1. Open cache
// 2. Cache files
// 3. Confirm whether all the requored assets are cached or not

var CACHE_NAME = 'cosmeticsyou-cache-v1';
var staticCssPath = '/static/cosmeticsyou/css/';
var staticJsPath = '/static/cosmeticsyou/js/';
var staticFontPath = '/static/cosmeticsyou/fonts/'; 

var urlsToCache = [
  staticCssPath + 'main.css',
  staticCssPath + 'fonts.css',

  staticJsPath + 'main.js',
  staticJsPath + 'registration.js',

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
  staticFontPath + 'Roboto/Roboto-Italic.woff2'
];

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
      .catch(function(err) {
        console.log(err, 1);
      })
  );	
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request)
      .then(function(resp) {
        if (resp) 
          return resp;

        var fetchRequest = e.request.clone();

        return fetch(fetchRequest)
          .then(function(resp) {
            if(!resp || resp.status !== 200 || resp.type !== 'basic') {
			              return resp;
			            }
			            var responseToCache = resp.clone();
			            
            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(e.request, responseToCache);
              });

            return resp;
          })
          .catch(function(err) {
            console.log(err, 3);
          });


      })
      .catch(function(err) {
        console.log(err, 2);
      })
  );
});
