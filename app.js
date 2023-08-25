const referenceList = document.querySelector('.todos-container');

function addTodoList() {
    const formAddTodo = document.querySelector('.form-add-todo');

    formAddTodo.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameTodo = formAddTodo.add.value.trim();

        if (nameTodo) {
            referenceList.innerHTML +=
                `<li class="list-group-item d-flex justify-content-between align-items-center" data-todo="${nameTodo}">
                    <span>${nameTodo}</span>
                    <i class="far fa-trash-alt" data-trash="${nameTodo}"></i>
                </li>`;

            event.target.reset();
        };
    })
}

function deleteTodo() {
    referenceList.addEventListener('click', (event) => {
        const itemTodo = event.target;
        const trashDataValue = itemTodo.dataset.trash;
        const todo = document.querySelector(`[data-todo="${trashDataValue}"]`);

        if (trashDataValue) {
            todo.remove();
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

        removeClassBootstrap(filteredValues);


        const returningValuesList = Array.from(referenceList.children).filter((todo) =>
            todo.textContent.toLocaleLowerCase().includes(inputValue)
        );

        addClassBootstrap(returningValuesList);
    })
}

function removeClassBootstrap(filteredValues) {
    filteredValues.forEach((value => {
        value.classList.remove('d-flex');
        value.classList.add('hidden');
    }));
}

function addClassBootstrap(returningValuesList) {
    returningValuesList.forEach((value => {
        value.classList.remove('hidden');
        value.classList.add('d-flex');
    }));
}

addTodoList();
deleteTodo();
filterTodos();