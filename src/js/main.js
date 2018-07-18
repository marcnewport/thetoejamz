document.addEventListener("DOMContentLoaded", function(event) {
  const audio = document.querySelector('audio');
  const baby = document.querySelector('.baby');

  baby.addEventListener('click', () => {
    audio.play();
  })
});
