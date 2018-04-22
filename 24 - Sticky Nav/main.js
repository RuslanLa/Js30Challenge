const nav = document.querySelector('#main');
let topOfNav = nav.offsetTop;

function fixNav() {
    const isFixed = window.scrollY >= topOfNav;
    document.body.style.paddingTop = isFixed ?
        `${nav.offsetHeight}px` : '0px';
    document.body.classList[isFixed ? 'add' : 'remove']('fixed-nav');
}

window.addEventListener('scroll', fixNav);
window.addEventListener('resize', () => topOfNav = nav.offsetTop);