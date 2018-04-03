const pressed = [];
const secretCode = 'wesbos';
window.addEventListener('keyup', (e)=>{
    pressed.push(e.key);
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('') === secretCode){
        console.log('%cCONGRATS!!!!!', 'color:red; font-size:30px;');
    }
});