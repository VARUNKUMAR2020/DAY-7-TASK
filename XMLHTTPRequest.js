// Create a new XMLHttpRequest object
var request = new XMLHttpRequest();
request.addEventListener("load", task);

// Set the URL and send the request
request.open('GET', 'https://restcountries.com/v3.1/all', true);
request.send();

var task = function () {
    // Parse the response as JSON
    var response = JSON.parse(request.responseText);

    // Problem 1: Get all the countries from Asia continent/region using the Filter function
    var asiaCountries = response.filter(function (country) {
        return country.region === 'Asia';
    });
    console.log('Countries in Asia:', asiaCountries);

    // Problem 2: Get all the countries with a population of less than 2 lakhs using the Filter function
    var populationLessThan2Lakhs = response.filter(function (country) {
        return country.population < 200000;
    });
    console.log('Countries with population less than 2 lakhs:', populationLessThan2Lakhs);

    // Problem 3: Print the following details - name, capital, flag using the forEach function
    response.forEach(function (country) {
        console.log('Name:', country.name.common);
        console.log('Capital:', country.capital[0]);
        console.log('Flag:', country.flags.svg);
    });

    // Problem 4: Print the total population of countries using the reduce function
    var totalPopulation = response.reduce(function (acc, country) {
        return acc + country.population;
    }, 0);
    console.log('Total population of countries:', totalPopulation);

    // Problem 5: Print the country which uses US Dollars as currency
    var usDollarCountry = response.find(function (country) {
        return country.currencies && country.currencies.USD;
    });
    console.log('Country that uses US Dollars:', usDollarCountry);
}


