/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3e20cf2bc85789b305228ca5a2c601fc"
  },
  {
    "url": "assets/css/0.styles.3973894b.css",
    "revision": "2dbdeca8c43b7001a07aa16b7ba17a5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.a3eec035.js",
    "revision": "38cc6c8115d032cbdeecd437c5bb364a"
  },
  {
    "url": "assets/js/11.12b962eb.js",
    "revision": "182f3b812c139f0608f33fd24ac0f51e"
  },
  {
    "url": "assets/js/12.8da0a186.js",
    "revision": "97875d5263ff234c4580e1df1f93e2da"
  },
  {
    "url": "assets/js/13.2e76dc0e.js",
    "revision": "c27c2540e569e8b019a33a1ebe125e1a"
  },
  {
    "url": "assets/js/2.0e4edc9d.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/3.3f9d8e44.js",
    "revision": "676e963928b6312a51b23693efc4c37c"
  },
  {
    "url": "assets/js/4.6e07662b.js",
    "revision": "cfc81a8f587ed408f1dd5f47ae9ce3b0"
  },
  {
    "url": "assets/js/5.23a4d471.js",
    "revision": "6c24cb5a39bce3075bf4cfa96de88239"
  },
  {
    "url": "assets/js/6.a04538c8.js",
    "revision": "17f7a09ce4b9a791c3cf40621023b29b"
  },
  {
    "url": "assets/js/7.535a57f4.js",
    "revision": "ab5fc7957c8d9f1ccfbc143d938fd4bd"
  },
  {
    "url": "assets/js/8.ae3c68e1.js",
    "revision": "d48d4778f62775d8ce9f1fa41f80ca2d"
  },
  {
    "url": "assets/js/9.5779b476.js",
    "revision": "8986de5fe4157b04bc362306dc64a544"
  },
  {
    "url": "assets/js/app.fc1117fe.js",
    "revision": "e7026d3b9a667ee6847b6051dfe7fc3c"
  },
  {
    "url": "example/custom.html",
    "revision": "814e7f0d3194ac3240adda0d0fddf8b6"
  },
  {
    "url": "example/demo.html",
    "revision": "8f6e7e45680586bcdb82affff6739a8d"
  },
  {
    "url": "example/index.html",
    "revision": "3c1d17f0d5788889608c6906eee5756d"
  },
  {
    "url": "example/vuepress.html",
    "revision": "ad8d8d609f9823d150123f538ceb3021"
  },
  {
    "url": "index.html",
    "revision": "c53fb56ddf2d3b811b51ea418d0b6320"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "07eb9422d4ad691ef7b4456e76208a7b"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "fab1e656abf89f8fcd9c3ddad0f3938a"
  },
  {
    "url": "zh/example/index.html",
    "revision": "56ac58ee68509b941931ff231bf41956"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "dcd21d22608848387001c39dbf357df8"
  },
  {
    "url": "zh/index.html",
    "revision": "9203f527ac5b4d13ee920af5e7448323"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
