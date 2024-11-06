let taskList = [
  {
    item: "Complete JS course",
    dueDate: "03-11-2024",
  },
];
displayList();
function addToList() {
  let inputElement = document.querySelector("#input-task");
  let inputDate = document.querySelector("#task-date");
  let todoItem = inputElement.value;
  let todoDate = inputDate.value;
  taskList.push({ item: todoItem, dueDate: todoDate });
  inputElement.value = "";
  inputDate.value = "";

  displayList();
}
function displayList() {
  let containerElement = document.querySelector(".listContainer");
  let newhtml = "";
  for (let i = 0; i < taskList.length; i++) {
    let { item, dueDate } = taskList[i];
    newhtml += `
      <span>${item}</span>
      <span>${dueDate}</span>
      <button  id="delbtn" onclick='taskList.splice(${i},1); displayList();'>Delete</button>
    
    `;
  }
  containerElement.innerHTML = newhtml;
}
