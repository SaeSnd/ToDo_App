(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const d of o)if(d.type==="childList")for(const p of d.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&i(p)}).observe(document,{childList:!0,subtree:!0});function l(o){const d={};return o.integrity&&(d.integrity=o.integrity),o.referrerpolicy&&(d.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?d.credentials="include":o.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(o){if(o.ep)return;o.ep=!0;const d=l(o);fetch(o.href,d)}})();const v=`<section class="todoapp">\r
    <header class="header">\r
        <h1>To-Do List</h1>\r
        <input id="new-todo-input" class="new-todo" placeholder="What needs to be done?" autofocus>\r
    </header>\r
    \r
    <!-- This section should be hidden by default and shown when there are todos -->\r
    <section class="main">\r
        <input id="toggle-all" class="toggle-all" type="checkbox">\r
        <label for="toggle-all">Mark all as complete</label>\r
        <ul class="todo-list">\r
            <!-- These are here just to show the structure of the list items -->\r
            <!-- List items should get the class "editing" when editing and "completed" when marked as completed -->\r
            <!-- <li class="completed" data-id="abc">\r
                <div class="view">\r
                    <input class="toggle" type="checkbox" checked>\r
                    <label>Probar JavaScript</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Create a TodoMVC template">\r
            </li> -->\r
            <!-- <li>\r
                <div class="view">\r
                    <input class="toggle" type="checkbox">\r
                    <label>Comprar un unicornio</label>\r
                    <button class="destroy"></button>\r
                </div>\r
                <input class="edit" value="Rule the web">\r
            </li> -->\r
        </ul>\r
    </section>\r
\r
    <!-- This footer should hidden by default and shown when there are todos -->\r
    <footer class="footer">\r
        <!-- This should be "0 items left" by default -->\r
        <span class="todo-count"><strong id="pending-count">0</strong> pending.</span>\r
        <!-- Remove this if you don't implement routing -->\r
        <ul class="filters">\r
            <li>\r
                <a class="selected filtro" class="selected" href="#/">All</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/active">Pending</a>\r
            </li>\r
            <li>\r
                <a class="filtro" href="#/completed">Completed</a>\r
            </li>\r
        </ul>\r
        <!-- Hidden if no completed items are left ↓ -->\r
        <button class="clear-completed">Erase Completed</button>\r
    </footer>\r
</section>\r
\r
\r
<footer class="info">\r
    <p>Template made by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>\r
    <!-- Change this out with your name and url ↓ -->\r
    <p>Made by <a href="http://todomvc.com">ti</a> and implemented in VanillaJS by SaeSnd</p>\r
    <p>Thanks to <a href="http://todomvc.com">TodoMVC</a> and Fernando Herrera's JavaScript course.</p>\r
</footer>`;let g;const C=new Uint8Array(16);function L(){if(!g&&(g=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!g))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return g(C)}const n=[];for(let e=0;e<256;++e)n.push((e+256).toString(16).slice(1));function E(e,t=0){return(n[e[t+0]]+n[e[t+1]]+n[e[t+2]]+n[e[t+3]]+"-"+n[e[t+4]]+n[e[t+5]]+"-"+n[e[t+6]]+n[e[t+7]]+"-"+n[e[t+8]]+n[e[t+9]]+"-"+n[e[t+10]]+n[e[t+11]]+n[e[t+12]]+n[e[t+13]]+n[e[t+14]]+n[e[t+15]]).toLowerCase()}const k=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),w={randomUUID:k};function A(e,t,l){if(w.randomUUID&&!t&&!e)return w.randomUUID();e=e||{};const i=e.random||(e.rng||L)();if(i[6]=i[6]&15|64,i[8]=i[8]&63|128,t){l=l||0;for(let o=0;o<16;++o)t[l+o]=i[o];return t}return E(i)}class y{constructor(t){this.id=A(),this.description=t,this.done=!1,this.createdAt=new Date}}const c={All:"all",Completed:"Completed",Pending:"Pending"},r={todos:[new y("Buy grosseries"),new y("Go to GYM"),new y("Eat healty")],filter:c.All},I=()=>{console.log(r),T()},T=()=>{if(localStorage.getItem("state")){const{todos:e=[],filter:t=c.All}=JSON.parse(localStorage.getItem("state"));r.todos=e,r.filter=t}},h=()=>{localStorage.setItem("state",JSON.stringify(r))},x=(e=c.All)=>{switch(e){case c.All:return[...r.todos];case c.Completed:return r.todos.filter(t=>t.done);case c.Pending:return r.todos.filter(t=>!t.done);default:throw new Error("Not a valid option")}},U=e=>{if(!e)throw new Error("Description needed");r.todos.push(new y(e)),h()},D=e=>{let t=r.todos.findIndex(l=>l.id===e);r.todos[t].done=!r.todos[t].done,h()},F=e=>{r.todos=r.todos.filter(t=>t.id!==e),h()},M=()=>{r.todos=r.todos.filter(e=>!e.done),h()},P=(e=c.All)=>{r.filter=e,h()},N=()=>r.filter.toString(),a={addTodo:U,deleteCompleted:M,deleteTodo:F,getCurrentFilter:N,getTodos:x,initStore:I,loadStore:T,setFilter:P,toogleTodo:D};let b;const q=e=>{b||(b=document.querySelector(e)),b.innerHTML=a.getTodos(c.Pending).length};let f;const H=(e,t=[])=>{f||(f=document.querySelector(e)),f.innerHTML="",t.forEach(l=>{f.append(V(l))})},V=e=>{if(!e)throw new Error("No todo has recived");const t=`
    <div class="view">
        <input class="toggle" type="checkbox" ${e.done?"checked":""}>
        <label>${e.description}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`,l=document.createElement("li");return l.innerHTML=t,l.setAttribute("data-id",e.id),e.done&&l.classList.add("completed"),l},u={TodoList:".todo-list",NewTodoInput:"#new-todo-input",ClearCompletedButton:".clear-completed",TodoFilters:".filtro",Counter:".todo-count"},O=e=>{const t=()=>{const s=a.getTodos(a.getCurrentFilter());H(u.TodoList,s),l()},l=()=>{q(u.Counter)};(()=>{const s=document.createElement("div");s.innerHTML=v,document.querySelector(e).append(s),t()})();const i=document.querySelector(u.NewTodoInput),o=document.querySelector(u.TodoList),d=document.querySelector(u.ClearCompletedButton),p=document.querySelectorAll(u.TodoFilters);document.querySelector(u.Counter),i.addEventListener("keyup",s=>{s.keyCode===13&&s.target.value.trim().length!==0&&(a.addTodo(s.target.value),t(),s.target.value="")}),o.addEventListener("click",s=>{const m=s.target.closest("[data-id]");s.target.className==="destroy"?a.deleteTodo(m.getAttribute("data-id")):s.target.className==="toggle"&&a.toogleTodo(m.getAttribute("data-id")),t()}),d.addEventListener("click",()=>{a.deleteCompleted(),t()}),p.forEach(s=>{s.addEventListener("click",m=>{switch(p.forEach(S=>S.classList.remove("selected")),m.target.classList.add("selected"),m.target.text){case"All":a.setFilter(c.All);break;case"Pending":a.setFilter(c.Pending);break;case"Completed":a.setFilter(c.Completed);break;default:throw new Error("WTF DUDE.")}t()})})};a.initStore();O("#app");
