// Находим элементы на странице
const form = document.querySelector('#form');
const taskInput =  document.querySelector('#taskInput');
const tasksList = document.querySelector('#tasksList');
const emptyList = document.querySelector('#emptyList');

form.addEventListener('submit', addTask);
tasksList.addEventListener('click', deleteTask);
tasksList.addEventListener('click', doneTask);


//Функции
function addTask (event) {
        // Отменяем отправку формы
        event.preventDefault();

        // Достаем текст задачи из поля ввода
        const taskText = taskInput.value;
    
        //Формируем разметку для новой задачи 
        const taskHTML = `
        <li class="list-group-item d-flex justify-content-between task-item">
                        <span class="task-title">${taskText}</span>
                        <div class="task-item__buttons">
                            <button type="button" data-action="done" class="btn-action">
                                <img src="./img/tick.svg" alt="Done" width="18" height="18">
                            </button>
                            <button type="button" data-action="delete" class="btn-action">
                                <img src="./img/cross.svg" alt="Done" width="18" height="18">
                            </button>
                        </div>
                    </li>
        `;
    
        //Добавляем на страницу
    tasksList.insertAdjacentHTML('beforeend', taskHTML);
        
    // Очищаем поле ввода и возвращаем на него фокус
    taskInput.value = "";
    taskInput.focus();
    
    // Проверка. Если в списке задач больше 1го элемента, то скрываем блок "Список задач"
    if(tasksList.children.length > 1) {
        emptyList.classList.add('none');
    }
}


function deleteTask (event) {
    //Проверяем, если клик был не по кнопке "Удалить задачу"
    if (event.target.dataset.action !== 'delete') return;
    //Проверяем, что клик был по кнопке "Удалить задачу"
    const parentNode = event.target.closest('.list-group-item');
    parentNode.remove();

    //Проверка. Если в  списке задач 1-н элемент, то показываем блок "Список задач пуст"
    if (tasksList.children.length === 1 ) {
        emptyList.classList.remove('none');
    }

}


function doneTask (event) {
    //Проверяем, если клик был не по кнопке "Задача выполнена"
    if (event.target.dataset.action !== 'done') return;
    //Отмечаем, что задача выполнена 
    const parentNode = event.target.closest('.list-group-item');
    const taskTitle = parentNode.querySelector('.task-title');
    taskTitle.classList.toggle('task-title--done');
}
