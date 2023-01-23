import './css/styles.css';
import Notiflix from 'notiflix';
import {fetchCountries} from './fetchCountries'
var debounce = require('lodash.debounce');
const DEBOUNCE_DELAY = 300;

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

input.addEventListener('input',debounce(fetchCountries, DEBOUNCE_DELAY))