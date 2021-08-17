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
    this.intervalId = setInterval (() => {
        let currentDate = Date.now();
        let time = this.targetDate.getTime() - currentDate;
        this.renderPage (time);
        this.timeIsUp (time);
            }, 1000)
    }
    renderPage (time) {
        const sec = Math.floor((time % (1000 * 60)) / 1000);
            const min = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
            const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const day = Math.floor(time / (1000 * 60 * 60 * 24));
            this.refs.secs.textContent = sec < 10 ? `0${sec}` : sec;
            this.refs.mins.textContent = min < 10 ? `0${min}` : min;
            this.refs.hours.textContent = hour < 10 ? `0${hour}` : hour;
            this.refs.days.textContent = day < 10 ? `0${day}` : day;
            console.log(time);
            
    }

    timeIsUp (time) {
        if (time<0){
            clearInterval(this.intervalId);
            this.selector.textContent = `Time is up`;
        }
    }
}

new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date(2021, 8, 18, 0, 0, 0, 0),
  });

