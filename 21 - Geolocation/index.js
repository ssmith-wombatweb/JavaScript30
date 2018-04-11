const arrow = document.querySelector('.arrow');
const speedValue = document.querySelector('.speed-value');

navigator.geolocation.watchPosition(
  (data) => {
    const { heading, speed: kmph } = data.coords;
    arrow.style.transform = `rotate(${heading}deg)`;
    speedValue.textContent = kmph.toFixed(2);
  },
  err => console.error(err),
);
