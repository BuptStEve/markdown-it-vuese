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
    "revision": "b3b7e287c922cea976835726f2e8c26b"
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
    "url": "assets/js/3.86669057.js",
    "revision": "e31bbbbe8107dc7270205f3522ec95f5"
  },
  {
    "url": "assets/js/4.4873c6ec.js",
    "revision": "f64d7d2074d8e00760dc70db5db26144"
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
    "url": "assets/js/app.a8ec5518.js",
    "revision": "170bb32bfdee82522d305bc12f10cd2f"
  },
  {
    "url": "example/custom.html",
    "revision": "43ecc2817668417c42b9104c1625b402"
  },
  {
    "url": "example/demo.html",
    "revision": "e40b38158a46c1bf181920e626c5cba6"
  },
  {
    "url": "example/index.html",
    "revision": "992c905f6fb68db90900dc6f514f6471"
  },
  {
    "url": "example/vuepress.html",
    "revision": "253695ebeed0ac5d4b13af4d06952747"
  },
  {
    "url": "index.html",
    "revision": "36a19291be475bd5f8ddea68ac25776a"
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
