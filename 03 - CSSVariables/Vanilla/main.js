(function(){
    const changeVariable = (event) => document.documentElement.style.setProperty(`--${event.currentTarget.name}`, `${event.currentTarget.value}${event.currentTarget.dataset.sizing||''}`);
    document.querySelectorAll('.controls input').forEach(i=>{
        i.addEventListener('change', changeVariable);
        i.addEventListener('mousemove', changeVariable);
    })
})();