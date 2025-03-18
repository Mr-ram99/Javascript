let intervalIds = [];

function clearAllIntervals() {
  intervalIds.forEach((id) => clearTimeout(id));
}

function mySetInterval(callback, delay) {
  const id = setInterval(callback, delay);
  intervalIds.push(id);
}

mySetInterval(() => console.log("2 sec interval"), 2000);
mySetInterval(() => console.log("4 sec interval"), 4000);
mySetInterval(() => console.log("6 sec interval"), 6000);

clearAllIntervals();
