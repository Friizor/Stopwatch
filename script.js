const watch = document.getElementById('display');
let timer = null;

let startTime = 0;
let eloTime = 0;

let statu = false;


function start() {


    if (!statu) {
        startTime = Date.now() - eloTime;
        timer = setInterval(displaying, 10);
        statu = true;
    }
}

function stop() {
    if (statu) {
        clearInterval(timer)
    }
}

function reset() {

}

function displaying() {

    const nowTime = Date.now();
    eloTime = nowTime - startTime;

    let hours = Math.floor(eloTime / (1000 * 60 * 60));
    let minutes = Math.floor(eloTime / (1000 * 60) % 60);
    let seconds = Math.floor(eloTime / 1000 % 60);
    let mileScnd = Math.floor(eloTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    mileScnd = String(mileScnd).padStart(2, "0");

    watch.textContent = `${hours}:${minutes}:${seconds}:${mileScnd}`;
}