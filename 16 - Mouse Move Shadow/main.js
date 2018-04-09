const hero = document.querySelector('.hero');
const text = document.querySelector('.hero>h1');
const walk = 10;
function shadow(e){
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;
    if(this !== e.target){
        x+=e.target.offsetLeft;
        y+=e.target.offsetTop;
    }
    const xWalk = Math.round(x/width * walk - walk/2);
    const yWalk = Math.round(y/height * walk - walk/2);
    text.style.textShadow = `${xWalk}px ${yWalk}px 0 rgba(0,0,0,1)`;
};
hero.addEventListener('mousemove', shadow);