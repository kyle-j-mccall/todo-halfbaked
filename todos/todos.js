import { 
    checkAuth, 
    createTodo, 
    completeTodo,
    getTodos,
    logout,
    deleteAllTodos, 
} from '../fetch-utils.js';
import { renderTodo } from '../render-utils.js';

checkAuth();

let todoArr = [];


const todosEl = document.querySelector('.todos');
const todoForm = document.querySelector('.todo-form');
const logoutButton = document.querySelector('#logout');
const deleteButton = document.querySelector('.delete-button');



todoForm.addEventListener('submit', async (e) => {
    
    e.preventDefault();
    const data = new FormData(todoForm);
    const todo = data.get('todo');
    

    const newTodo = await createTodo(todo);
    todoArr.push(newTodo);
    
    todoForm.reset();

    displayTodos();
});

async function displayTodos() {

    todoArr = await getTodos();
    
    todosEl.textContent = '';
    for (let todo of todoArr) {
        const renderedTodo = renderTodo(todo);
        renderedTodo.addEventListener('click', async () => {
            
            await completeTodo(todo.id);
            displayTodos();
            
        });
        
        todosEl.append(renderedTodo);
    } 
    

    
}



window.addEventListener('load', async () => {
    displayTodos();
});

logoutButton.addEventListener('click', () => {
    logout();
});


deleteButton.addEventListener('click', async () => {
    
    await deleteAllTodos();
    
    todoArr = [];
    displayTodos();
});

displayTodos();
