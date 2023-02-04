import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

let element;
/**
 * Renderiza en la web la lista ToDo
 * @param {String} elementId 
 * @param {Array<Todo>} toDos 
 */
export const renderTodos = ( elementId, Todos = [] ) => {
    if(!element)
        element = document.querySelector(elementId);

    element.innerHTML = '';
    
    Todos.forEach( todo => {
        element.append(createTodoHTML( todo ));
    })
}