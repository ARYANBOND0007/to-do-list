import "./style.css";
import { loadProjects,saveProjects } from "./storage.js";
import { renderApp } from "./doms.js";
import { initiateform } from "./events.js";
import {projects , createproject } from "./projects.js"
import {initializeEvents} from "./events.js"

const savedProjects = loadProjects();

if (savedProjects.length > 0) {

    projects.push(...savedProjects);

} else {

    createproject("Inbox");

}

renderApp();

initializeEvents();
