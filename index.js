// window.addEventListener('load', () => {
//     const form = document.querySelector("#new-task-form")
//     const input = document.querySelector("#new-task-input")
//     const list_el = document.querySelector("#tasks")

//     form.addEventListener('submit', (e) => {
//         e.preventDefault()
//         const newTask = input.value.trim()

//         if (!newTask) {
//             alert("Please add task")
//             return
//         }

//         const taskElement = document.createElement("div")

//         taskElement.classList.add("task")

//         const taskContentElement = document.createElement("div")

//         taskContentElement.classList.add("content")

//         taskElement.appendChild(taskContentElement)

//         const taskInputElement = document.createElement("input")

//         taskInputElement.classList.add("text")

//         taskInputElement.type = "text"

//         taskInputElement.value = newTask

//         taskInputElement.setAttribute("readonly", "readonly")

//         taskContentElement.appendChild(taskInputElement)

//         const taskActionElement = document.createElement("div")

//         taskActionElement.classList.add("actions")

//         const taskEditElement = document.createElement("button")

//         taskEditElement.classList.add("edit")

//         taskEditElement.innerHTML = "Edit"

//         const taskDeleteElement = document.createElement("button")

//         taskDeleteElement.classList.add("delete")

//         taskDeleteElement.innerHTML = "Delete"

//         taskActionElement.appendChild(taskEditElement)

//         taskActionElement.appendChild(taskDeleteElement)

//         taskElement.appendChild(taskActionElement)

//         list_el.appendChild(taskElement)

//         input.value = ""

//         function handleEdit() {

//             if (taskEditElement.innerText.toLowerCase() == "edit") {
//                 taskInputElement.removeAttribute("readonly")
//                 taskEditElement.innerText = "Save"
//             }
//             else {
//                 if (taskInputElement.value == "") {
//                     alert("Enter Something")
//                     taskElement.remove()
//                 }
//                 else {
//                     taskInputElement.setAttribute("readonly", "readonly");
//                     taskEditElement.innerText = "Edit"
//                 }
//             }
//         }

//         taskEditElement.addEventListener('click', handleEdit)

//         taskDeleteElement.addEventListener('click', () => {
//             list_el.removeChild(taskElement)
//         })
//     })

// })

window.addEventListener('load', () => {
    const form = document.querySelector("#new-task-form")
    const input = document.querySelector("#new-task-input")
    const list_el = document.querySelector("#tasks")

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const newTask = input.value.trim()

        if (!newTask) {
            alert("Please add task")
            return;
        }

        const taskElement = document.createElement("div")
        taskElement.classList.add("task")
        taskElement.innerHTML = `
        <div class="content">
          <input class="text" type="text" value="${newTask}" readonly>
        </div>
        <div class="actions">
          <button class="edit">Edit</button>
          <button class="delete">Delete</button>
        </div>
      `;

        list_el.appendChild(taskElement)
        input.value = ""
        taskElement.addEventListener('click', (event) => {
            const taskEditElement = event.target.closest('.edit')
            const taskDeleteElement = event.target.closest('.delete')
            if (taskEditElement) {
                handleTaskEdit(taskElement, taskEditElement)
                taskElement.classList.toggle("border");
            } else if (taskDeleteElement) {
                handleTaskDelete(taskElement);
            }
        })
    })

    function handleTaskEdit(taskElement, taskEditElement) {
        const taskInputElement = taskElement.querySelector('.text')

        if (taskEditElement.innerText.toLowerCase() == "edit") {
            taskInputElement.removeAttribute("readonly")
            taskEditElement.innerText = "Save"
        } else {
            if (taskInputElement.value == "") {
                alert("Enter Something")
                taskElement.remove()
            } else {
                taskInputElement.setAttribute("readonly", "readonly")
                taskEditElement.innerText = "Edit"
            }
        }
    }

    function handleTaskDelete(taskElement) {
        list_el.removeChild(taskElement)
    }
});