const time = document.querySelector('.time');
const clock = document.querySelector('.clock');

setInterval(function() {
    let date = new Date(),
    h = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();

    clock.querySelector('.hour').style.transform = `rotate(${h * 30}deg)`;
    clock.querySelector('.minute').style.transform = `rotate(${m * 6}deg)`;
    clock.querySelector('.second').style.transform = `rotate(${s * 6}deg)`;
}, 1000);

function full(value) {
    if (value < 10) {
        value = '0' + value;
    } return value;
};

function datetime() {
    let date = new Date();
    let Y = date.getFullYear();
    let M = full(date.getMonth() + 1);
    let D = full(date.getDay());
    let hh = full(date.getHours());
    let mm = full(date.getMinutes());
    let ss = full(date.getSeconds());

    return D + "." + M + "." + Y + " " + hh + ":" + mm + ":" + ss;
};

setInterval(() => {
    time.innerText = datetime();
}, 1000);
