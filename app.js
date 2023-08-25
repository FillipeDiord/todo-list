const referenceList = document.querySelector('.todos-container');

function addTodoList() {
    const formAddTodo = document.querySelector('.form-add-todo');

    formAddTodo.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameTodo = formAddTodo.add.value.trim();

        if (nameTodo) {
            referenceList.innerHTML +=
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${nameTodo}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;

            event.target.reset();
        };
    })
}

function deleteTodo() {
    referenceList.addEventListener('click', (event) => {
        const itemTodo = event.target;

        const checkDeleteClass = Array.from(itemTodo.classList).includes('delete');

        if (checkDeleteClass) {
            itemTodo.parentElement.remove();
        }
    });
}

function filterTodos() {
    const inputReference = document.querySelector('.form-search input');

    inputReference.addEventListener('input', (event) => {
        const inputValue = event.target.value.trim().toLowerCase();

        const filteredValues = Array.from(referenceList.children).filter((todo) => 
            !todo.textContent.toLocaleLowerCase().includes(inputValue)
        );

        filteredValues.forEach((value => {
            value.classList.remove('d-flex');
            value.classList.add('hidden');
        }));

        const returningValuesList = Array.from(referenceList.children).filter((todo) => 
            todo.textContent.toLocaleLowerCase().includes(inputValue)
        );

        returningValuesList.forEach((value => {
            value.classList.remove('hidden');
            value.classList.add('d-flex');
        }));
    })
}

addTodoList();
deleteTodo();
filterTodos();