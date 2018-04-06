const videoEls = [...document.getElementsByClassName('videos')[0].children];

function getMinSec(time) {
  const timeArr = time.split(':');
  return {
    min: parseFloat(timeArr[0]),
    sec: parseFloat(timeArr[1]),
  };
}

function calcTimes(elements) {
  return elements.reduce((timeTotal, element) => {
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
}

const time = calcTimes(videoEls);
console.log(time);
