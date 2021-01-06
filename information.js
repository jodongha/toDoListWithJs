const form = document.querySelector(".form"),
    input = form.querySelector("input"),
    info = document.querySelector(".info");
    
const user = "currentUser",
    showing = "showing";

//localStorage에 데이터 저장
function saveName(text){
    localStorage.setItem(user, text);
}

function handleSubmit(event){
    event.preventDefault(); //event의 기본동작을 막기위함
    const currentValue = input.value; //currentValue에 input된 value를 가져온다./
    printInfo(currentValue);
    saveName(currentValue);
}

function askForName(){ //enter -> submit
    form.classList.add(showing);
    form.addEventListener("submit", handleSubmit);
}

//text print
function printInfo(text){
    form.classList.remove(showing);
    info.classList.add(showing);
    info.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(user);
    if(currentUser === null){
        // no value
        askForName();
    }else{
        // yes value
        printInfo(currentUser);
    }
}

function init(){
    loadName();
}
init();