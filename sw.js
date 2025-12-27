const CACHE_NAME = 'poker-god-v5.9.5-complete'; // 更新版本號以清除舊快取
const ASSETS = [
  './',
  './index.html',
  './style.css',  // 新增
  './app.js',     // 新增
  './manifest.json',
  './icon.png'
];

// Install: 刪除舊快取
self.addEventListener('install', (e) => {
  self.skipWaiting(); // 強制立即接管
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      );
    }).then(() => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.addAll(ASSETS);
      });
    })
  );
});

// Activate: 立即控制頁面
self.addEventListener('activate', (e) => {
  e.waitUntil(self.clients.claim());
});

// Fetch: 網路優先策略 (Network First) - 確保每次都嘗試抓新版
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => {
      return caches.match(e.request);
    })
  );
});
