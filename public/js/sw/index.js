self.addEventListener('fetch', function(event) {
  // console.log('------ Match Event ------');
  // console.log(event.request.url);

  if (/.*\.jpg$/.test(event.request.url)) {
    event.respondWith(
      fetch('/imgs/dr-evil.gif')
    )
  }

});
