const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".plates");
const items = getItems();
function addItem(e){
    e.preventDefault();
    const text = this.querySelector('[name=item]').value;
    const item = {
        text,
        done: false
    };
    items.push(item);
    populateList(items, itemsList);
    save(item);
    this.reset();
}
function getItems(){
    return JSON.parse(localStorage.getItem('plates') ||'[]');
}
function populateList(plates=[], platesList){
    platesList.innerHTML = plates.map((plate, index)=>{
        return `
        <li>
          <input type="checkbox" data-index="${index}" id="item${index}" ${(plate.done&&'checked'||'')} />
          <label for="item${index}">${plate.text}</label>
        </li>`
    }).join('');
}

function save(){
    localStorage.setItem('plates', JSON.stringify(items));
}
function toggleDone(e){
    if(!e.target.matches('input')){
        return;
    }
    const index = e.target.dataset['index'];
    items[index].done = e.target.checked;
    save();
}
populateList(items, itemsList);
addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleDone);