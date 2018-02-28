const hourHand = document.querySelector('.hand.hour-hand');
const minuteHand = document.querySelector('.hand.min-hand');
const secondHand = document.querySelector('.hand.second-hand');

function retrieveRotation(transform) {
  if (transform === '') return null;
  const firstParenIndex = transform.indexOf('(');
  const degIndex = transform.indexOf('deg');
  const rotationText = transform.slice(firstParenIndex + 1, degIndex);
  const rotation = parseInt(rotationText, 10);
  return rotation;
}

function setRotation(increment, segments, transform) {
  const rotation = retrieveRotation(transform);
  if (!rotation) return `rotate(${(increment * (360 / segments)) + 90}deg)`;
  return `rotate(${rotation + (360 / segments)}deg)`;
}

function initClock(hourH, minuteH, secondH) {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  secondH.style.transform = setRotation(sec, 60, secondH.style.transform);
  minuteH.style.transform = setRotation(min, 60, minuteH.style.transform);
  hourH.style.transform = setRotation(hour, 12, hourH.style.transform);
}

function updateClock(hourH, minuteH, secondH) {
  const time = new Date();
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  secondH.style.transform = setRotation(sec, 60, secondH.style.transform);

  if (sec === 0) {
    minuteH.style.transform = setRotation(min, 60, minuteH.style.transform);
  }

  if (min === 0) {
    hourH.style.transform = setRotation(hour, 12, hourH.style.transform);
  }
}

document.onload = initClock(hourHand, minuteHand, secondHand);

setInterval(() => updateClock(hourHand, minuteHand, secondHand), 1000);
