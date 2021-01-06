const toDoForm = document.querySelector(".inputToDo"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".toDoList");

const TODOS_LS = "toDo";
let arrDo = [];

function save(){
    localStorage.setItem(TODOS_LS, JSON.stringify(arrDo));
}

function delToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = arrDo.filter(function(toDo){
        return toDo.id !== parseInt(li.id);
    })
    arrDo = cleanToDos;
    save();
}

function paintToDo(text){
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const liNum = arrDo.length + 1;
    delBtn.value = "";
    delBtn.addEventListener("click", delToDo);
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = liNum;
    toDoList.appendChild(li);
    const doObj ={
    text: text,
    id: liNum
    };
    arrDo.push(doObj);
    save();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos !== null){
        const parsedToDos = JSON.parse(toDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();