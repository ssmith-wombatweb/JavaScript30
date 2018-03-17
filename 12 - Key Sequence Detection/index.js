const pressed = [];
const secretCode = 'simeon';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);

  if (pressed.join('') === secretCode) {
    console.log('DING DING!');
  }
});
