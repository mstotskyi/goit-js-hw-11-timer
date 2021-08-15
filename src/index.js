import './sass/main.scss';


class CountdownTimer {
    constructor({selector, targetDate}) {
        this.selector = document.querySelector(selector);
        this.refs = {
            secs: document.querySelector('span[data-value="secs"]'),
            mins: document.querySelector('span[data-value="mins"]'),
            hours: document.querySelector('span[data-value="hours"]'),
            days: document.querySelector('span[data-value="days"]'),
        }
        this.targetDate = targetDate;
        this.startCountdownTimer();
    }


    startCountdownTimer () {
    setInterval (() => {
        let currentDate = Date.now();
        let time = this.targetDate.getTime() - currentDate;
        const sec = Math.floor((time % (1000 * 60)) / 1000);
        const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const day = Math.floor((time / (1000 * 60 * 60 * 24)));
        this.refs.secs.textContent = sec < 10 ? `0${sec}` : sec;
        this.refs.mins.textContent = min < 10 ? `0${min}` : min;
        this.refs.hours.textContent = hour < 10 ? `0${hour}` : hour;
        this.refs.days.textContent = day < 10 ? `0${day}` : day;
            }, 1000)
}
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 10, 12, 0, 0, 0, 0),
  });

