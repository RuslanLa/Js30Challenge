(function(){
    const secondsHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.hour-hand');
    function transformHand(handRelativeValue, hand){
        const degrees = handRelativeValue*360 + 90;
        hand.style.transform = `rotate(${degrees}deg)`;
    }
    function setTime(){
        const date = new Date();
        transformHand(date.getSeconds()/60, secondsHand);
        transformHand(date.getMinutes()/60, minutesHand);
        transformHand(date.getHours()/12, hoursHand);
    }

    setInterval(setTime, 1000);
    setTime();
})();