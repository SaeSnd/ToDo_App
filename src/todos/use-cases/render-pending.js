import todoStore, { Filters } from "../../store/todo.store";

let element;

export const renderPending = (elementID) => {
    if(!element)
        element = document.querySelector(elementID);
    
        element.innerHTML = todoStore.getTodos(Filters.Pending).length;
}