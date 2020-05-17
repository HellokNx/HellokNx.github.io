/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["E:/workstation/blog/public/2020/05/16/hello-world/index.html","1356648adb680e19b8dc08f6ce794832"],["E:/workstation/blog/public/2020/05/16/关于/index.html","c4bb819a294c41159ae86b783664faaa"],["E:/workstation/blog/public/2020/05/17/404/404/index.html","d129d7f99aee83cec3419918cf6121c4"],["E:/workstation/blog/public/2020/05/17/热门文章/index.html","1ed4ab8a9404287ee2874f9ced9507f6"],["E:/workstation/blog/public/Yun.png","7d146507ca781cdb7995afaa448a4101"],["E:/workstation/blog/public/about/index.html","0ea9feb01e785fc7a24ad8122cecac7f"],["E:/workstation/blog/public/archives/2020/05/index.html","9f7ade0ce447c50a541ac5322dbac1f4"],["E:/workstation/blog/public/archives/2020/index.html","6dd9245edca54125e6b2e267ae4e4ab3"],["E:/workstation/blog/public/archives/index.html","0c8c5271b68c95a535115d48cc8895d0"],["E:/workstation/blog/public/categories/index.html","6501de89fc5f11a7d0f071b3629c9694"],["E:/workstation/blog/public/css/fonts/fontawesome-webfont.eot","8b27bc96115c2d24350f0d09e6a9433f"],["E:/workstation/blog/public/css/fonts/fontawesome-webfont.svg","b526f0637e912fae979bcfe9f0c9bd74"],["E:/workstation/blog/public/css/fonts/fontawesome-webfont.ttf","dcb26c7239d850266941e80370e207c1"],["E:/workstation/blog/public/css/fonts/fontawesome-webfont.woff","3293616ec0c605c7c2db25829a0a509e"],["E:/workstation/blog/public/css/hexo-theme-yun.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/workstation/blog/public/css/images/banner.jpg","0394d7ba5b310b5037d2a139bef63fa4"],["E:/workstation/blog/public/css/index.css","4bfca1499157c20c0bd38605a1c620ea"],["E:/workstation/blog/public/css/style.css","63d783cb64a4720f00c80bd91bc95bc5"],["E:/workstation/blog/public/fancybox/blank.gif","325472601571f31e1bf00674c368d335"],["E:/workstation/blog/public/fancybox/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["E:/workstation/blog/public/fancybox/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["E:/workstation/blog/public/fancybox/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["E:/workstation/blog/public/fancybox/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["E:/workstation/blog/public/fancybox/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["E:/workstation/blog/public/fancybox/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["E:/workstation/blog/public/fancybox/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["E:/workstation/blog/public/fancybox/helpers/jquery.fancybox-buttons.js","f12190546a9cc3cf28c99ce3839c35ae"],["E:/workstation/blog/public/fancybox/helpers/jquery.fancybox-media.js","a43c71c37d726096a48b0d6d654dc25c"],["E:/workstation/blog/public/fancybox/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["E:/workstation/blog/public/fancybox/helpers/jquery.fancybox-thumbs.js","b3d9cb05b56033141ae6f6358df2763f"],["E:/workstation/blog/public/fancybox/jquery.fancybox.css","fd7de7df5125265bbd78984d637cf90d"],["E:/workstation/blog/public/fancybox/jquery.fancybox.js","627b3fae16845d1942d3cd4270098111"],["E:/workstation/blog/public/fancybox/jquery.fancybox.pack.js","b6d0034563763b4bb7da451d54301c9f"],["E:/workstation/blog/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["E:/workstation/blog/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["E:/workstation/blog/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["E:/workstation/blog/public/friends/index.html","d00a858b3883f2e1851b537b33ad3f7a"],["E:/workstation/blog/public/images/alipay.png","586323d1cca0d7e38ec328e5be2ef016"],["E:/workstation/blog/public/images/touch-icon.png","f66297e1b810f66b84698c24db3309d0"],["E:/workstation/blog/public/images/wechat.png","3b3397a6212ff9b0b3d2c680be4e5b56"],["E:/workstation/blog/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["E:/workstation/blog/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["E:/workstation/blog/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["E:/workstation/blog/public/index.html","a8b8318d7b1666593adfc61c761ebb8c"],["E:/workstation/blog/public/js/app.js","ea306851b6276a0ffeec351d138589e5"],["E:/workstation/blog/public/js/auth.js","4d0aa0aeadf97d2fe583d2fa216d100b"],["E:/workstation/blog/public/js/backTop.js","b9f245fcad2850789039a902f23023ec"],["E:/workstation/blog/public/js/copy.js","152487a651271613dcd1d1502b6c5f3b"],["E:/workstation/blog/public/js/gallery-decrypt.js","27c61f18afc43cd9d876638eaa537edb"],["E:/workstation/blog/public/js/header.js","782fe95f78fedd80a43741a60ed40d44"],["E:/workstation/blog/public/js/hexo-theme-yun.js","b07a1a632d96b748020add11fa03d03a"],["E:/workstation/blog/public/js/index.js","3313935fae0c96cfb52355a6234fd527"],["E:/workstation/blog/public/js/layer.js","352474b21abf954aec89f5e70d3d59fc"],["E:/workstation/blog/public/js/leancloud.js","db4663e41646608c095ae14a3db7c5af"],["E:/workstation/blog/public/js/mathjax.js","a2324882bf6ec3765efe35bc6244b1e8"],["E:/workstation/blog/public/js/passage.js","6770594664aad4896362453487a8cc70"],["E:/workstation/blog/public/js/pjax.js","01a50111045cfbee41faa4498498ee51"],["E:/workstation/blog/public/js/reward.js","55ea863d208686063634adad9e3b515d"],["E:/workstation/blog/public/js/say.js","7d33bc6b2115bac043b5f5e2be71fa47"],["E:/workstation/blog/public/js/script.js","568ed7f5b3c89db1ffcf20f2f63036f1"],["E:/workstation/blog/public/js/scroll.js","b756a951e5ff90a17824e5a0f67751f5"],["E:/workstation/blog/public/js/search.js","8c5e55f8a12105822ef6793c880f0aa7"],["E:/workstation/blog/public/js/search/algolia-search.js","0e350ca7c90fcbe844ee1f8b6c043ea8"],["E:/workstation/blog/public/js/search/local-search.js","1dcb860ddfce60d3d3843285d724ed69"],["E:/workstation/blog/public/js/share.js","2abf9fef5aac9b28b8266a0796aaf12d"],["E:/workstation/blog/public/js/sidebar.js","23a7808022b821bd9a9c6f6d6f592f6d"],["E:/workstation/blog/public/js/time.js","910159308b8a25ffb57b0a2130ecf208"],["E:/workstation/blog/public/js/ui/banner.js","9dfffae5bed61df482c57bed4a76b2dc"],["E:/workstation/blog/public/js/ui/fireworks.js","6741d8cb5c8efd3c41d4d33d80b22715"],["E:/workstation/blog/public/js/valine.js","430596db58e60567246c52c474816ee6"],["E:/workstation/blog/public/styles/components/highlight/diff.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/workstation/blog/public/styles/components/highlight/highlight.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/workstation/blog/public/styles/components/highlight/theme.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/workstation/blog/public/styles/components/highlight/var.css","d41d8cd98f00b204e9800998ecf8427e"],["E:/workstation/blog/public/tags/index.html","b28961bbe10a18e79bebe0c7a2cb1443"],["E:/workstation/blog/public/vendor/qrcode.min.js","517b55d3688ce9ef1085a3d9632bcb97"],["E:/workstation/blog/public/vendor/sha256.min.js","c226032b683f1ed879cabe261f8f7cc7"],["E:/workstation/blog/public/yun.svg","a164d73a598e333115ac07095baad966"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







