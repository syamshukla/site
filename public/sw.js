if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>n(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"0c4b639b25404e6710656b01fb567257"},{url:"/_next/static/KMSYJngXU7SHXRRp85jum/_buildManifest.js",revision:"39c04c408085e9912adc25c833c9fca1"},{url:"/_next/static/KMSYJngXU7SHXRRp85jum/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/22-d80e2c34d57c9c4e.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/427-56e2a7d89bab979a.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/444-44e3999bae5f3965.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/472-62e506fc209c53be.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/986-c166078e4488aa79.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/_not-found-88ad8d29ad8d348e.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/layout-3682ec905edeebfd.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/page-ec7d16e2a9256520.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/projects/page-a0248720df72bd5c.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/resume/page-a25f1da0dc380699.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/app/stats/page-ade80b017f931118.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/fd9d1056-485d6cbe72bd0172.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/main-5178a2abab64f03c.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/main-app-500ce2949601fe09.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/pages/_app-ee276fea40a4b191.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/pages/_error-deeb844d2074b9d8.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-7390c2214b0df687.js",revision:"KMSYJngXU7SHXRRp85jum"},{url:"/_next/static/css/39e5c735740e2e32.css",revision:"39e5c735740e2e32"},{url:"/_next/static/media/d82a8a076d0105b5-s.p.woff2",revision:"8c079d90bff2b2e94b656a057e65a42d"},{url:"/icons/icon-192x192.png",revision:"7864ec6971462cb1ecfc997ed66ba9da"},{url:"/icons/icon-256x256.png",revision:"16378cf6cc97dd5b0a07725aae31cef3"},{url:"/icons/icon-384x384.png",revision:"d3888734a7e01e351dfa0a5d28850754"},{url:"/icons/icon-512x512.png",revision:"a4ce5b77d4323d808044de5ca13af4b3"},{url:"/icons/maskable.png",revision:"49e2c6f038a66443f8d53e7c7d5e37b2"},{url:"/images/avatar.jpg",revision:"7f060525409ae9e34f59a57ee5d205df"},{url:"/images/avatar.png",revision:"a6ccb3d5a4e9f0ab3bc1944ae7382a86"},{url:"/manifest.json",revision:"ca8e331f06d65979619e0e64c9aa75f0"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
