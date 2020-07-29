const box = document.getElementById("boxToMove");

const move = (distance, duration, el) => {
  const start = performance.now();

  const moveBox = current => {
    const elapsed = current - start;
    const progress = elapsed / duration;
    const amtToMove = progress * distance;

    el.style.transform = `translateX(${amtToMove}px)`;

    if (amtToMove < distance) {
      requestAnimationFrame(moveBox);
    }
  };

  requestAnimationFrame(moveBox);
};

box.onclick = function () {
  move(500, 5000, this);
};
