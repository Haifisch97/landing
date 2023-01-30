(function () {
    const timerContainer = document.querySelector('.header__timer-value');
    
    function getTimer (){
        const hourNow = new Date().getHours();
        const minutesNow = new Date().getMinutes();
        const secondsNow = new Date().getSeconds();
        let hourStay;
        let minutesStay;
        let secondsStay;
        if (hourNow >= 21 && hourNow < 8) {
            hourNow <= 23? (hourStay = 23 - hourNow + 8) : hourStay = 7 - hourNow;
            minutesStay = 59 - minutesNow;
            secondsStay = 59 - secondsNow;
            timerContainer.innerHTML = `We open after ${hourStay}h ${minutesStay}m ${secondsStay}s`;
        } else {
            hourStay = 20 - hourNow;
            minutesStay = 59 - minutesNow;
            secondsStay = 59 - secondsNow;
            timerContainer.innerHTML = `We close after ${hourStay}h ${minutesStay}m ${secondsStay}s`;
        }
    }

    setInterval(getTimer, 1000);
})();