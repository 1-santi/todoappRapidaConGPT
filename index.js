// Selección de elementos del DOM
const input = document.querySelector('input[type="text"]');
const addBtn = document.querySelector('button');
const todoList = document.querySelector('ul');

// Función para agregar una nueva tarea
function addTask() {
	// Crear un nuevo elemento li
	const newTask = document.createElement('li');
	// Crear un elemento input de tipo checkbox
	const checkbox = document.createElement('input');
	checkbox.type = 'checkbox';
	// Crear un nuevo elemento span y agregar el valor del input
	const taskText = document.createElement('span');
	taskText.textContent = input.value;
	// Crear un nuevo elemento button y agregar el texto 'Eliminar'
	const deleteBtn = document.createElement('button');
	deleteBtn.textContent = 'Eliminar';
	// Agregar los elementos al nuevo elemento li
	newTask.appendChild(checkbox);
	newTask.appendChild(taskText);
	newTask.appendChild(deleteBtn);
	// Agregar el nuevo elemento li a la lista de tareas
	todoList.appendChild(newTask);
	// Limpiar el valor del input
	input.value = '';
}

// Evento click en el botón de agregar tarea
addBtn.addEventListener('click', addTask);

// Función para eliminar una tarea
function deleteTask(event) {
	const taskItem = event.target.parentElement;
	taskItem.remove();
}

// Evento click en el botón de eliminar tarea
todoList.addEventListener('click', function(event) {
	if (event.target.tagName === 'BUTTON') {
		deleteTask(event);
	}
});
