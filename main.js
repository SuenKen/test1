let swRegistration;
if ('serviceWorker' in navigator && 'PushManager' in window) {
  console.log('Service Worker and Push is supported');
navigator.serviceWorker
    .register('sw.js')
    .then(swReg => {
      console.log('Service Worker is registered', swReg);
      swRegistration = swReg;
    })
    .catch(err => console.log('Service Worker register error.'));
} else {
  console.log('Push is not supported');
}
