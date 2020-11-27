let getNowTime = () => {
    let timeInMs = new Date();
    let nowTime = timeInMs.getHours() + ":" + timeInMs.getMinutes();
    let time = document.getElementById("time");
    time.innerHTML = nowTime;
}

getNowTime();
setInterval(getNowTime, 60000);