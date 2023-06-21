console.log('hola');

const h1 = document.querySelector('h1');
const form = document.querySelector('#box');
const input = document.querySelector('#tareaInput');
const button1 = document.querySelector('#buttonPlus');
const ul = document.querySelector('#list');
const p = document.querySelector('#text2');
const button2 = document.querySelector('#button-X');


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

function inputTask(tarea) {
    const elemento = `
                        <li id="elemento">
                        <p id="text2">${tarea}</p>
                        <button class="button-X" data="eliminado" id="0">X</button>
                        </li>
                    `
}

button1.addEventListener('click', inputTask);

// button1.addEventListener('click',()=> {
//     const tarea = input.value 
//     if (!tarea) {
//         return;
//     }
//     input.value="";
// })


