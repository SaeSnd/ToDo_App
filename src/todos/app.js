import html from './app.html?raw';
import todoStore, {Filters} from '../store/todo.store';
import { renderTodos, renderPending } from './use-cases';


const ElementIDs = {
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    ClearCompletedButton: '.clear-completed',
    TodoFilters: '.filtro',
    Counter: '.todo-count'
}

/**
 * Displays the app
 * @param {String} elementId place in html to append the app
 */
export const App = ( elementId ) => {

    const displayTodos = () => {
        const todos = todoStore.getTodos( todoStore.getCurrentFilter() );
        renderTodos( ElementIDs.TodoList, todos );
        updatePendingCount();
    }

    const updatePendingCount = () => {
        renderPending(ElementIDs.Counter);
    }

    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();
    })();

    //HTML References
    const newDescriptionInput = document.querySelector(ElementIDs.NewTodoInput),
          todoListUL          = document.querySelector(ElementIDs.TodoList),
          clearComplButton    = document.querySelector(ElementIDs.ClearCompletedButton),
          filtersLIs          = document.querySelectorAll(ElementIDs.TodoFilters),
          counterNum          = document.querySelector(ElementIDs.Counter);

    newDescriptionInput.addEventListener('keyup', (event) => {
        if(event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0 ) return;

        todoStore.addTodo( event.target.value );
        displayTodos();
        event.target.value = '';
    });

    todoListUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');

        if(event.target.className === 'destroy'){
            todoStore.deleteTodo(element.getAttribute('data-id'));
        } else if(event.target.className === 'toggle'){
            todoStore.toogleTodo(element.getAttribute('data-id'));
        }

        displayTodos();
    });
    
    clearComplButton.addEventListener('click', () =>{
        todoStore.deleteCompleted();
        displayTodos();
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');
            
            switch (element.target.text) {
                case 'All':
                    todoStore.setFilter(Filters.All);
                    break;
                case 'Pending':
                    todoStore.setFilter(Filters.Pending);
                    break;
                case 'Completed':
                    todoStore.setFilter(Filters.Completed);
                    break;
            
                default:
                    throw new Error('WTF DUDE.');
                    break;
            }
            displayTodos();
        })
    });

}
