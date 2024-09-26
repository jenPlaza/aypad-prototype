console.log('service-worker');
//if (navigator.serviceWorker) {
// navigator.serviceWorker.register('./service-worker.js')
//  .then(() => {
//    console.log('ServiceWorker registration successful');
//  })
//  .catch(err => {
//    console.log('ServiceWorker registration failed', err);
//  })
//}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js');
  });
}

// Core assets
let coreAssets = [
  '/',
  'index.html',
  'story.html',
  './js/edit.js',
  './js/replace.js',
  './assets/images/icons/logo_sml-min.png',
  './assets/images/banner/martin-bekerman-2KxyxmXOjPs-unsplash-min.jpg',
  './assets/images/banner/manolo-chretien-RpC-9e0ORNM-unsplash-min-banner.jpg',
  './assets/images/parallex/doug-linstedt-jEEYZsaxbH4-unsplash-min.jpg',
  './css/reusableComponents.css',
  './css/index.css',
  './css/story_event_prjct.css',
];

// On install, cache core assets
self.addEventListener('install', function (event) {
  console.log('Service worker installed!');
  // Cache core assets
  event.waitUntil(
    caches.open('app').then(function (cache) {
      for (let asset of coreAssets) {
        cache.add(new Request(asset));
      }
      return cache;
    })
  );
});

// Listen for request events
self.addEventListener('fetch', function (event) {
  // Get the request
  let request = event.request;

  // Bug fix
  // https://stackoverflow.com/a/49719964
  if (
    event.request.cache === 'only-if-cached' &&
    event.request.mode !== 'same-origin'
  )
    return;

  // HTML files
  // Network-first
  if (request.headers.get('Accept').includes('text/html')) {
    event.respondWith(
      fetch(request)
        .then(function (response) {
          // Create a copy of the response and save it to the cache
          let copy = response.clone();
          event.waitUntil(
            caches.open('app').then(function (cache) {
              return cache.put(request, copy);
            })
          );

          // Return the response
          return response;
        })
        .catch(function (error) {
          // If there's no item in cache, respond with a fallback
          return caches.match(request).then(function (response) {
            return response || caches.match('/offline.html');
          });
        })
    );
  }

  // CSS & JavaScript
  // Offline-first
  if (
    request.headers.get('Accept').includes('text/css') ||
    request.headers.get('Accept').includes('text/javascript')
  ) {
    event.respondWith(
      caches.match(request).then(function (response) {
        return (
          response ||
          fetch(request).then(function (response) {
            // Return the response
            return response;
          })
        );
      })
    );
    return;
  }

  // Images
  // Offline-first
  // if (request.headers.get('Accept').includes('image')) {
  if (request.url.match(/\.(jpe?g|png|gif|svg)$/)){
     event.respondWith(
       caches.match(request).then(function (response) {
         return (
           response ||
           fetch(request).then(function (response) {
            // Save a copy of it in cache
             let copy = response.clone();
             event.waitUntil(
               caches.open('app').then(function (cache) {
                return cache.put(request, copy);
               })
             );

             // Return the response
             return response;
           })
         );
       })
     );
   }
});
