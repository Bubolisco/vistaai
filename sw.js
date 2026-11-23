const CACHE='vistai-shell-v12';
const SHELL=['./','./index.html','./manifest.webmanifest','./assets/logo-vistaai.webp','./assets/logo-anotaai.webp','./assets/pix-vistaai.jpeg'];
const LIBS=[
  'https://cdn.jsdelivr.net/npm/html5-qrcode@2.3.8/html5-qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js',
  'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js'
];
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  await cache.addAll(SHELL);
  await Promise.all(LIBS.map(async url=>{try{const response=await fetch(new Request(url,{mode:'no-cors'}));await cache.put(url,response)}catch{}}));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{for(const key of await caches.keys())if((key.startsWith('vistai-shell-')||key.startsWith('vistos-historia-'))&&key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const url=new URL(event.request.url);if(event.request.method!=='GET')return;if(url.origin===self.location.origin){event.respondWith((async()=>{const hit=await caches.match(event.request);if(hit)return hit;try{return await fetch(event.request)}catch{return caches.match('./index.html')}})());return}if(LIBS.includes(event.request.url))event.respondWith((async()=>{const hit=await caches.match(event.request.url);if(hit)return hit;try{const response=await fetch(event.request);const cache=await caches.open(CACHE);await cache.put(event.request.url,response.clone());return response}catch{return new Response('',{status:504})}})())});
