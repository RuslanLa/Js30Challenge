(function(){
    const secondsHand = document.querySelector('.second-hand');
    const minutesHand = document.querySelector('.min-hand');
    const hoursHand = document.querySelector('.hour-hand');
    function animateHand(handValue, animationBasis, duration, hand){
        hand.style.animation = `time${animationBasis}-${handValue} ${duration}s infinite`;
    }
    function setTime(){
        const date = new Date();
        animateHand(date.getSeconds(), 60, 60, secondsHand);
        animateHand(date.getMinutes(), 60, 3600, minutesHand);
        animateHand(date.getHours()%12, 12, 3600*12, hoursHand);
    }
    setTime();
})();