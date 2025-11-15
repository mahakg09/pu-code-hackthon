'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"manifest.json": "bcbc535a2e5547e2ba1d9a92ce20e9fc",
"index.html": "3e74a1bcf03d8470c226a94d85f89ef8",
"/": "3e74a1bcf03d8470c226a94d85f89ef8",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin.json": "a620b24d622c2318a7fb92b4ca586d5f",
"assets/assets/icons/alphabets.png": "fc54dc19188e28f869eb2178ae584208",
"assets/assets/images/logo.png": "837c4288713dbe56af119bf799ccedee",
"assets/assets/gifs/numbers/8.gif": "fb39df03aadfec067069e7756aac68b6",
"assets/assets/gifs/numbers/7.gif": "356b34a873e1498129bd1236f8347937",
"assets/assets/gifs/numbers/0.gif": "b5f4756f02a49611c9b611e2d740ed7e",
"assets/assets/gifs/numbers/6.gif": "f720a4b6e27f8e410a69df92fba23e03",
"assets/assets/gifs/numbers/3.gif": "0b4b45e66db89dd7f86e6ecf5320c844",
"assets/assets/gifs/numbers/9.gif": "61d5211cf401da432104e1ab013552f1",
"assets/assets/gifs/numbers/2.gif": "92e0554375cf7f74f559fa31766cea17",
"assets/assets/gifs/numbers/4.gif": "be12b9744bcd5f18c5e162f2f36a5e47",
"assets/assets/gifs/numbers/5.gif": "4a71b2b1ab1ed6feb9a37ebbaa124973",
"assets/assets/gifs/numbers/1.gif": "637c0098549ba236788c49c1dc764d19",
"assets/assets/gifs/alphabets/g.gif": "d02340146b98ccf5b54c6e62d7054e3e",
"assets/assets/gifs/alphabets/h.gif": "749aa5faeaf49e42879a13a2eeb401b3",
"assets/assets/gifs/alphabets/x.gif": "f89557ca51eab44fd428f7c72f892b79",
"assets/assets/gifs/alphabets/i.gif": "2d0d8169b9e80b1384b3b63a40398956",
"assets/assets/gifs/alphabets/o.gif": "dd2391e84df283fc7cf8fd092efe6811",
"assets/assets/gifs/alphabets/e.gif": "21f7fcfbe3afc85ccd7698ad15cd8e7e",
"assets/assets/gifs/alphabets/a.gif": "cbb06178cc3d2189190237ae4a7f4df3",
"assets/assets/gifs/alphabets/c.gif": "5b908ca410d5843b25f5d5488eb52dd5",
"assets/assets/gifs/alphabets/t.gif": "4b5a2422d1fddaf632344026e794042d",
"assets/assets/gifs/alphabets/s.gif": "4641dcde0d2202b07c2e2606b9f370f7",
"assets/assets/gifs/alphabets/y.gif": "c4893fcd78968af5bc261915e988cfa6",
"assets/assets/gifs/alphabets/n.gif": "072f96641d075be997fa8b27b49def23",
"assets/assets/gifs/alphabets/d.gif": "c5636194fc6fda523718a838a242949b",
"assets/assets/gifs/alphabets/k.gif": "8d609136dc7a912a9c5dede6ae1d9ea5",
"assets/assets/gifs/alphabets/l.gif": "51eb13f4b39c973f5d7173048f48e22a",
"assets/assets/gifs/alphabets/r.gif": "b32b5d38d595928126cf743a6ff2db6d",
"assets/assets/gifs/alphabets/j.gif": "86e32876958c80608982dc4155d6bde2",
"assets/assets/gifs/alphabets/b.gif": "58e831654b47c0b3d7009cfe5317921f",
"assets/assets/gifs/alphabets/u.gif": "1f4844bf8e823cd35fbe2690bcf30085",
"assets/assets/gifs/alphabets/w.gif": "f860ce9793b404056bc6c63bc1682c50",
"assets/assets/gifs/alphabets/m.gif": "9074874ea3cc1e47649e08fa08c8be27",
"assets/assets/gifs/alphabets/q.gif": "76948e74ddd35ddb4c614c305f786fbd",
"assets/assets/gifs/alphabets/z.gif": "8a767f5fdfd564ed43dc9433a65e20ea",
"assets/assets/gifs/alphabets/f.gif": "1491250f6da63cad7ff19cd87db1da6a",
"assets/assets/gifs/alphabets/v.gif": "c769b73008ef6865e61f62dee0a0ed63",
"assets/assets/gifs/alphabets/p.gif": "c8c61d02a1f198ccdb8ae4f4bc6940b3",
"assets/fonts/MaterialIcons-Regular.otf": "feae4d0c18a9a706d36e802079477b14",
"assets/NOTICES": "7ffe95075bb5c0a83499217410a8d411",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4769f3245a24c1fa9965f113ea85ec2a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "67a28da3784fc091c2f816d615fbf08a",
"assets/AssetManifest.bin": "47cad4fbb1e9ca5c9f40c288e39d1565",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "de1a23b9f922fa22a82a7ed3699a3938",
"version.json": "d611253377b23674da0986d08bf99d11",
"main.dart.js": "a88c6e55fce13480c9bb996cb6c0ad00"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
