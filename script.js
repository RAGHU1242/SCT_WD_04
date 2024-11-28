const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskDate = document.getElementById('task-date');
const taskList = document.getElementById('task-list');

taskForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const taskText = taskInput.value;
    const taskTime = taskDate.value;

    if (taskText && taskTime) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${taskText} - ${new Date(taskTime).toLocaleString()}</span>
            <div>
                <button class="complete-btn">✔</button>
                <button class="edit-btn">✏</button>
                <button class="delete-btn">❌</button>
            </div>
        `;
        taskList.appendChild(li);

        taskInput.value = '';
        taskDate.value = '';
    }
});

taskList.addEventListener('click', (e) => {
    const target = e.target;
    const listItem = target.parentElement.parentElement;

    if (target.classList.contains('complete-btn')) {
        listItem.classList.toggle('completed');
    } else if (target.classList.contains('edit-btn')) {
        const newTaskText = prompt('Edit your task:', listItem.querySelector('span').textContent.split(' - ')[0]);
        if (newTaskText) {
            const timePart = listItem.querySelector('span').textContent.split(' - ')[1];
            listItem.querySelector('span').textContent = `${newTaskText} - ${timePart}`;
        }
    } else if (target.classList.contains('delete-btn')) {
        listItem.remove();
    }
});
