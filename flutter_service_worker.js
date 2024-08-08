'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "531896acb85dc863f958fab08a53a9a3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "7d58da7459cb9809edcb7be155c23d4c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "80cf48442dc1ac8647424fb4c707ae08",
".git/logs/refs/heads/main": "0ba05421a126680f444a15e978efde0f",
".git/logs/refs/remotes/origin/main": "75c61dc523ce034a11a148a91a785cc8",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/10/e16241bbb20218ce79edb9e3cd0522edb2e00b": "ed42cc508dc0889d869da5c10e1ea83c",
".git/objects/16/789644ed9e53e00a646f57c7279e3dd11951d4": "f9b51326dcac22ea3c12e071b3e7143f",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/27/216b2a3c1954028a536b94f273958d0666d6c5": "e4573de5b6f96d432b5983ff9e77b172",
".git/objects/2a/7899e2a06751d2e4ee889a54974cf960d98b73": "9379122619f9cfe2cc4f709874d50d63",
".git/objects/30/d58a2e5dcc6a3ad47c3eeb004001fc1275d710": "257d1e495a17a3a79b065dd034e8c3b5",
".git/objects/3a/60cd36310c4e0034299b3f82243d5e33238cf2": "c5fdfd79a594860f22d20e028b84d62c",
".git/objects/3e/f1945167c22b6d8cd871e059fb118770fc7768": "274a4a66e1717e3eb01982ef79d47b41",
".git/objects/45/2b5fc553f2c7ec5ec7409c996894565c4a81e6": "b92f1d4beb4f823f780c1e4ee40f0aef",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/e24ceecec04354c0079325a5be5a2881f9dc59": "6d7768f9ba51ffa422ef70d09993688c",
".git/objects/59/3992e3d9b4e07980127699b8216fb67ac27c49": "9b2f2bcae40b24320ee7039b02141c07",
".git/objects/5c/000e9c907c281dea479acf3286c8b0174e26eb": "5f4be2547b22476a8b6c31c65dd3281c",
".git/objects/60/1e321d2ea8393e2c2a525186d933935555c544": "23c3d1a69a737e5da8e3f95a8d2c1c88",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/c1df1a1df943d40ccaee7b7f076ddb7b0a6e39": "6c432d794a231a80da900378a0095195",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/77/d66f5facac819b8835349cbcde0c02b2423393": "5b7945045ed58de58658361b72375442",
".git/objects/78/4f6a4e55894bc6fa466c5636b7a3d7c576f22c": "75365ff383d66db4124163ad9342285e",
".git/objects/7b/fc3c3e23c509d341ebc8a4f875107410b61007": "620eee642ce6ce237de03ca65e31fd67",
".git/objects/7d/591c4a49c839e8ab4557cc6b391353d65be5b5": "d841479f7e88f516f5d0874711ed77ee",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/6f51bf58af8384f85de83777635114936519c1": "bf821906404a45de90be8bdeaa058f8b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/28f947aa625b2e7507c118a56be2b700426c62": "572bfe6193feb9d66def6633082b79b9",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/f31a1455e80c9ba82619bc7d40facb2920416e": "c87358513b4438c3a7c58b916de289ed",
".git/objects/b6/95e70e462999c0daf1d4eb2f1730e85580d1e8": "e3314aee5bf2923fa6edcb66b9452e35",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/2edfc296301c01ca55a1c02905247cc7faf27d": "048e4d9637e3b5f8528b8d827a3c325d",
".git/objects/b8/e1b1c155597884b8dde0e7fcc4045d485e529c": "95c077706978970694762f1fb19cd6d4",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bd/5dfeab10b1332c3ee97dd9cef2a415f81e623a": "37fe5ffe0930ccc6cad812f19d367aab",
".git/objects/bf/4dcb2edecf0200430e781eb8af8c20229aa4fc": "5e762bf283ac09b1d6ab568ed2ba96c9",
".git/objects/c2/688d9a6827f6e327730d976b1767897aac0318": "654fb81455843796c31093459f0eeab9",
".git/objects/c5/1b7c379096272c38c7f3b81cf58e4290e843c1": "2586c0601a53a014a721222a7ce19657",
".git/objects/c8/e00e139487f618bfa8a7874b5ad7713b347dda": "330871733e15e4d9a414a0b63242e12d",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/4a746effc7319831e41da193e662692308e3c5": "4809864ef4c380d3a98a334a86d23bad",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/c53f702cd1766894f1dfeb58e6476c84f980be": "31edf58836ae9fe593b18395f7c44e9d",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f9/df37b3c56b45d631e18872d7a27aa5afc6555f": "d4ed784b4dce060ef49fa319aa926720",
".git/objects/fc/f5e69ed6b552bf36b0ed8b110b7080e0c07070": "164401b01f862b613a36a3bc43e92adb",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/refs/heads/main": "5ba1f6af8d9c9a11c43c81c34c3033d0",
".git/refs/remotes/origin/main": "5ba1f6af8d9c9a11c43c81c34c3033d0",
"assets/AssetManifest.bin": "0067e8c1de27cb8ef9db8d560a6cf7ee",
"assets/AssetManifest.bin.json": "f2d50295e9a51abe6aa44ffc76b8f069",
"assets/AssetManifest.json": "9f3a3aebd7b883b22e47f9244c045aa2",
"assets/assets/fonts/EuroStyle-Normal.ttf": "cef847475ff255370d753d20d3ea4d1e",
"assets/assets/fonts/Soin_Sans.ttf": "0a87c2ccafba2cb8fcf7c64398b10aca",
"assets/assets/images/avatar.png": "8bb979d941c27dcd7fa404cdeab8b1aa",
"assets/assets/images/chatapp-main.png": "d1e1392d0f71de28738ea244bfbc3d3b",
"assets/assets/images/chatapp-sub.png": "7c6e23c55fe4ac51b1d4206a8957e7e6",
"assets/assets/images/devices.png": "ee6d3d9c44fffd706a8b261bf1399569",
"assets/assets/images/main-app.png": "5a479f8ff94b8194fd2a593e22a237be",
"assets/assets/images/mainlogo.png": "a1298bff0a077ec248273594a97ea0a6",
"assets/assets/images/sub-app.png": "9ba8090c29f4e6c42da93e76f8e99321",
"assets/FontManifest.json": "4d70bbe8a836a1f3304cff217ab0bb74",
"assets/fonts/MaterialIcons-Regular.otf": "4a76f30dedb277abfe5b720baaf562e8",
"assets/NOTICES": "d7b7e213934e59a68a2b1acdaf56134e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "250388f922496627cffdf4368fae07e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7d229a036155284f9c3c8ae0917f2a0a",
"/": "7d229a036155284f9c3c8ae0917f2a0a",
"main.dart.js": "3296998273d587daf3c58e7aefc9e48d",
"manifest.json": "f330e37d4bfc5862fca7d2ac96c56981",
"version.json": "5d7c21d18acd66d2e2fb0cba195caee3"};
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
