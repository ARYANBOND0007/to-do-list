const projects =[];
function createproject(name){
    const project ={
        name,
        todos: [],
    }
    projects.push(project);
    return project;

}
function addTodoToProject(project, title, dueDate, priority) {
    project.todos.push({
        title,
        dueDate,
        priority,
        completed: false,
    });
}
function deleteProject(index) {
    projects.splice(index, 1);
}
function deleteTodo(project, todoIndex) {
    project.todos.splice(todoIndex, 1);
}
export {projects , createproject , addTodoToProject,deleteProject,deleteTodo}