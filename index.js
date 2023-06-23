console.log('hola');

const h1 = document.querySelector('h1');
const form = document.querySelector('#box');
const button1 = document.querySelector('#buttonPlus');
const ul = document.querySelector('#list');
const p = document.querySelector('#text2');
const button2 = document.querySelector('.button-X');


// Función crear tarea

// function agregarTarea(tarea) {
//     const elemento = `
//                         <li id="elemento">
//                         <p id="text2">${tarea}</p>
//                         <button class="button-X" data="eliminado" id="0">X</button>
//                         </li>
//                     `
//     ul.appendChild("beforeend",elemento)
// }

const taskList = [];


function addTask() {
    const input = document.querySelector('#tareaInput').value;
    taskList.push(input);

    console.log(taskList);
    ul.innerHTML = "";
    for (let i = 0; i < taskList.length; i++) {
        console.log(taskList[i]);
        const listItem = document.createElement("li");
        listItem.innerHTML = `                        
                                <p id="text2">${taskList[i]}</p>
                                <button class="button-X" data="eliminado" id="0">X</button>
                             `
        ul.appendChild(listItem);
    }
    
    
}

button1.addEventListener('click', addTask);



// button1.addEventListener('click',()=> {
//     const tarea = input.value 
//     if (!tarea) {
//         return;
//     }
//     input.value="";
// })


