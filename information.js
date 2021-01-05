const form = document.querySelector(".form"),
    input = form.querySelector("input"),
    info = document.querySelector(".info");
    
const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
    event.preventDefault(); //event의 기본동작을 막기위함
    const currentValue = input.value; //currentValue에 input된 value를 가져온다./
    printInfo(currentValue);
    saveName(currentValue);
}

function askForName(){ //enter -> submit
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function printInfo(text){
    form.classList.remove(SHOWING_CN);
    info.classList.add(SHOWING_CN);
    info.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER_LS);
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