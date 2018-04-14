const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');
let mouseDown = false;

function updateSpeed(e) {
  if (!mouseDown) return;
  const y = e.pageY - this.offsetTop;
  const speedHeight = this.offsetHeight;
  const percent = y / speedHeight;
  const minHeight = parseInt(bar.style.minHeight, 0) / 100;
  const speedMax = 4;
  const height = `${Math.round(percent * 100)}%`;
  const playbackRate = percent < minHeight ? minHeight * speedMax : percent * speedMax;
  bar.style.height = height;
  bar.textContent = `${playbackRate.toFixed(2)}x`;
  video.playbackRate = playbackRate;
}

function barClicked(e) {
  mouseDown = true;
  updateSpeed.call(this, e);
}

speed.addEventListener('mousedown', barClicked);
document.body.addEventListener('mouseup', () => { mouseDown = false; });
speed.addEventListener('mousemove', updateSpeed);
