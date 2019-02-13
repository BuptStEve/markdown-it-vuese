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
    "revision": "25c79af69a665aa831455d5c7843220c"
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
    "url": "assets/js/app.b40aa929.js",
    "revision": "0c68825c7bd32b78993b4c1fa210ab61"
  },
  {
    "url": "example/custom.html",
    "revision": "d3aed54c535cb1cdff8c1d677a38f7ba"
  },
  {
    "url": "example/demo.html",
    "revision": "0474489b0ef908655383d8a387dfd1a2"
  },
  {
    "url": "example/index.html",
    "revision": "f402c0ae54aea9b21f89ea15b3c0f9fe"
  },
  {
    "url": "example/vuepress.html",
    "revision": "ae3c274b8e43bd3c0b173dbc7fd6f326"
  },
  {
    "url": "index.html",
    "revision": "f7a283d7d13ec6e3450db3749dfea333"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "ef35fc949dfaee0e153b06884f202365"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "4f16857475a45bf7a962d087d216f414"
  },
  {
    "url": "zh/example/index.html",
    "revision": "6d3b3286fef6791b6d19045f9faccfa4"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "35bc3e8b3d9977a0adb5d8b77e34061e"
  },
  {
    "url": "zh/index.html",
    "revision": "e1ad12d0e7dbc5c4ca287bb5b1e00c91"
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
