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
    "revision": "4777296af551293ed3c228f3735c3284"
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
    "url": "assets/js/2.972bf3a2.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/3.27d1243c.js",
    "revision": "053ec6c4097dffb9600043b275478623"
  },
  {
    "url": "assets/js/4.9e3b0d51.js",
    "revision": "72aacb01a72efcb01da735ffe0cf9476"
  },
  {
    "url": "assets/js/5.6f5d5270.js",
    "revision": "c43ffe2f78df5242aa904bdeb8c0e0bf"
  },
  {
    "url": "assets/js/6.dd52bc03.js",
    "revision": "6b01d890879dd23dc20181ca92ce93cc"
  },
  {
    "url": "assets/js/7.a4ba776d.js",
    "revision": "e88106795cfe6831ac306de785b2502a"
  },
  {
    "url": "assets/js/8.3d534570.js",
    "revision": "08ca91b2e1033c741dc4a03483028a9d"
  },
  {
    "url": "assets/js/app.ea13147e.js",
    "revision": "49f40516e80df9c483f884e024508678"
  },
  {
    "url": "example/custom.html",
    "revision": "958100f3a7719135fe147f15b1bc9dc0"
  },
  {
    "url": "example/demo.html",
    "revision": "84952c1def28fcffb86a3493ff57bd1e"
  },
  {
    "url": "example/index.html",
    "revision": "d5d6e21a3aa403114c656896cfbbcd39"
  },
  {
    "url": "example/vuepress.html",
    "revision": "f3e5eb9c76db3c9d461eb0a6c7662769"
  },
  {
    "url": "index.html",
    "revision": "32f0081a52caa9f36c9709f4f2afa995"
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
