// 홈 화면 앱 설치용 (데이터는 저장하지 않음 — 항상 최신 내용을 서버에서 받음)
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
