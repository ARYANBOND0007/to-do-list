import {
    getformData,
    getTododata,
    clearform
} from "./forms.js";

import {
    projects,
    createproject,
    addTodoToProject,
    deleteProject,
    deleteTodo,
} from "./projects.js";

import {
    renderApp,
    renderTodos
} from "./doms.js";
import { saveProjects,loadProjects } from "./storage.js";

let currentProjectIndex = 0;

export function initializeEvents() {

    const projectForm =
        document.querySelector("#projectForm");

    const todoForm =
        document.querySelector("#todoForm");

    const addProjectBtn =
        document.querySelector("#addnew");

    const addTodoBtn =
        document.querySelector("#addTodoBtn");

    const projectList =
        document.querySelector("#projectList");

    // Show project form
    addProjectBtn.addEventListener("click", () => {
        projectForm.hidden = false;
    });

    // Create project
    projectForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const projectName = getformData();

        if (!projectName) return;

        createproject(projectName);
        saveProjects(projects);

        clearform();

        projectForm.hidden = true;

        renderApp();
    });

    // Select project
    projectList.addEventListener("click", (e) => {

        const index = e.target.dataset.index;

        if (index === undefined) return;

        currentProjectIndex = Number(index);

        renderTodos(projects[currentProjectIndex]);

    addTodoBtn.hidden = false;
    });

    // Show todo form
    addTodoBtn.addEventListener("click", () => {

        todoForm.hidden = false;
    });

    // Create todo
    todoForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const todoData = getTododata();

        addTodoToProject(
            projects[currentProjectIndex],
            todoData.title,
            todoData.dueDate,
            todoData.priority
        );
        saveProjects(projects);

        todoForm.reset();

        todoForm.hidden = true;

        renderTodos(projects[currentProjectIndex]);
    });
    projectList.addEventListener("click", (e) => {

    if (
        !e.target.classList.contains(
            "deleteProject"
        )
    ) return;
     if (projects.length === 1)
        return;
    const index =
    Number(e.target.dataset.index);
    deleteProject(index);
    saveProjects(projects);
    renderApp();
});
    todolist.addEventListener("click", (e) => {

    if (
        !e.target.classList.contains(
            "deleteTodo"
        )
    ) return;
    const todoIndex = Number(e.target.dataset.index);
    deleteTodo(
    projects[currentProjectIndex],
    todoIndex);

saveProjects(projects);
renderTodos(
    projects[currentProjectIndex]
);

});



}