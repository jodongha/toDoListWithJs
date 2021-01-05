const time = document.querySelector(".time"),
    clockTitle = time.querySelector("h1");

function getNowTime(){
    const date = new Date();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    clockTitle.innerText =  
    `${hours < 10 ? `0${hours}`: hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
}

function init(){
    getNowTime();
    setInterval(getNowTime, 60000);
}
init();