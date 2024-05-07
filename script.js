function redirectToIndex2(){
    window.location.href = "home.html";
}

const imgs = document.getElementById("img");
const img = document.querySelectorAll('#img img');
let idx = 0;
function carrossel(){
    idx++;

    if(idx > img.length - 1){
        idx = 0;
    }
    imgs.style.transform = `translateX(${-idx * 640}px)`;
    imgs.style.transitionDuration = `1.3s`;
}
setInterval(carrossel, 3000);   
function goToStart(){
    window.location.href = "index.html";
}