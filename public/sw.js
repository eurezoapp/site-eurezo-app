const CACHE_NAME = 'santo-terco-v1';
const CACHE = "pwabuilder-page";
const offlineFallbackPage = "offline.html"; // Substitua com o nome correto do seu arquivo offline

const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
  '/assets/index.css',
  '/assets/index.js'
];

// Importando o Workbox
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js');

// Instalar o Service Worker e armazenar arquivos no cache
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('Arquivos cacheados durante a instalação');
            return cache.addAll(urlsToCache)
              .then(() => {
                // Adicionar a página offline ao cache durante a instalação
                return caches.open(CACHE).then((cache) => {
                  cache.add(offlineFallbackPage);
                });
              });
        })
    );
    self.skipWaiting(); // Força a ativação imediata do Service Worker
});

// Ativar o Service Worker e limpar caches antigos
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME]; // Manter apenas o cache mais recente
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        console.log('Deletando cache antigo: ', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim()) // Assume o controle imediatamente
    );
});

// Habilitar a navegação previada com Workbox (caso seja suportado)
if (workbox.navigationPreload.isSupported()) {
  workbox.navigationPreload.enable();
}

// Usar uma estratégia de cache (StaleWhileRevalidate)
workbox.routing.registerRoute(
  new RegExp('/*'),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: CACHE_NAME
  })
);

// Fallback offline quando o usuário estiver desconectado
self.addEventListener('fetch', (event) => {
    if (event.request.mode === 'navigate') {
        event.respondWith((async () => {
            try {
                const preloadResp = await event.preloadResponse;

                if (preloadResp) {
                    return preloadResp;
                }

                const networkResp = await fetch(event.request);
                return networkResp;
            } catch (error) {
                const cache = await caches.open(CACHE);
                const cachedResp = await cache.match(offlineFallbackPage);
                return cachedResp;
            }
        })());
    } else {
        event.respondWith(
            caches.match(event.request).then((cachedResponse) => {
                // Se encontrar o arquivo no cache, retorna ele
                if (cachedResponse) {
                    console.log('Retornando do cache:', event.request.url);
                    return cachedResponse;
                }
                // Caso não encontre, tenta a requisição normal
                return fetch(event.request);
            })
        );
    }
});

// Ouvir mensagem para controlar a atualização do Service Worker
self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

// Detectar e notificar atualizações para o frontend
self.addEventListener('controllerchange', () => {
  console.log('O Service Worker foi atualizado.');
  clients.matchAll({ includeUncontrolled: true }).then((clients) => {
    clients.forEach(client => client.postMessage({ type: 'UPDATE_READY' }));
  });
});
