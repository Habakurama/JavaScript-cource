
let Todolist=[{name:'make dinner', datedue:'12/04/2023'},
{name:'wash dishes',datedue:'12/04/2023'},
{name: 'watch youtube',datedue:'12/04/2023'}];

renderTodolist();

function renderTodolist(){
 let TodolistHtml = '';

Todolist.forEach( (todoObject, index) => {

 
  //const name=todoObject.name;
  //const datedue=todoObject.datedue;

  const {name , datedue}=todoObject;//destracting property techinics
  const html=`
  <div>${name}</div>
  <div>${datedue}</div>
   <button onclick = "
   Todolist.splice(${index}, 1);
   renderTodolist(); 
   " class="delete-todo-button">Delete</button>
   
   `//generating the Html (insisted of writing all in html we looping its in array and generating its in java scritps)
  TodolistHtml += html;
  
});
   
   console.log(TodolistHtml);

   document.querySelector('.js-todo-list')
   .innerHTML = TodolistHtml;
}

function addTodolist() {
 const inputElement= document.querySelector('.js-name-input'); 
 const name=inputElement.value;

 const dateInputElement=document.querySelector('.js-date-input');
 const datedue=dateInputElement.value;
 console.log(name);
 //add to the list
 Todolist.push({
   // name:name,
   // datedue:datedue
    name,
    datedue //short hand property
 });
 console.log(Todolist);
 inputElement.value='';

 renderTodolist();
   
}
