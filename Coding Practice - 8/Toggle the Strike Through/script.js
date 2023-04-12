let checkBoxWithLabelContainer = document.getElementById('checkBoxWithLabelContainer');

let checkbox = document.createElement('input');
checkbox.setAttribute('type', 'checkbox');
checkbox.setAttribute('id', 'checkbox');
checkBoxWithLabelContainer.appendChild(checkbox);

let label = document.createElement('label');
label.textContent = 'I am a label';
label.setAttribute('for', 'checkbox');
label.setAttribute('id', 'checkboxLabel');
label.classList.add('ml-2');
checkBoxWithLabelContainer.appendChild(label);

checkbox.onclick = function(){
    checkbox.cheked;
    label.classList.toggle('label-text');
    
};