const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const bandsList = document.getElementById('bands');

function stripArticle(bandName) {
  return bandName.replace(/^(a |the |an )/i, '');
}

function sortWOutArticle(a, b) {
  return (stripArticle(a) > stripArticle(b) ? 1 : -1);
}

function mapListItems(listItems) {
  return listItems.map(item => `
    <li>${item}</li>`).join('');
}

bands.sort(sortWOutArticle);
bandsList.innerHTML = mapListItems(bands);
