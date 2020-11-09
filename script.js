const input = document.getElementById('input')
const submit = document.getElementById('form')
const todosUL = document.getElementById('todos')

const todos = JSON.parse(localStorage.getItem('todos'))

if(todos) {
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener('submit', e => {
    e.preventDefault();
    addTodo();
    input.value = ""   
})

function addTodo(todo) {
    let todoText = input.value

    if(todo) {
        todoText = todo.text
    }

    if(todoText) {
        const todoEl = document.createElement('li')       
        
        if(todo && todo.completed) {
            todoEl.classList.add('completed')
        }
        
        todoEl.innerText = todoText
        addListen(todoEl);
        todosUL.appendChild(todoEl)

        updateLS(todoEl)
        
    }
}

function updateLS() {
    todosEl = document.querySelectorAll('li')

    const todos = []

    todosEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains('completed')
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}

function addListen(todoEl) {
    todoEl.addEventListener('click', e => {
        updateLS()
        todoEl.classList.toggle('completed')
    })
    todoEl.addEventListener('contextmenu', e => {
        e.preventDefault()
        todoEl.remove()
        updateLS()
    })
}

