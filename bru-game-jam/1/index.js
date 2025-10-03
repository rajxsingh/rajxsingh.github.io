document.addEventListener("DOMContentLoaded", function () {
  const aimContainer = document.getElementById("aim-container");
  const target = document.getElementById("target");
  let mode = "EASY";

  document.addEventListener("keydown", function (event) {
    if (event.key === "e") {
      mode = "EASY";
    }
    if (event.key === "h") {
      mode = "HARD";
    }
  });

  document.addEventListener("click", function (event) {
    event.preventDefault();
    const mouseX = event.clientX + 3;
    const mouseY = event.clientY + 17.5;
    const shot = document.createElement("div");

    shot.classList.add("shot");

    shot.style.left = `${mouseX}px`;
    shot.style.top = `${mouseY}px`;

    shot.style.display = "block";

    document.body.append(shot);

    const targetRect = target.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2 - 5;
    const targetY = targetRect.top + targetRect.height / 2 - 5;
    const distance = Math.sqrt(
      (mouseX - targetX) ** 2 + (mouseY - targetY) ** 2
    );

    if (distance < 30) alert("👍");

    setTimeout(function () {
      shot.style.display = "none";
    }, 3000);
  });

  document.addEventListener("mousemove", function (event) {
    event.preventDefault();
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const targetRect = target.getBoundingClientRect();
    const targetX = targetRect.left + targetRect.width / 2;
    const targetY = targetRect.top + targetRect.height / 2;
    const deltaX = targetX - mouseX;
    const deltaY = targetY - mouseY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const maxDistanceAim = 300;

    aimContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;

    if (mode === "HARD" && distance < maxDistanceAim) {
      const angle = Math.atan2(deltaY, deltaX);
      let newX = targetX + maxDistanceAim * Math.cos(angle);
      let newY = targetY + maxDistanceAim * Math.sin(angle);

      if (
        newX < 0 ||
        newX > window.innerWidth ||
        newY < 0 ||
        newY > window.innerHeight
      ) {
        const adjustedAngle = angle + Math.PI / 2;
        newX = targetX + maxDistanceAim * Math.cos(adjustedAngle);
        newY = targetY + maxDistanceAim * Math.sin(adjustedAngle);
      }
      target.style.transform = `translate(${newX}px, ${newY}px)`;
    }
  });

  setInterval(updateCirclePosition, 1000);
});

function updateCirclePosition() {
  const maxX = window.innerWidth - target.clientWidth;
  const maxY = window.innerHeight - target.clientHeight;
  const newX = Math.random() * maxX;
  const newY = Math.random() * maxY;

  target.style.transform = `translate(${newX}px, ${newY}px)`;
}
