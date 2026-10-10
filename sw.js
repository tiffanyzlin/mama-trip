self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const k of await caches.keys())if(k.startsWith('mama-trip-'))await caches.delete(k);await self.registration.unregister();})()));
self.addEventListener('fetch',()=>{});