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
    "revision": "06acdcfc79fdbbbf537f8f14400646c1"
  },
  {
    "url": "assets/css/0.styles.42cd2b85.css",
    "revision": "2dbdeca8c43b7001a07aa16b7ba17a5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.6f1ab854.js",
    "revision": "38cc6c8115d032cbdeecd437c5bb364a"
  },
  {
    "url": "assets/js/11.6f3a7106.js",
    "revision": "182f3b812c139f0608f33fd24ac0f51e"
  },
  {
    "url": "assets/js/12.7f5a0ae9.js",
    "revision": "97875d5263ff234c4580e1df1f93e2da"
  },
  {
    "url": "assets/js/13.5b760327.js",
    "revision": "c27c2540e569e8b019a33a1ebe125e1a"
  },
  {
    "url": "assets/js/2.972bf3a2.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/3.b39a69e9.js",
    "revision": "f0d8a9fa3236ac91dcf6d86cfb70887b"
  },
  {
    "url": "assets/js/4.24a300ef.js",
    "revision": "cfc81a8f587ed408f1dd5f47ae9ce3b0"
  },
  {
    "url": "assets/js/5.716ef219.js",
    "revision": "6c24cb5a39bce3075bf4cfa96de88239"
  },
  {
    "url": "assets/js/6.53eafb92.js",
    "revision": "17f7a09ce4b9a791c3cf40621023b29b"
  },
  {
    "url": "assets/js/7.cad4e205.js",
    "revision": "ab5fc7957c8d9f1ccfbc143d938fd4bd"
  },
  {
    "url": "assets/js/8.c27f35f4.js",
    "revision": "51e149eeb088eb1c22f9c271d820487b"
  },
  {
    "url": "assets/js/9.6590f4fc.js",
    "revision": "8986de5fe4157b04bc362306dc64a544"
  },
  {
    "url": "assets/js/app.f5561450.js",
    "revision": "7363bf95e8fc8559e970c89c011843be"
  },
  {
    "url": "example/custom.html",
    "revision": "62f330068a758bee208a5b78ab73024d"
  },
  {
    "url": "example/demo.html",
    "revision": "ed7e8c2051b265d9befa11599d855b92"
  },
  {
    "url": "example/index.html",
    "revision": "2db6040f5711206c554f6224562f7b12"
  },
  {
    "url": "example/vuepress.html",
    "revision": "e3056f84b63576b9248cb87229598ad4"
  },
  {
    "url": "index.html",
    "revision": "7a167603854ee8d6d121f4237d59f311"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "f71fa503d5f1d4b7538b2c88a331c2b0"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "31710c1353439c627e95a798d5386bda"
  },
  {
    "url": "zh/example/index.html",
    "revision": "ab98a44fd6b8e67a2eb694bcd2052080"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "1f3669915a09af25b8b5401aa4b6d1f2"
  },
  {
    "url": "zh/index.html",
    "revision": "f53c82ca2ff5265944a84a11e1979da0"
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
