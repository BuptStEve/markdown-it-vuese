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
    "revision": "75cd1f893e90baa929418ac8dd4e5d0b"
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
    "url": "assets/js/app.1d056dd6.js",
    "revision": "9424f38959689c61a2291e30bdd826c1"
  },
  {
    "url": "example/custom.html",
    "revision": "57df54feb88bb0db4239d76d8ab72251"
  },
  {
    "url": "example/demo.html",
    "revision": "8f1aef988e16dec17896c856b7092f9a"
  },
  {
    "url": "example/index.html",
    "revision": "23ea199f557d273683f9f46ade6fbee2"
  },
  {
    "url": "example/vuepress.html",
    "revision": "d831ebbbe81da4d95953ffa3735fb01a"
  },
  {
    "url": "index.html",
    "revision": "28eb21ccf496d9b995ec2e0761e3f05e"
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
