const checkBoxes = document.querySelectorAll('.item input');
let firstItem;
let lastItem;
let shiftPressed = false;

function detectShift(e) {
  shiftPressed = e.shiftKey;
  if (!shiftPressed) {
    if (firstItem !== undefined) checkBoxes[firstItem].parentElement.classList.remove('selected');

    if (lastItem !== undefined) checkBoxes[lastItem].parentElement.classList.remove('selected');
    firstItem = undefined;
    lastItem = undefined;
  }
}

document.addEventListener('keyup', detectShift);
document.addEventListener('keydown', detectShift);

function selectCheckboxes(e, i) {
  let descending;
  firstItem = shiftPressed ? firstItem : undefined;
  lastItem = shiftPressed ? lastItem : undefined;

  if (firstItem !== undefined) checkBoxes[firstItem].parentElement.classList.remove('selected');

  if (lastItem !== undefined) checkBoxes[lastItem].parentElement.classList.remove('selected');

  if (shiftPressed && firstItem === undefined) {
    firstItem = i;
    checkBoxes[firstItem].parentElement.classList.add('selected');
  } else if (shiftPressed && lastItem === undefined) {
    lastItem = i;
    checkBoxes[lastItem].parentElement.classList.add('selected');
  } else if (shiftPressed && lastItem !== undefined) {
    firstItem = lastItem;
    lastItem = i;
    checkBoxes[lastItem].parentElement.classList.add('selected');
  }

  if (firstItem < lastItem) {
    descending = true;
  } else if (firstItem > lastItem) {
    descending = false;
  }

  for (let x = 1; x < (descending ? lastItem - firstItem : firstItem - lastItem); x += 1) {
    if (descending) {
      checkBoxes[firstItem + x].checked = !checkBoxes[firstItem + x].checked;
    } else {
      checkBoxes[firstItem - x].checked = !checkBoxes[firstItem - x].checked;
    }
  }
}

checkBoxes.forEach((checkBox, i) =>
  checkBox
    .addEventListener(
      'click',
      e => selectCheckboxes(e, i),
    ));
