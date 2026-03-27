importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB7dexcusDxRnLtiX8FKM1fMy49-SjdbYg",
  authDomain: "caffeine-veins.firebaseapp.com",
  projectId: "caffeine-veins",
  storageBucket: "caffeine-veins.firebasestorage.app",
  messagingSenderId: "584799949999",
  appId: "1:584799949999:web:c947ae4472fa9b6bf0b05a"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message:', payload);

  const notificationTitle = payload.notification?.title || 'Caffeine Veins';
  const notificationBody = payload.notification?.body || 'You have a new notification';
  const notificationData = payload.data || {};

  self.registration.showNotification(notificationTitle, {
    body: notificationBody,
    icon: '/images/vietnamese_coffee_logo.svg',
    badge: '/images/vietnamese_coffee_logo.svg',
    data: notificationData,
    tag: 'order-notification',
    requireInteraction: true
  });
});

self.addEventListener('notificationclick', (event) => {
  console.log('[firebase-messaging-sw.js] Notification click:', event);
  event.notification.close();

  const orderId = event.notification.data?.orderId;
  const urlToOpen = orderId ? `/orders/${orderId}` : '/';

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((windowClients) => {
      for (const client of windowClients) {
        if (client.url.includes(self.location.origin) && 'focus' in client) {
          client.navigate(urlToOpen);
          return client.focus();
        }
      }
      return clients.openWindow(urlToOpen);
    })
  );
});
