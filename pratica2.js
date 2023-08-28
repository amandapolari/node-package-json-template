import { countries } from './countries.js';

const datas = countries;
// console.table(datas);

function getCountryCodeByName(name) {
    const country = datas.find(
        (country) => country.name.toLowerCase() === name.toLowerCase()
    );
    return country;
}

console.table(getCountryCodeByName(process.argv[2]));
