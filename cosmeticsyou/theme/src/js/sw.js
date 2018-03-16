// 1. Open cache
// 2. Cache files
// 3. Confirm whether all the requored assets are cached or not

var CACHE_NAME = 'business-oriflame-cache-v1';
var staticCssPath = '/static/cosmeticsyou/css';
var staticJsPath = '/static/cosmeticsyou/js'; 
var staticFontsPath = '/static/cosmeticsyou/fonts/'; 
var mainFont = staticFontsPath + 'museo/Museo';

var urlsToCache = [
	staticCssPath + '/main.css',
	staticJsPath + '/main.js',
	staticJsPath + '/modernizr.js',
	mainFont + '300-Regular-webfont.eot',
	mainFont + '300-Regular-webfont.ttf',
	mainFont + '300-Regular-webfont.woff',
	mainFont + '300-Regular-webfont.svg',

	mainFont + '500-Regular-webfont.eot',
	mainFont + '500-Regular-webfont.ttf',
	mainFont + '500-Regular-webfont.woff',
	mainFont + '500-Regular-webfont.svg',

	mainFont + '700-Regular-webfont.eot',
	mainFont + '700-Regular-webfont.ttf',
	mainFont + '700-Regular-webfont.woff',
	mainFont + '700-Regular-webfont.svg',


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
