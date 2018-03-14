// Get Elements
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fullscreen = player.querySelector('.player__button.fullscreen');

// Build Functions
function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
}

function skip() {
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  video[this.name] = this.value;
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}

function toggleFullscreen() {
  const windowFullscreen =
  (document.webkitIsFullScreen || document.mozIsFullScreen || document.fullscreen) ? true : false;

  if (player.requestFullscreen) {
    if (windowFullscreen) document.cancelFullscreen();
    else player.requestFullscreen();
  } else if (player.mozRequestFullScreen) {
    if (windowFullscreen) document.mozCancelFullScreen();
    else player.mozRequestFullScreen();
  } else if (player.webkitRequestFullscreen) {
    if (windowFullscreen) document.webkitCancelFullScreen();
    else player.webkitRequestFullScreen();
  }

  const fullscreenTop = fullscreen.querySelector('.top');
  const fullscreenBottom = fullscreen.querySelector('.bottom');

  if (windowFullscreen) {
    fullscreenTop.textContent = '⌜ ⌝';
    fullscreenBottom.textContent = '⌞ ⌟';
  } else {
    fullscreenTop.textContent = '⌟ ⌞';
    fullscreenBottom.textContent = '⌝ ⌜';
  }
}

// Hook Event Listeners
window.addEventListener('keypress', (e) => {
  if (e.keyCode === 32) togglePlay();
});

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);

toggle.addEventListener('click', togglePlay);

skipButtons.forEach(skipButton =>
  skipButton.addEventListener('click', skip));

ranges.forEach(range =>
  range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range =>
  range.addEventListener('mousemove', handleRangeUpdate));

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', e => mousedown && scrub(e));
progress.addEventListener('mousedown', () => { mousedown = true; });
progress.addEventListener('mouseup', () => { mousedown = false; });

fullscreen.addEventListener('click', toggleFullscreen);
