async function showDelayedText() {
  let delayTime = prompt('Please enter desired delay time in ms: ');

  function f(delayTime) {
    setTimeout(function () {
      alert(`Hi, I'm ${delayTime / 1000} seconds late!`);
    }, delayTime);
  }

  f(delayTime);
}

showDelayedText();
