import menus from "./data.js";

const container = document.getElementsByClassName('container')[0];
const listOfAll = document.createElement('ul');
listOfAll.classList.add('unordered-list')
container.appendChild(listOfAll);

menus.map((item) => {
    //LIST TITLE
    const listItem = document.createElement('li');
    const headerSpan = document.createElement('span');
    listOfAll.appendChild(listItem)
    headerSpan.classList.add('list-header');
    listItem.appendChild(headerSpan)
    listItem.classList.add('list-item', 'header');


    headerSpan.innerText = `${item.label}`;
   
    const arrowDown = document.createElement('i')
    const list = document.createElement('ul');
    list.classList.add('nested');
    listItem.appendChild(list);
   

    headerSpan.addEventListener('click',()=>{
        list.style.maxHeight = list.style.maxHeight ? null : '100vh';
    })

    if (item.children) {
        listItem.appendChild(arrowDown);
        
        item.children.map((child) => {

            const childItem = document.createElement('li');
            const childSpan = document.createElement('span');
            childItem.appendChild(childSpan);
            childItem.classList.add('list-item', 'nested-list-item');
            childSpan.classList.add('nested-list-span')
            childSpan.textContent = `${child.label}`;
            list.appendChild(childItem)
 
            
          
            const list2 = document.createElement('ul');
            list2.classList.add('unordered-list', 'nested')
            childItem.appendChild(list2);
          
           
            childSpan.addEventListener('click',()=>{
                list2.style.maxHeight = list2.style.maxHeight ? null : '100vh';
            })
           
            if (child.children) {
                
                
                
                child.children.map((child2) => {
                    const childItem2 = document.createElement('li');
                    childItem2.classList.add('list-item', 'nested-list-item-item');
                    childItem2.textContent = `${child2.label}`;
                    list2.appendChild(childItem2);
                })
            } // end of if child.children



        })
    } //if(item.chidren) close


}) // main close





