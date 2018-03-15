(function(){
    const removeTransition = (e) => {
        e.target.classList.remove('playing');
    };

    const playAudioFromTheBeginning = (audio) =>{
        audio.currentTime = 0;
        audio.play();
    };
    const play = (e) => {
        const dataKeySelector = `[data-key="${e.keyCode}"]`;
        if(e.keyCode == null) console.error("Unexpected empty keyCode");
        const audio = document.querySelector(`audio${dataKeySelector}`);
        const playedKey = document.querySelector(`div.key:not(.playing)${dataKeySelector}`);
        if(!audio || !playedKey){
            return;
        }
        audio.currentTime = 0;
        audio.play();
        playedKey.classList.add('playing');
    };
    const keys = document.querySelectorAll('.keys');
    keys.forEach(k=>k.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', play);
})();