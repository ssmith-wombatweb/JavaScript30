const hourHand = document.querySelector('.hand.hour-hand');
const minuteHand = document.querySelector('.hand.min-hand');
const secondHand = document.querySelector('.hand.second-hand');

function setRotation(increment, segments) {
  return `rotate(${increment * (360 / segments)}deg)`;
}

function updateClock(hourH, minuteH, secondH) {
  const time = new Date();
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  hourH.style.transform = setRotation(hour, 12);
  minuteH.style.transform = setRotation(minute, 60);
  secondH.style.transform = setRotation(second, 60);
}

document.onload = updateClock(hourHand, minuteHand, secondHand);

setInterval(() => updateClock(hourHand, minuteHand, secondHand), 1000);
