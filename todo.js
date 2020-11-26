var ul = document.getElementById("list");
var li;

var addButton = document.getElementById('add');
addButton.addEventListener('click',addItem);

var removeButton = document.getElementById('remove');
removeButton.addEventListener('click',removeItem);

var removeAllButton = document.getElementById('removeAll');
removeAllButton.addEventListener('click',removeAllItem);

function addItem() {
    var input = document.getElementById('input');
    var item = input.value;
    var textnode = document.createTextNode(item);
    if(item === ""){
        var pItem = document.createElement("p");
        var node = document.createTextNode("Enter your todo.");
        pItem.appendChild(node);
        var ele = document.getElementById('input');
        ele.appendChild(pItem);
        pItem.className = "visual";
    }else{
        li = document.createElement('li');

        var checkbox = document.createElement('input');
        checkbox.type = "checkbox"; 
        checkbox.setAttribute('id','check');
        li.appendChild(checkbox);

        var label = document.createElement('label');
        
        ul.appendChild(label);
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        li.className = "visual";

        setTimeout(() => {
            li.className = "visual";
        }, 2000);

    }
}

function removeItem() {
    li = ul.children;
   // console.log(li);
    for (let index = 0; index < li.length; index++) {
        while(li[index] && li[index].children[0].checked){
            ul.removeChild(li[index]);
        }
    }
}

function removeAllItem() {
    li = ul.children;
    for (let index = 0; index < li.length; index++) {
       ul.removeChild(li[index]); 
    }
}