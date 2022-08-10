function showDelayedText() {
  let delayTime = prompt('Please enter desired delay time in ms: ');

  if (isNaN(delayTime) === true || delayTime < 0) {
    alert('Please enter positive numeric value');
    return;
  }

  function f(delayTime) {
    setTimeout(function () {
      alert(`Hi, I'm ${delayTime / 1000} seconds late!`);
    }, delayTime);
  }

  f(delayTime);
}

showDelayedText();
