const videoEls = [...document.querySelectorAll('.videos > [data-time]')];

function getMinSec(time) {
  const [min, sec] = time.split(':').map(parseFloat);
  return {
    min,
    sec,
  };
}

function addTimes(elements) {
  const totalTime = elements.reduce((timeTotal, element) => {
    const newTimeArr = getMinSec(element.dataset.time);

    const seconds = newTimeArr.sec + timeTotal.sec;
    const minutes = newTimeArr.min + timeTotal.min + Math.floor(seconds / 60);
    const hours = timeTotal.hour + Math.floor(minutes / 60);

    return {
      hour: hours,
      min: minutes % 60,
      sec: seconds % 60,
    };
  }, {
    hour: 0,
    min: 0,
    sec: 0,
  });

  return totalTime;
}

const time = addTimes(videoEls);
console.log(time);
