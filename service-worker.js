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
    "revision": "a6620e7d52d08010d52d09a34b147f3d"
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
    "url": "assets/js/app.8b69f422.js",
    "revision": "70d470fdea130dad4db4479b3da52179"
  },
  {
    "url": "example/custom.html",
    "revision": "5d81c86fb590419b15ce55e2b0892b0b"
  },
  {
    "url": "example/demo.html",
    "revision": "096aa0650d1b0aa6b8178c1792fc00b5"
  },
  {
    "url": "example/index.html",
    "revision": "34e63b2888bf9e8791c680cf3f2979c4"
  },
  {
    "url": "example/vuepress.html",
    "revision": "f959ba1b7396e19ec314d9e1a84a5af8"
  },
  {
    "url": "index.html",
    "revision": "8ae653b84296f25e0d62a1f93874bde4"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "dcc6e40760aeda80a1b5a75ef43604e5"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "b3dca1ad4d65bf8d76922423b99291e6"
  },
  {
    "url": "zh/example/index.html",
    "revision": "82a673dcb8ba332b5448c7b348d4905f"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "8cea825fe1390810a425cb151bc00de4"
  },
  {
    "url": "zh/index.html",
    "revision": "078fc9c4e85ebb9bdc64f713d75c69c3"
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
