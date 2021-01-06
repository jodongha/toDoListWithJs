const body = document.querySelector("body");

const imageNum = 3;
//image print
function printImage(imageNum){
    const image = new Image();
    image.src = `images/${imageNum + 1}.jpg`;
    image.classList.add("backgroundImage");
    body.prepend(image);
}

//image random으로 
function random(){
    const num = Math.floor(Math.random() * imageNum);
    return num;
}

function init(){
    const randomNum = random();
    printImage(randomNum);
}
init();