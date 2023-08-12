'use strict';

const blob = document.getElementById('blob');
const background = document.getElementById('background');

window.addEventListener("pointermove", ev => {
  const { clientX, clientY } = ev;

  if (blob.style.opacity === 0) {
    blob.style.opacity = 1;
  }

  blob.animate({
    top: `${clientY}px`,
    left: `${clientX}px`,
  }, { duration: 4000, fill: "forwards" });
});

document.body.addEventListener("pointerleave", () => {
  blob.animate({
    opacity: 0,
  }, { duration: 1000, fill: "forwards" });
});

document.body.addEventListener("pointerenter", () => {
  blob.animate({
    opacity: 1,
  }, { duration: 1000, fill: "forwards" });
});
