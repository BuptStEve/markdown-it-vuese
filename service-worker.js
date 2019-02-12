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
    "revision": "ec4ceaf357acabe9e559fed457fa1b9c"
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
    "url": "assets/js/3.7b787fb6.js",
    "revision": "743b0bf824ba33f6e3c847af73fadc3c"
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
    "url": "assets/js/8.7789612f.js",
    "revision": "51e149eeb088eb1c22f9c271d820487b"
  },
  {
    "url": "assets/js/9.5779b476.js",
    "revision": "8986de5fe4157b04bc362306dc64a544"
  },
  {
    "url": "assets/js/app.20ab0d4c.js",
    "revision": "529e849d6a84f711a743cb3e39d0652e"
  },
  {
    "url": "example/custom.html",
    "revision": "51b8716d95e83fd51504b732a9af670e"
  },
  {
    "url": "example/demo.html",
    "revision": "d7465d38e2346a67f6627505ca162311"
  },
  {
    "url": "example/index.html",
    "revision": "9e3429ad0a5a73e11366e4e233554fc9"
  },
  {
    "url": "example/vuepress.html",
    "revision": "89fda7ae05bafde5a9c1703d084fcb93"
  },
  {
    "url": "index.html",
    "revision": "ba1e1d18a8251cca7d638bf56aa4b67d"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "da13097006aac4edb22f1e9cdf1ca0ee"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "80a5f1f1849f0749db28206f92e2e267"
  },
  {
    "url": "zh/example/index.html",
    "revision": "920f0d66d3e7815874130df8ae898970"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "204593effff84b00b98f1b5708a7a590"
  },
  {
    "url": "zh/index.html",
    "revision": "096ef8e87a1a82a4db3db62f693efc54"
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
