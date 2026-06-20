const form = document.querySelector("#projectForm")
const projectNameInput = document.querySelector("#projectName");
const tododata = document.querySelector("#todoform");
const todotitle = document.querySelector("#todoname");
const tododate = document.querySelector("#tododate");
const todopriority = document.querySelector("#todoPriority")
export  function getformData(){
    return projectNameInput.value.trim()

}
export function clearform(){
    form.reset();
}
export function getTododata(){
    return {
       title: todotitle.value.trim(),
        dueDate: tododate.value,
        priority: todopriority.value,
    }
}
