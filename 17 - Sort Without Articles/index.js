const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.getElementById('bands');

function sortWOutArticle(a, b) {
  const articles = [
    'The',
    'A',
    'An',
  ];

  const aWords = a.split(' ');
  const bWords = b.split(' ');

  if (articles.includes(aWords[0])) {
    aWords.splice(0, 1);
  }

  if (articles.includes(bWords[0])) {
    bWords.splice(0, 1);
  }

  const aPhrase = aWords.join(' ');
  const bPhrase = bWords.join(' ');

  if (aPhrase < bPhrase) return -1;
  if (aPhrase > bPhrase) return 1;
  return 0;
}

function mapList(listItems) {
  return listItems.map(item => `
    <li>${item}</li>`).join('');
}

bands.sort(sortWOutArticle);
bandsList.innerHTML = mapList(bands);
