document.addEventListener("click", (e) => {
  let existingCircles = document.querySelectorAll(".circle");

  if (existingCircles.length === 2) {
    existingCircles.forEach((element) => {
      element.remove();
    });
    return;
  }

  const radius = 50;

  let random = Math.floor(Math.random() * 1000);

  //just to keep circles in visible screen
  while (
    random > window.innerWidth - radius * 2 &&
    random > window.innerHeight - radius * 2
  ) {
    random = Math.floor(Math.random() * 1000);
  }

  const circle = document.createElement("div");
  circle.classList.add("circle");
  const styles = circle.style;
  styles.width = radius * 2 + "px";
  styles.height = radius * 2 + "px";
  styles.top = random + "px";
  styles.left = random + "px";

  document.body.appendChild(circle);
  existingCircles = document.querySelectorAll(".circle");

  if (existingCircles.length === 2) {
    const circle1 = existingCircles[0];
    const circle2 = existingCircles[1];

    const centerX1 = circle1.getBoundingClientRect().left + radius;
    const centerY1 = circle1.getBoundingClientRect().top + radius;

    const centerX2 = circle2.getBoundingClientRect().left + radius;
    const centerY2 = circle2.getBoundingClientRect().top + radius;

    if (
      Math.sqrt(
        (centerX1 - centerX2) * (centerX1 - centerX2) +
          (centerY1 - centerY2) * (centerY1 - centerY2)
      ) <
      radius * 2
    ) {
      alert("Intersect");
    } else {
      alert("Not intersect");
    }
  }
});
