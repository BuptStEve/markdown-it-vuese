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
    "revision": "b5a734047c74c48bb75fe10b2adfddf6"
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
    "url": "assets/js/app.2bffafaa.js",
    "revision": "0d472f2b6e476978d7e4f25461997bac"
  },
  {
    "url": "example/custom.html",
    "revision": "68f4db7596bb191790f3872b67265fc8"
  },
  {
    "url": "example/demo.html",
    "revision": "3a17e12dcaa26b117d843e7990c6adc1"
  },
  {
    "url": "example/index.html",
    "revision": "5bd21d0028aa9c827caba258598441e6"
  },
  {
    "url": "example/vuepress.html",
    "revision": "7a643f5196e9555005ad983e37a9bd26"
  },
  {
    "url": "index.html",
    "revision": "55f58c9eed83fad7a5c82735f6ee47ac"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "12d74bf7b7a0a09179bb1a6fc9789199"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "cc1e952418383314e0af865832e2d3ed"
  },
  {
    "url": "zh/example/index.html",
    "revision": "914c5b53e22fe96112af35e5e75761f0"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "79465213757ea9627ba13ff7b7094610"
  },
  {
    "url": "zh/index.html",
    "revision": "b194e113bc836ed9b10707c49bb3607f"
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
