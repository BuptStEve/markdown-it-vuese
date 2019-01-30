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
    "revision": "14eb7f24f61de1cc5b45ea5eaa893eda"
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
    "url": "assets/js/app.fab47565.js",
    "revision": "c3d250eedff679792d2ac9c6ee2f6611"
  },
  {
    "url": "example/custom.html",
    "revision": "59569562663e5c83f80164fa159b07c5"
  },
  {
    "url": "example/demo.html",
    "revision": "739b409aaf1214839c2f6ba39e54b72c"
  },
  {
    "url": "example/index.html",
    "revision": "c42c6feb9d325429bdd7cb50baea156b"
  },
  {
    "url": "example/vuepress.html",
    "revision": "4e7012516379c08eb72387407f82453a"
  },
  {
    "url": "index.html",
    "revision": "63adc801e4191393fe6f7002e026aa09"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "7bfb7a4d1931ea19f3f8457ffca433cf"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "5b049647c8a64447610d4c24d7569d7e"
  },
  {
    "url": "zh/example/index.html",
    "revision": "af9e47e9eabf6fc39c31fdba8d1ac3a0"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "5b8862767c22affd70d45f3383db2350"
  },
  {
    "url": "zh/index.html",
    "revision": "cf67748412c2de6e2eb942191626131c"
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
