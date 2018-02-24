const hourHand = document.querySelector('.hand.hour-hand');
const minuteHand = document.querySelector('.hand.min-hand');
const secondHand = document.querySelector('.hand.second-hand');

const hourTransition = window.getComputedStyle(hourHand).transition;

function setRotation(increment, segments) {
  return `rotate(${(increment * (360 / segments)) + 90}deg)`;
}

function transitionState(increment, element, defaultTransition) {
  if (increment === 0) {
    element.style.transition = 'none';
  } else {
    element.style.transition = defaultTransition;
  }
}

function updateClock(hourH, minuteH, secondH, defaultTransition) {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  transitionState(hour, hourH, defaultTransition);
  transitionState(minute, minuteH, defaultTransition);
  transitionState(second, secondH, defaultTransition);

  hourH.style.transform = setRotation(hour, 12);
  minuteH.style.transform = setRotation(minute, 60);
  secondH.style.transform = setRotation(second, 60);
}

document.onload = updateClock(hourHand, minuteHand, secondHand, hourTransition);

setInterval(() => updateClock(hourHand, minuteHand, secondHand, hourTransition), 1000);
