'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "efc66d5d6e03720d705aedf70aa10d8e",
"/": "efc66d5d6e03720d705aedf70aa10d8e",
".git/refs/remotes/origin/main": "db1f1cfad9323546843582a3daa08803",
".git/refs/heads/main": "db1f1cfad9323546843582a3daa08803",
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
".git/COMMIT_EDITMSG": "c092c8a177a817b1ebc7a4ad963a2191",
".git/index": "e1c77b1e6739ac7b9d98e4ffb967210b",
".git/logs/refs/remotes/origin/main": "b68c5e609c58517d65c3ffa7f5f0fe6d",
".git/logs/refs/heads/main": "91dd835d9ca9c5f9cdfc1198230a62e7",
".git/logs/HEAD": "91dd835d9ca9c5f9cdfc1198230a62e7",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/objects/db/656c3a0f0dfdd76c71a657ce5e586c92079b0a": "57f4c55242d66c0441e64e1176d088f2",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/72/ba4db46e52b89d630d9239a69e5a18283b0212": "2d2c8f3be7c60597070e2254d2bc3e3b",
".git/objects/6c/65045150d7da085bc65526cf7e2b47fc96347d": "7610325dfa8a8beb2a013ba207edca3a",
".git/objects/84/c3f1c84fe252dab85512c87dec054b79d016ef": "48ba4eac30bc3b5fbfe1d76107896619",
".git/objects/92/cedd7d101432e7f7f9737a137979d04d4981a0": "45dffb5ec99f891a30c767b0c46659eb",
".git/objects/cb/6ff295251da2c698ba8b38817c5f629b62d022": "7f213cb8a7f68e093bb5be7bf4efa437",
".git/objects/1b/3d613e3ef79f9472d4f2096d8e32471c273428": "a617e1bb15acf9cbfe59aedc92c57573",
".git/objects/ca/fb371bf049befa65eaea349abea6b69d266a66": "18086583726658cf9a393d564b64ef11",
".git/objects/f8/892cb8f626b83b5580abf66888f9a54d85747d": "4fa3cfdfd0f34a73d55b3d4cb2885db5",
".git/objects/d4/517f0cc6f7434c297fa5e2c49da2249184ea3b": "1559e30e6124e0552e0d5be08704b4e0",
".git/objects/c4/4143858c4bbab00da978c3d198d07601dd7419": "52240f87685fb522ecb18fc28a65a8e9",
".git/objects/fe/51865150f48214146142b755ad08c0b9e5bb3f": "4d7578ee85200f1afbec459974d77526",
".git/objects/fe/92c0e0adce39f8a3e0c35e88005403393b743f": "060f863a18a87d6c806d2ba5763d903c",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/objects/1c/0696c0ccfa8f1d064836b47bfcbb1f07588942": "3d8fb4376ab34cf636725692d37ae80e",
".git/objects/6a/8faeca5a0728da25064a02ee9ff26e47c9f6ca": "9dd75fea04327122b8d62ccc23809087",
".git/objects/10/729d9792f35b28e0234e191ffd56fda7d9c7bf": "23e35338c8e11f87805de213fd5733be",
".git/objects/df/ea179c5a1debb16b8a8d09b137e8ba114feb41": "770027e23efdebcb54679fc1a5f66603",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/d3cdcc33880fa52124e8ea1f41cff4f79dddac": "440382d83d01a435ceec90c355661fb4",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ae/2a342779b656edcfb189260586007c159a7928": "c50089ce3af44ed7a7746dd4a0ffd80c",
".git/objects/ba/b8318839f712add5e3ef0c17506695e1e80d63": "bc924ce49ca30a506ea224c581cbefed",
".git/objects/fb/a749ccc6bc829fdf54fa3f8c07869f8215b56f": "94fe6640c568d1d361e20a35e9562de0",
".git/objects/77/22e01f60feba2f4ced8393a22b3caa36ad0a19": "9545a8324e08dab320cd34ba90aa687e",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/8b/2097a75cdf54e03bfdb4204f4681287e391655": "1b7bff24b36eee66377672c4f3ceb0cb",
".git/objects/51/639471ee6c161edd1d6fdfb90366b0fc010708": "09563fdb3ac90d3d99175c0b2f0b8b92",
".git/objects/50/5f4cee1dbb4f1422cb88d39a9719200b473a32": "8e7656df914e7d46f22455fee7a97baa",
".git/objects/50/6e40db93b28bcf7dae04446c05810f477dbd26": "4f4e1ff34399cc2a4fe6c4490be582d3",
".git/objects/50/dbb48365df9347375528dd6aa90a0f7cf02428": "6e20469ab9cac2b6d92c21425fac7753",
".git/objects/50/41bc4b82b0cfa14847e507d7424d9e2087eab2": "3466f29744cb71089660e22c8114d963",
".git/objects/d7/413a238ae966d02114d090db11ef0a17dadffb": "8231fe3dc875b1f18313e7327a241f5d",
".git/objects/8d/9f74198f83d03cb54b2578c73c1ebc7214314f": "f6f2591ba4266c16a74e1d48b1491527",
".git/objects/11/8f1b8a457d9626c3f87b037750bb00447c585b": "e9186d0b81e8b67ea8708b3d838674d4",
".git/objects/47/9744817a7cf93c6e69e71b89f5423ee0b1a00e": "9c6dc57e181846cec99e772afcebf4a0",
".git/objects/24/d03c7838ce05deaef34b4aac135dd29117a3bb": "af09cb93b28c55c5f767c0c2556882de",
".git/objects/40/068ec84ec7b3d8c671030f4433384e88323a8a": "e9ade78bdbae36378e013376a9e27df5",
".git/objects/c5/3695ec5f353b1f1d36915c2998bde39afeb04f": "a070fbc8ea94c214c43c544e44da5b10",
".git/objects/8f/e4df24d1223c1fc81e1f4818b7653bcfb2bf98": "4544bd2ff48fbc1bb6acc417cf0a178d",
".git/objects/16/57ec6ff4980a128692b9329cddaf9f3e9da7b6": "445e381ee91cba02d8de1b0d939c08ec",
".git/objects/7b/37dc8e10ef80d0afb87fe1eaa865bfa40c3b01": "4d50bede620a8ab74fefc78b759ba4d2",
".git/objects/4c/c787edbba5e4726133924f13c13bae42f45c29": "33b75ecdc9991630b06abeda4d1740fa",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/be/3cef8d3256e251da03a8fe78f82077aa5a967a": "f161574f1b2de37b20e6f3ad2250d9ee",
".git/objects/eb/a114d514cf5e62ada63a6ad766beec06c0d131": "383e3632ef42c0521eb5bc335c235445",
".git/objects/35/c7f08d77000e8b0f82db92469abbbdc710c490": "a886bf7d9e607528395a763c83fc7fb3",
".git/objects/c0/998d1356833bdaf071eb3952b8aa1a2341b3f2": "25000efed01d2af613166ca4b72f93da",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/f2/b2227a628898980aea0b1a7e0557bff164cc55": "3cfeb804477f892fc427e795e0b52c99",
".git/objects/90/8551ee665414b5132dde0998b046040f52a1ae": "47c915efa6f994e879e882cfd62becbb",
".git/objects/7d/fdbaa05d5b96a31367462018bedbeeed9bfe5b": "01c324df4c9db92daa3deb2be49b63ca",
".git/objects/7d/30206be3edfa91676b6b5779d0c6d98d38ee2f": "0479b69bc1df841a56716e9a63ecad8d",
".git/objects/09/cb273848f2d4f957d8aa1f8a8fc7249aa6b6e3": "26d5bf2da306af1cdabd1d73c920b1c3",
".git/objects/66/7cefd20b8f0393d6abb58ee89a31e66fcbbfbb": "b81517ce9b041034c34979bdc08ecf5a",
".git/objects/12/b19369a55d590ceb3aa73a8ec15f25e8564f0a": "223a579b2bc6a1488c3a2df1ad0af028",
".git/objects/a2/13aab6eceaf4824b5a793b43a3122d53923da5": "f5ee0056e9416401598f84bb820f4a96",
".git/objects/d8/8437ee6f89f3a1cd3c09683f7c791cad9c98c5": "021b39a5812db613e94313e652b14dfd",
".git/objects/89/c25f383367bdd75debcaf9104bb2d44fa10fe5": "467d1f0efee24265568c0c16225209c7",
".git/objects/89/be1b7fed6ded8920b3caf84b2b45d40761e96a": "b0436767728e63a165ff7a77e388bcf7",
".git/objects/3e/4ba0724677868bb700ccbd2345a7516037248c": "1f9e7e0e77119c84effbf3dbd427b25b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/fdf92217a2fb68962d145ead4d236272a217d2": "b2c5fecd1562d8a49bec3a96c30619c2",
".git/objects/61/ffa33739a47c1250789a149ff68bf61c2e5176": "e6ad259a58c207e43d172da090016ccf",
".git/objects/39/a3ea3af5523d3476006b7e0cff7a650f4b1e6d": "17a7092c081f50e0556be5e85169738b",
".git/objects/39/195c9c629a5c0966438ea7f67efae0333fe62b": "f110889eda8077278170601b3eb1a4c1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/da/591085db55c245164d3e5cfc92c1447b98d1a4": "3494f3b350f879c0050496d01fafd91f",
".git/objects/17/b0dae96ee5fae86f80df95dd75ea4f25aec52f": "eabafa747cef6720f4be1c6f164245ac",
".git/objects/17/312ef7a8ac6d19961c8f6574957327bec9dbac": "12b5fda0887cb912c7a59eb1bf36036c",
".git/objects/e2/71fa6727a5277ca1bd4d312fbf5d1c29753fd5": "809af1a81c5bed2a63e521596cc0fd0f",
".git/objects/15/3ff5eddb46d1eb0d2a2a3e469e1552a231aba5": "d4d65591d40fd8d871a148c3f2e2cf02",
".git/objects/78/57988919eccad02a2b3139467fcec614072c83": "ff62dc0716e30e0f682dcfe763f09e3a",
".git/objects/3f/c98a19163d559a7cd44e4f9bd00afe32b2aeb3": "d18bee9daad51bedcd688c0cef7d28da",
".git/objects/8e/671978daeff2aa88c247b531826a56be94031d": "e835649705f408c44b861bb4b54f0cce",
".git/objects/e6/828736861a6aa7ebd32939410ea650c9c08a39": "764c278185526fc31b4a1625236c854e",
".git/objects/ad/781151a03be5ef7812c7758df4f0b372aaa5b2": "183ceef47c46dd987c03e43851a03032",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/2cb4d4f7e08dd607a388e01116c7d3c366f0b1": "a4470b46405934c61e79a98ebd5ab956",
".git/objects/93/f6de09c8317304156c5338fa6b8067b9d3230d": "09b423659946a8e54fc6948f2b5738c5",
".git/objects/93/a3083dac474d39bcc26ccd48808b7c86005005": "3123b02dbcdacad7afc0f191653133e6",
".git/objects/93/3379ef99a25a18fa61a894360845f8213d5a02": "d32b77afba051c522c0a3cf67a586c6c",
".git/objects/c8/0655a566478a871cc45850f0551a83a83ee611": "cd14de52d051ed769ac962571399e259",
".git/objects/c8/72ce05ef3c538815212b2c91f1d41f49b5b725": "a1e53f149e920b2159ec41c80e08f550",
".git/objects/c1/85ebacf9727b5c678970b937c4993916920fd0": "ad3c445a9f4d085fa0a893c8b44231e0",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/ea/004be0fed747fe52a937e0ff04b230ce275181": "845dd094d7c6657d7d7c5fa22a93ccbf",
".git/objects/06/f4cc20cf2ee6f2cddff51c46653ac8b10b3be5": "7c4d4d51647a8881403323b4009c2f81",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/1d/aca17feeb3630b7dd1eb22f8057cf97006c24d": "1bb466b2f14aab3c559b9bb18c5286cf",
".git/objects/2a/367ccf88fa329c1dbe6e62e4224a7b5a7fe30e": "d3ddc992e01cb634638792ea0e109c64",
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
"assets/NOTICES": "f393be3b3d88ab11fc02d06364720c12",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"main.dart.js": "43e6b065d9b363e33a15956877d58cc4",
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
