const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
document.querySelector('p').addEventListener('click', makeGreen);
function makeGreen() {
    this.style.color = '#BADA55';
    this.style.fontSize = '50px';
}

    // Regular
    console.log('Hello world!');
    // Interpolated
    const world = 'world';
    console.log('Hello %s!!', world);
    // Styled
    console.log('%cHello world!', 'font-size:50px; color: green;');    
    // warning!
    console.warn("What's going on!!!")
    // Error :|
    console.error('BOOOOM!');
    // Info
    console.info('Some information');
    // Testing
    console.assert(1!==1, 'Unbelievable')
    // clearing

    // Viewing DOM Elements
    const p = document.querySelector('p');
    console.log(p);
    console.dir(p);
    // Grouping together
    console.group('dogs')
    dogs.reduce((prev, next)=>{
        return ()=> {
            prev();
            console.group(`${next.name}`);
            console.log(`name: ${next.name}`);
            console.log(`age: ${next.age}`);
            console.groupEnd(`${next.name}`);
        }
    }, ()=>{})();
    console.groupEnd('dogs');
    // counting
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    console.count('Counter');
    // timing
    console.time('some operation');
    requestAnimationFrame(()=>{
        console.timeEnd('some operation');
    });