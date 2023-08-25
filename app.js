function addTodoList() {
    const formAddTodo = document.querySelector('.form-add-todo');

    formAddTodo.addEventListener('submit', (event) => {
        event.preventDefault();
        const inputValue = formAddTodo.add.value.trim();

        if (inputValue) {
            const list = document.querySelector('.todos-container');

            list.innerHTML +=
                `<li class="list-group-item d-flex justify-content-between align-items-center">
                    <span>${inputValue}</span>
                    <i class="far fa-trash-alt delete"></i>
                </li>`;

            event.target.reset();
        };
    })
}

addTodoList();