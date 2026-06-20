import {projects , createproject , addTodoToProject} from "./projects.js"

const head = document.querySelector("#projectList")
 export function renderProjects(projects){
    head.innerHTML = "";
    for(let i = 0;i<projects.length;i++){
    const projectCards = document.createElement("div");
        projectCards.textContent = projects[i].name;
   
    projectCards.dataset.index= i;
    const deleteBtn =
    document.createElement("button");

deleteBtn.textContent = "X";

deleteBtn.classList.add("deleteProject");

deleteBtn.dataset.index = i;
projectCards.appendChild(deleteBtn)
    head.appendChild(projectCards);

    }

}
export function renderTodos(project){
  
    const todolist = document.querySelector("#todolist")
    todolist.innerHTML = "";
    for (let i =  0;i<project.todos.length;i++) {

    const todoCard = document.createElement("div");

    todoCard.dataset.index = i;
      const todo = project.todos[i];

 

    const title = document.createElement("h3");
    title.textContent = todo.title;

    const dueDate = document.createElement("p");
    dueDate.textContent = todo.dueDate;

    const priority = document.createElement("p");

    priority.textContent = todo.priority;
    
     const deleteBtn =   document.createElement("button");

deleteBtn.textContent = "Delete";

deleteBtn.classList.add("deleteTodo");

deleteBtn.dataset.index = i;

    todoCard.append(title, dueDate, priority,deleteBtn);
       



    todolist.appendChild(todoCard);
}
}
export function renderApp() {
    renderProjects(projects);
    renderTodos(projects[0]);
}