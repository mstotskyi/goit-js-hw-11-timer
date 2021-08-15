import './sass/main.scss';

const refs = {
    secs: document.querySelector('span[data-value="secs"]'),
    mins: document.querySelector('span[data-value="mins"]'),
    hours: document.querySelector('span[data-value="hours"]'),
    days: document.querySelector('span[data-value="days"]'),

};

let currentDate = null;
let targetDate = new Date(2021, 10, 12, 0, 0, 0, 0);
let time = null;



startCountdownTimer();

function logger () {
currentDate = Date.now();
time = targetDate.getTime() - currentDate;
const sec = Math.floor((time % (1000 * 60)) / 1000);
const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const day = Math.floor((time / (1000 * 60 * 60 * 24)));
refs.secs.textContent = sec < 10 ? `0${sec}` : sec;
refs.mins.textContent = min < 10 ? `0${min}` : min;
refs.hours.textContent = hour < 10 ? `0${hour}` : hour;
refs.days.textContent = day < 10 ? `0${day}` : day;
};

function startCountdownTimer () {
setInterval (logger, 1000);
}





