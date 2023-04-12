let checkboxWithLabelContainer = document.getElementById('checkboxWithLabelContainer');
checkboxWithLabelContainer.classList.add('checkboxWithLabelContainer');

let inputEl = document.createElement('input');
inputEl.setAttribute('type', 'checkbox');
inputEl.setAttribute('id', 'checkbox');
checkboxWithLabelContainer.appendChild(inputEl);

let labelEl = document.createElement('label');
labelEl.setAttribute('for', 'checkbox');
labelEl.setAttribute('id', 'checkboxLabel')
labelEl.textContent = 'Click Me!';
labelEl.classList.add('label-element')
checkboxWithLabelContainer.appendChild(labelEl);