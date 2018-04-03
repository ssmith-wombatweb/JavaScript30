const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
const uncheckItems = document.querySelector('input[value="Uncheck All"]');
const checkItems = document.querySelector('input[value="Check All"]');
const removeItems = document.querySelector('input[value="Remove All"]');

function populateList(plates = [], list) {
  const platesList = list;
  platesList.innerHTML = plates.map((plate, i) => `
    <li>
      <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
      <label for="item${i}">${plate.text}</label>
    </li>
  `).join('');
}

function addItem(e) {
  e.preventDefault();
  const text = (this.querySelector('[name=item]')).value;
  const item = {
    text,
    done: false,
  };
  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
  this.reset();
}

function toggleDone(e) {
  if (!e.target.matches('input')) return;
  const { target } = e;
  const { index } = target.dataset;
  items[index].done = !items[index].done;
  localStorage.setItem('items', JSON.stringify(items));
}

function checkAll() {
  items.forEach((item) => {
    item.done = true;
  });
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function uncheckAll() {
  items.forEach((item) => {
    item.done = false;
  });
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

function removeAll() {
  items.splice(0, items.length);
  populateList(items, itemsList);
  localStorage.setItem('items', JSON.stringify(items));
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);
checkItems.addEventListener('click', checkAll);
uncheckItems.addEventListener('click', uncheckAll);
removeItems.addEventListener('click', removeAll);
populateList(items, itemsList);
