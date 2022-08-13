document.addEventListener('click', function (e) {
  new Promise(function (resolve) {
    setTimeout(() => resolve(), 4000);
  }).then(() => alert('Delayed text'));
});
