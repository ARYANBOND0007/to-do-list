import { projects } from "./projects.js";
function saveProjects(projects) {
    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );
}

function loadProjects() {
    const data = localStorage.getItem("projects");

    if (!data) return [];

    return JSON.parse(data);
}

export {
    saveProjects,
    loadProjects
};