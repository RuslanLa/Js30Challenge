(async function() {
  const endpoint =
    "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

  const cities = await fetchCities();
  async function fetchCities() {
    console.log('fetch');
    const result = await fetch(endpoint);
    const cities = await result.json();
    return cities;
  }
  async function fillCities(word) {
    const suggestions = document.querySelector(".suggestions");
    const elements = findMatches(word, cities).map(c => convertToDomElement(c, word)).join('');
    suggestions.innerHTML = elements;
  }
  function findMatches(word, cities) {
    const regex = new RegExp(word, "gi");
    return cities.filter(
      place => place.city.match(regex) || place.state.match(regex)
    );
  }

  function convertToDomElement(place, word) {
    const regex = new RegExp(word, 'gi');
    const cityName = place.city.replace(regex, `<span class="hl">${word}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${word}</span>`)

    return `<li>
              <span class='name'>${cityName}, ${stateName}</span>
              <span class='population'>${place.population}</span>
            <li>`
  }

  const searchInp = document.querySelector(".search");

  searchInp.addEventListener("change", function() {
    fillCities(this.value);
  });

  searchInp.addEventListener("keyup", function() {
    fillCities(this.value);
  });
})();
