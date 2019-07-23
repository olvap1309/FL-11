let rootNode = document.getElementById('root');

const tasks = document.getElementById('tasks');
const input = document.getElementById('input-task');
const add = document.getElementById('add');

const check = 'done';
const uncheck = 'check_box_outline_blank';
const textDone = 'task-done'
let taskArr = [];
let id = 0;

function addTask(task, id, done) {

    const isCheck = done ? check : uncheck;
    const text = done ? textDone : '';

    const taskItem = `<li class="task-item" id="${id}">
                        <div class="task-status">
                        <i class="material-icons checkbox" task="done">
                            ${isCheck}
                        </i>
                        <p class="task-text ${text}">${task}</p>
                        <i class="material-icons task-edit" task="edit">
                            edit
                        </i>
                        </div>
                        <div class="task-delete">
                        <i class="material-icons" task="delete">
                            delete
                        </i>
                        </div>
                    </li>
                    `;

    const position = 'beforeend';

    tasks.insertAdjacentHTML(position, taskItem);

}

document.addEventListener('keyup', addTasks);
add.addEventListener('click', addTasks);
tasks.addEventListener('click', function(event) {
    const item = event.target;
    const itemTask = item.attributes.task.value;

    if (itemTask === 'edit') {
        editTask(item);
    } else if (itemTask === 'done') {
        doneTask(item);
    } else if (itemTask === 'delete') {
        deleteTask(item);
    }
    
})

function addTasks(event) {
    let code = 13;
    if (event.keyCode === code || event.type === 'click') {
        const task = input.value;

        if (task && task.trim() !== '') {
            addTask(task, id, false);
            taskArr.push(task);
            id++;
        }
        input.value = '';
    }
}

function doneTask(item) {
    let parent = item.parentNode;
    let id = parent.parentNode.id;
    if (!taskArr[id].done){
        item.innerText = check;
        parent.querySelector('.task-text').classList.value += textDone;
        item.nextElementSibling.nextElementSibling.style.opacity = '0';
        taskArr[id].done = true;
    }   
}

function deleteTask(item) {    
    item.parentNode.parentNode.parentNode.removeChild(item.parentNode.parentNode);
    
}

function editTask(item) {
    console.log(item);
}