
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', (e) => {
  let transcript = [...e.results]
    .map(result => result[0])
    .map(result => result.transcript)
    .join('');

  transcript = transcript
    .replace(/poop/gi, '💩')
    // .replace(/love/gi, '😍')
    .replace(/starry eyed/gi, '🤩')
    .replace(/puke/gi, '🤮')
    .replace(/giant/gi, '👹')
    .replace(/baby/gi, '👶')
    .replace(/hair guy/gi, '💂')
    .replace(/angel/gi, '👼')
    .replace(/wizard/gi, '🧙‍♂')
    .replace(/vampire/gi, '🧛‍♂️')
    .replace(/zombie/gi, '🧟')
    .replace(/surfer/gi, '🏄')
    .replace(/juggling man/gi, '🤹')
    .replace(/live long and prosper/gi, '🖖')
    .replace(/Hi-5|high five/gi, '🤚')
    .replace(/fist bump/gi, '🤛')
    .replace(/fox/gi, '🦊')
    .replace(/dog/gi, '🐕')
    .replace(/i love you/gi, '🤟');

  p.textContent = transcript;

  if (e.results[0].isFinal) {
    p = document.createElement('p');
    words.appendChild(p);
  }
});

recognition.addEventListener('end', recognition.start);

recognition.start();
