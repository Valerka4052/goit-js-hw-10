export function fetchCountries(e) {
    return fetch(`https://restcountries.com/v3.1/name/${e.target.value.trim()}?fields=name,capital,population,flags,languages`)
        .then(response => response.json());
};
