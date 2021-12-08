import './styles.css';

import { Todo, TodoList } from './classes'
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo)); // todoList.todos.forEach(crearTodoHtml);// todoList.todos.forEach(todo => crearTodoHtml(todo));

const newTodo = new Todo('Aprender Java');
// todoList.nuevoTodo(newTodo);<
// todoList.todos[0].imprimirClase();
// newTodo.imprimirClase();
console.log('todos', todoList.todos);