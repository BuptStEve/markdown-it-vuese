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
    "revision": "c07f382ee54212c6c9137d047677fb93"
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
    "url": "assets/js/3.3c62fe56.js",
    "revision": "da92eb7a0e8e80607349228895e90154"
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
    "url": "assets/js/8.66098c7c.js",
    "revision": "edc8924e6c3b3ac3969ae8e5f321af48"
  },
  {
    "url": "assets/js/9.6590f4fc.js",
    "revision": "8986de5fe4157b04bc362306dc64a544"
  },
  {
    "url": "assets/js/app.fcfef26f.js",
    "revision": "f91ea8af9259d6ab3882428a7a83469d"
  },
  {
    "url": "example/custom.html",
    "revision": "5f7b360970095ef50ba37372ecdc1f1f"
  },
  {
    "url": "example/demo.html",
    "revision": "186e6f04baf048ed76c7b51c4bff3ce7"
  },
  {
    "url": "example/index.html",
    "revision": "9cb77ed7e87cf8c0794f73e31aad70f4"
  },
  {
    "url": "example/vuepress.html",
    "revision": "969d109b543d51e5ef34033cfda28b7c"
  },
  {
    "url": "index.html",
    "revision": "6ec38b931ab38e11eec2236833381e67"
  },
  {
    "url": "zh/example/custom.html",
    "revision": "00766d9ed86189472cd91f809d4a45b3"
  },
  {
    "url": "zh/example/demo.html",
    "revision": "022d41122f34746cf42d5fe5cbda307d"
  },
  {
    "url": "zh/example/index.html",
    "revision": "164bed7d08aaa4d992236e8f68f183b3"
  },
  {
    "url": "zh/example/vuepress.html",
    "revision": "608364f27b88c42020bf43b1c07b9c6a"
  },
  {
    "url": "zh/index.html",
    "revision": "ab1c21af80811d27f813acd6926ca7cb"
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
