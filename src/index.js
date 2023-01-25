import './css/styles.css';
import Notiflix from 'notiflix';
import { fetchCountries } from './fetchCountries.js';
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input', debounce(searchCoutries, DEBOUNCE_DELAY))

function searchCoutries(e) {
    fetchCountries(e)
        .then(countriesArray => {
            reset();
            if (!e.target.value) {
                return;
            };
            if (countriesArray.length <= 10 && countriesArray.length > 1) {
                countriesArray.forEach(country => makeCountriesList(country));
            };
            if (countriesArray.length === 1) {
                countriesArray.forEach(country => makeTargetCountry(country));
            };
            if (countriesArray.length >= 10) {
                Notiflix.Notify.info("Too many matches found. Please enter a more specific name.");
            };
            if (!countriesArray.length) {
                Notiflix.Notify.failure("Oops, there is no country with that name");
            };
        })
        .catch(err => console.log(err));
};

function makeCountriesList(country) {
    const item = `<li><div class='flag' ><img src=${country.flags.svg} /></div><p>${country.name.official}</p></li>`;
    countryList.insertAdjacentHTML('beforeend', item);
};

function makeTargetCountry(country) {
    const targetCountry = `<div class='country'><div class='flag-main'><img  src=${country.flags.svg} /></div><h1 class='title'>${country.name.official}</h1>
     <p><b>Capital:</b> ${country.capital}</p>
      <p><b>Population:</b> ${country.population}</p>
       <p><b>Languages:</b> ${Object.values(country.languages)}</p></div>`;
    countryInfo.innerHTML = targetCountry;
};

function reset() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';  
};