let Todolist=['make dinner', 'wash dishes', 'watch youtube'];

let TodolistHtml = '';

for(let i=0 ; i< Todolist.length; i++){
const todo=Todolist[i];
const html=`<p> ${todo}</p>`
TodolistHtml += html;
}
console.log(TodolistHtml);

document.querySelector('.js-todo-list')
.innerHTML = TodolistHtml;


function addTodolist() {
 const inputElement= document.querySelector('
 .js-name-input'); 
 const name=inputElement.value;
 console.log(name);
 Todolist.push(name);
 console.log(Todolist);
 inputElement.value='';
   
}
