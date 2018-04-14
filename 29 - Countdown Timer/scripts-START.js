let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const documentTitle = document.title;
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function displayTimeLeft(seconds) {
  const hour = Math.floor(seconds / 3600);
  const min = Math.floor((seconds % 3600) / 60);
  const sec = seconds % 60;
  const displayTime = `${hour}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
  timerDisplay.textContent = displayTime;
  document.title = `${displayTime} - ${documentTitle}`;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const min = end.getMinutes();
  endTime.textContent = `Be back at ${hour % 12}:${min < 10 ? `0${min}` : min} ${hour < 12 ? 'a.m.' : 'p.m.'}`;
}


function timer(seconds) {
  if (countdown) { clearInterval(countdown); }
  const now = Date.now();
  const then = now + (seconds * 1000);

  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function startTimer() {
  const seconds = parseInt(this.dataset.time, 0);
  timer(seconds);
}

function submitForm(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', submitForm);
