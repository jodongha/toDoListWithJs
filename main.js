let getNowTime = () => {
    let timeInMs = new Date();
    let nowTime = timeInMs.getHours() + "시" + timeInMs.getMinutes() + "분";
    let time = document.getElementById("time");
    time.innerHTML = nowTime;
}

getNowTime();
setInterval(getNowTime, 60000);