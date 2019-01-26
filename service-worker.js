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
    "revision": "9152192a648d5ea7a3274e9dc1efd6d5"
  },
  {
    "url": "assets/css/0.styles.f8c60598.css",
    "revision": "2dbdeca8c43b7001a07aa16b7ba17a5f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.f9195cdd.js",
    "revision": "bbd498f606cfd3cc8eeab1b1dbf2f4b1"
  },
  {
    "url": "assets/js/3.d0b40beb.js",
    "revision": "e13699b889fc32f8ae9efd49f9b05374"
  },
  {
    "url": "assets/js/4.48096146.js",
    "revision": "de66cf0e55808a56c62004cd485eecab"
  },
  {
    "url": "assets/js/5.d2a885a6.js",
    "revision": "f5820ebc582159fc35f136cf4a6eea36"
  },
  {
    "url": "assets/js/6.577e180d.js",
    "revision": "5aa97e0fd05a354a8def503b1763107f"
  },
  {
    "url": "assets/js/7.3f9d5de1.js",
    "revision": "a2337da1293ebd0376777503fceb4c75"
  },
  {
    "url": "assets/js/8.74a5d9b0.js",
    "revision": "55d7d2e82a5f9dca8ebfced5317bae02"
  },
  {
    "url": "assets/js/app.cda18a23.js",
    "revision": "0234bff6bffcf4acb73aa80ecdb4997e"
  },
  {
    "url": "example/custom.html",
    "revision": "1fa154f594109f57095bca07b9588461"
  },
  {
    "url": "example/demo.html",
    "revision": "71fdfe1099a7711c83b891135f970e05"
  },
  {
    "url": "example/index.html",
    "revision": "eb497f5413c2897d9a7604e1d0d5d487"
  },
  {
    "url": "example/vuepress.html",
    "revision": "7fe395d04a8e5ed3a19ead500105d2a7"
  },
  {
    "url": "index.html",
    "revision": "90665501a1a759f388e8f61f95846401"
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
