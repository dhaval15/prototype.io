'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "ac0d43f2ffd578b608571390453c5e1f",
"/": "ac0d43f2ffd578b608571390453c5e1f",
".git/refs/remotes/origin/main": "e3b4eb0e3667fe29ada7ed002835ee1f",
".git/refs/heads/main": "190d970e080d8932c5e26bba510d4948",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/COMMIT_EDITMSG": "e9d04ecdd6040c6d54a88d7c6ed0cfef",
".git/index": "8427e8f38d6a15d268799163f07f6761",
".git/logs/refs/remotes/origin/main": "5fd48d138b7dec1eeb436d2ac513a65b",
".git/logs/refs/heads/main": "2badd983c0a85f56c515087f187d1566",
".git/logs/HEAD": "2badd983c0a85f56c515087f187d1566",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/db/656c3a0f0dfdd76c71a657ce5e586c92079b0a": "57f4c55242d66c0441e64e1176d088f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/72/ba4db46e52b89d630d9239a69e5a18283b0212": "2d2c8f3be7c60597070e2254d2bc3e3b",
".git/objects/92/cedd7d101432e7f7f9737a137979d04d4981a0": "45dffb5ec99f891a30c767b0c46659eb",
".git/objects/1b/3d613e3ef79f9472d4f2096d8e32471c273428": "a617e1bb15acf9cbfe59aedc92c57573",
".git/objects/d4/517f0cc6f7434c297fa5e2c49da2249184ea3b": "1559e30e6124e0552e0d5be08704b4e0",
".git/objects/c4/4143858c4bbab00da978c3d198d07601dd7419": "52240f87685fb522ecb18fc28a65a8e9",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/1c/0696c0ccfa8f1d064836b47bfcbb1f07588942": "3d8fb4376ab34cf636725692d37ae80e",
".git/objects/10/729d9792f35b28e0234e191ffd56fda7d9c7bf": "23e35338c8e11f87805de213fd5733be",
".git/objects/df/ea179c5a1debb16b8a8d09b137e8ba114feb41": "770027e23efdebcb54679fc1a5f66603",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d3cdcc33880fa52124e8ea1f41cff4f79dddac": "440382d83d01a435ceec90c355661fb4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ba/b8318839f712add5e3ef0c17506695e1e80d63": "bc924ce49ca30a506ea224c581cbefed",
".git/objects/fb/a749ccc6bc829fdf54fa3f8c07869f8215b56f": "94fe6640c568d1d361e20a35e9562de0",
".git/objects/77/22e01f60feba2f4ced8393a22b3caa36ad0a19": "9545a8324e08dab320cd34ba90aa687e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/8b/2097a75cdf54e03bfdb4204f4681287e391655": "1b7bff24b36eee66377672c4f3ceb0cb",
".git/objects/50/6e40db93b28bcf7dae04446c05810f477dbd26": "4f4e1ff34399cc2a4fe6c4490be582d3",
".git/objects/50/dbb48365df9347375528dd6aa90a0f7cf02428": "6e20469ab9cac2b6d92c21425fac7753",
".git/objects/47/9744817a7cf93c6e69e71b89f5423ee0b1a00e": "9c6dc57e181846cec99e772afcebf4a0",
".git/objects/c5/3695ec5f353b1f1d36915c2998bde39afeb04f": "a070fbc8ea94c214c43c544e44da5b10",
".git/objects/8f/e4df24d1223c1fc81e1f4818b7653bcfb2bf98": "4544bd2ff48fbc1bb6acc417cf0a178d",
".git/objects/16/57ec6ff4980a128692b9329cddaf9f3e9da7b6": "445e381ee91cba02d8de1b0d939c08ec",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/35/c7f08d77000e8b0f82db92469abbbdc710c490": "a886bf7d9e607528395a763c83fc7fb3",
".git/objects/c0/998d1356833bdaf071eb3952b8aa1a2341b3f2": "25000efed01d2af613166ca4b72f93da",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/b2227a628898980aea0b1a7e0557bff164cc55": "3cfeb804477f892fc427e795e0b52c99",
".git/objects/90/8551ee665414b5132dde0998b046040f52a1ae": "47c915efa6f994e879e882cfd62becbb",
".git/objects/66/7cefd20b8f0393d6abb58ee89a31e66fcbbfbb": "b81517ce9b041034c34979bdc08ecf5a",
".git/objects/12/b19369a55d590ceb3aa73a8ec15f25e8564f0a": "223a579b2bc6a1488c3a2df1ad0af028",
".git/objects/a2/13aab6eceaf4824b5a793b43a3122d53923da5": "f5ee0056e9416401598f84bb820f4a96",
".git/objects/89/c25f383367bdd75debcaf9104bb2d44fa10fe5": "467d1f0efee24265568c0c16225209c7",
".git/objects/89/be1b7fed6ded8920b3caf84b2b45d40761e96a": "b0436767728e63a165ff7a77e388bcf7",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fdf92217a2fb68962d145ead4d236272a217d2": "b2c5fecd1562d8a49bec3a96c30619c2",
".git/objects/61/ffa33739a47c1250789a149ff68bf61c2e5176": "e6ad259a58c207e43d172da090016ccf",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/da/591085db55c245164d3e5cfc92c1447b98d1a4": "3494f3b350f879c0050496d01fafd91f",
".git/objects/17/312ef7a8ac6d19961c8f6574957327bec9dbac": "12b5fda0887cb912c7a59eb1bf36036c",
".git/objects/15/3ff5eddb46d1eb0d2a2a3e469e1552a231aba5": "d4d65591d40fd8d871a148c3f2e2cf02",
".git/objects/78/57988919eccad02a2b3139467fcec614072c83": "ff62dc0716e30e0f682dcfe763f09e3a",
".git/objects/ad/781151a03be5ef7812c7758df4f0b372aaa5b2": "183ceef47c46dd987c03e43851a03032",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/93/f6de09c8317304156c5338fa6b8067b9d3230d": "09b423659946a8e54fc6948f2b5738c5",
".git/objects/93/a3083dac474d39bcc26ccd48808b7c86005005": "3123b02dbcdacad7afc0f191653133e6",
".git/objects/c8/0655a566478a871cc45850f0551a83a83ee611": "cd14de52d051ed769ac962571399e259",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/ea/004be0fed747fe52a937e0ff04b230ce275181": "845dd094d7c6657d7d7c5fa22a93ccbf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/2a/005cc1b36a7f20c3d9b1318be6bb009c989f5a": "59fca2a1c4f952fbc9481f63a6cc6482",
".git/objects/a6/7d73a557d5f5e6ca7e5b9842b5e3ca8b9d9196": "e308900a0e10f82883df2dccf4e9acfc",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/config": "e077975db25f66cef2ac9fc1253d891a",
"version.json": "188146f8caef133af765107327f06d13",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/NOTICES": "06597771296d71cbbe3ac649eb6d81a2",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "6b44ceb6766f605fc8868db7789f008f",
"manifest.json": "771191336fbb90f94007ef35503fc258",
"favicon.png": "5dcef449791fa27946b3d35ad8803796"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
