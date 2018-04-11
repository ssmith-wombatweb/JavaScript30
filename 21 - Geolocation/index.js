const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

navigator.geolocation.watchPosition((data) => {
  const { heading, speed: kmph } = data.coords;
  arrow.style.transform = `rotate(${heading}deg)`;
  speed.querySelector('.speed-value').textContent = kmph.toFixed(2);
},
err => console.error(err),
);
