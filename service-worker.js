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
    "revision": "50d17134c249ab3eb444eabce8e6439b"
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
    "url": "assets/js/3.2c9513d0.js",
    "revision": "a9e4a50b02fe692fef4bafdb77ff664f"
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
    "url": "assets/js/8.c5e2d55d.js",
    "revision": "e36bd3c35e19480b287c32df8ad3dc10"
  },
  {
    "url": "assets/js/9.5779b476.js",
    "revision": "8986de5fe4157b04bc362306dc64a544"
  },
  {
    "url": "assets/js/app.61a05418.js",
    "revision": "1ac2a18f9cfc90b12e9a5ebe89145e94"
  },
  {
    "url": "example/custom.html",
    "revision": "e9357cb82bd2abfe05ecd62d62f9fe1f"
  },
  {
    "url": "example/demo.html",
    "revision": "ac66f627c16d12e2bbfa30d635c4bd62"
  },
  {
    "url": "example/index.html",
    "revision": "644e801a76077f29979756163489fe69"
  },
  {
    "url": "example/vuepress.html",
    "revision": "99c9b5405c794aad4e7aafbff2c8200d"
  },
  {
    "url": "index.html",
    "revision": "fd194140aa036841a48942797e44ba34"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "4cf72946ba8762b475383c794b617f1f"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "d4e0517eed6cbe82d6a1a58b4b7613f5"
  },
  {
    "url": "zh/example/index.html",
    "revision": "a2cbcd49b53951c510973a6125c56e64"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "7bacf4989173859b17724f40ae6c6b26"
  },
  {
    "url": "zh/index.html",
    "revision": "65e5abb6250f833e58d22de217318501"
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
