import { Todo } from "../models/todo.model";
import { createTodoHTML } from "./";

/**
 * Renderiza en la web la lista ToDo
 * @param {String} elementId 
 * @param {Array<Todo>} toDos 
 */
export const renderTodos = ( elementId, Todos = [] ) => {
    const element = document.querySelector(elementId);
    Todos.forEach( todo => {
        element.append(createTodoHTML( todo ));
    })
}