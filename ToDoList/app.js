const toggleList = document.getElementById('toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');
const listItems = document.getElementsByTagName('li');
const listUl = listDiv.querySelector('ul');
const lis = listUl.children;

//function to add the buttons to list item 
function attachListItemButtons(li){
    let up = document.createElement('button');
    up.className = 'up';
    up.textContent = 'Up';
    li.appendChild(up);
    let down = document.createElement('button');
    down.className = 'down';
    down.textContent = 'Down';
    li.appendChild(down);
    let remove = document.createElement('button');
    remove.className = 'remove';
    remove.textContent = 'Remove';
    li.appendChild(remove);
}

for(let i=0; i<lis.length; i += 1){
    attachListItemButtons(lis[i]);
}

// delete on mouse cilck, move up and down list elements
listUl.addEventListener('click', (event)=>{
    if(event.target.tagName == 'BUTTON'){
        if(event.target.className == 'remove'){
            let li = event.target.parentNode;
            let ul = li.parentNode;
            ul.removeChild(li);
        }
        if(event.target.className == 'up'){
            let li = event.target.parentNode;
            let prevLi = li.previousElementSibling;
            let ul = li.parentNode;
            if(prevLi){
                ul.insertBefore(li, prevLi);
            }
        }
        if(event.target.className == 'down'){
            let li = event.target.parentNode;
            let nextLi = li.nextElementSibling;
            let ul = li.parentNode;
            if(nextLi){
                ul.insertBefore(nextLi, li);
            }
        }
    }
})

// Capitalisation on mouse hover
// listDiv.addEventListener('mouseover', (event)=>{
//     if(event.target.tagName == 'LI'){
//         event.target.textContent = event.target.textContent.toUpperCase();
//     }
// })

// listDiv.addEventListener('mouseout', (event)=>{
//     if(event.target.tagName == 'LI'){
//         event.target.textContent = event.target.textContent.toLowerCase();
//     }
// })

// for(let i=0; i<listItems.length; i+=1){
//     listItems[i].addEventListener('mouseover', ()=>{
//         listItems[i].textContent = listItems[i].textContent.toUpperCase();
//     });
//     listItems[i].addEventListener('mouseout', ()=>{
//         listItems[i].textContent = listItems[i].textContent.toLowerCase();
//     });
// }



toggleList.addEventListener('click', () => {
    if(listDiv.style.display == 'none'){
        toggleList.textContent = 'Hide list';
        listDiv.style.display = 'block';
    }
    else{
        toggleList.textContent = 'Show list';
        listDiv.style.display = 'none';
    }
});


descriptionButton.addEventListener('click', () => {
    descriptionP.innerHTML = descriptionInput.value + ':';
    descriptionInput.value = '';
});


addItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.createElement('li');
    li.textContent = addItemInput.value;
    attachListItemButtons(li)
    ul.appendChild(li);
    addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
    let ul = document.getElementsByTagName('ul')[0];
    let li = document.querySelector('li:last-child');
    ul.removeChild(li);
});