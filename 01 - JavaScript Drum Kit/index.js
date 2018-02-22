// eslint browser

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}" ]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}" ]`);

  if (!audio) return;
  if (!key) return;

  audio.currentTime = 0;

  key.classList.add('playing');
  audio.play();
}

window.addEventListener('keydown', playSound);

const keys = document.querySelectorAll('.key');

function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

keys.forEach((key) => {
  key.addEventListener('transitionend', removeTransition);
});
