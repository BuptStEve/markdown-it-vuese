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
    "revision": "a8e6ecc06107f4f078625dcbf0738367"
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
    "url": "assets/js/3.429e8c8f.js",
    "revision": "34a37a3f18d7fe35a554502669fa74d4"
  },
  {
    "url": "assets/js/4.4873c6ec.js",
    "revision": "f64d7d2074d8e00760dc70db5db26144"
  },
  {
    "url": "assets/js/5.bc8b3634.js",
    "revision": "2a5959543825969fc359b5ba7c3bf687"
  },
  {
    "url": "assets/js/6.53eafb92.js",
    "revision": "17f7a09ce4b9a791c3cf40621023b29b"
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
    "url": "assets/js/app.0393ff2c.js",
    "revision": "89b8ff1a6b93c83c99ca078911125e51"
  },
  {
    "url": "example/custom.html",
    "revision": "019a451ba1fdf90a4253353f409c83d9"
  },
  {
    "url": "example/demo.html",
    "revision": "eeb375c22510f3ffeb70acf4a3e5a6a2"
  },
  {
    "url": "example/index.html",
    "revision": "16a6d33ee44962d921bba231539bfb2e"
  },
  {
    "url": "example/vuepress.html",
    "revision": "f5a89f06e7e75cc0aa9ef9ef265659ac"
  },
  {
    "url": "index.html",
    "revision": "fb3d61c5c3c4c0871a7e01661b5ccb73"
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
