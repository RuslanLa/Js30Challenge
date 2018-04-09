const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const removeNonValuableWords = (str) => str.replace(/^(A |The | An )/i, "").trim();
const sorted = bands.sort((a,b)=>removeNonValuableWords(a)> removeNonValuableWords(b)?1:-1);
const listItems = sorted.map(name=>`<li>${name}</li>`).join('');
document.querySelector('#bands').innerHTML = listItems;
