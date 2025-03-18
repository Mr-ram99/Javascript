// setTimeout(callback, delay, ...args);

function mySetTimeout(callback, delay, ...args) {
  let timeoutId = { cleared: false };
  let start = Date.now();
  console.log("timeout started");

  function check() {
    if (!timeoutId.cleared && Date.now() - start >= delay) {
      callback(...args);
    } else {
      requestAnimationFrame(check);
    }
  }

  requestAnimationFrame(check);
  return timeoutId;
}

function myClearTimeout(timeoutId) {
  timeoutId.cleared = true;
}

let id = mySetTimeout(() => console.log("timeout called"), 2000);
