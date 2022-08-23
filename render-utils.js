export function renderTodo(todo) {
    const todoDiv = document.createElement('div');
    const p = document.createElement('p');
    // depending on whether the todo is complete, give the div the appropriate css class ('complete' or 'incomplete')
    if (todo.complete === true) {
        todoDiv.classList.add('complete');
    } else {
        todoDiv.classList.add('incomplete');
    }
    // add the 'todo' css class no matter what
    todoDiv.classList.add('todo');

    // put the todo's text into the p tag
    p.textContent = todo.todo;

    // append stuff
    todoDiv.append(p);
    // return the div
    return todoDiv;
}