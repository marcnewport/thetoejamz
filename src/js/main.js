document.addEventListener("DOMContentLoaded", function(event) {

  const nav = document.querySelector('nav');
  const audio = document.querySelector('audio');
  const baby = document.querySelector('.baby');

  baby.addEventListener('click', () => {
    nav.classList.toggle('is-showing');
    audio.currentTime = 0;
    audio.play();
  });
});
