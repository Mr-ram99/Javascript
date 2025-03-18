let timeoutIds = [];

function clearAllTimeouts() {
  timeoutIds.forEach((id) => clearTimeout(id));
}

function mySetTimout(callback, delay) {
  const id = setTimeout(callback, delay);
  timeoutIds.push(id);
}

mySetTimout(() => console.log("Hello"), 2000);
mySetTimout(() => console.log("Hello"), 4000);
mySetTimout(() => console.log("Hello"), 6000);

// clearAllTimeouts();
