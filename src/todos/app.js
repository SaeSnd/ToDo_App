import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './use-cases/render-todos';


const ElementIDs = {
    TodoList: '.todo-list',
}

/**
 * Displays the app
 * @param {String} elementId place in html to append the app
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();
}