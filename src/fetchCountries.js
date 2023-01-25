export function fetchCountries(e) {
    return fetch(`https://restcountries.com/v3.1/name/${e.target.value.trim()}`)
        .then(response => response.json());
};
