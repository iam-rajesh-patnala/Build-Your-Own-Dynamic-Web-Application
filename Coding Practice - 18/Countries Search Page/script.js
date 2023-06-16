let searchInputEl = document.getElementById("searchInput");
let resultCountriesEl = document.getElementById("resultCountries");
let spinnerEl = document.getElementById("spinner");


let searchInputVal = "";
let countriesList = [];


function createAndAppendCountry(country) {

    let { name, flag, population } = country;
    // creating and appending countryEl to the resultCountriesEl
    let countryEl = document.createElement("div");
    countryEl.classList.add("country-card", "col-11", "col-md-5", "mr-auto", "ml-auto", "d-flex", "flex-row");
    resultCountriesEl.appendChild(countryEl);


    // creating and appending countryFlagEl to the countryEl
    let countryFlagEl = document.createElement("img");
    countryFlagEl.src = flag;
    countryFlagEl.classList.add("country-flag", "mt-auto", "mb-auto");
    countryEl.appendChild(countryFlagEl);


    // creating and appending countryInfoEl to the countryEl
    let countryInfoEl = document.createElement("div");
    countryInfoEl.classList.add("d-flex", "flex-column", "ml-4");
    countryEl.appendChild(countryInfoEl);

    // creating and appending countryNameEl to the countryInfoEl
    let countryNameEl = document.createElement("p");
    countryNameEl.classList.add("country-name");
    countryNameEl.innerText = name;
    countryInfoEl.appendChild(countryNameEl);

    // creating and appending countryPopulationEl to the countryInfoEl
    let countryPopulationEl = document.createElement("p");
    countryPopulationEl.classList.add("country-population");
    countryPopulationEl.innerText = population;
    countryInfoEl.appendChild(countryPopulationEl);
}


function displaySearchResults() { 

    resultCountriesEl.innerHTML = "";

    for (let country of countriesList) { 
        let countryName = country.name;

        if (countryName.toLowerCase().includes(searchInputVal.toLowerCase())) { 
            createAndAppendCountry(country);
        }
    }
}

function getCountries() { 
    let url = "https://apis.ccbp.in/countries-data";

    let options = {
        method: "GET",
    };

    spinnerEl.classList.remove("d-none");

    fetch(url, options)
        .then(function (response) { 
            return response.json()
        })
        .then(function (jsonData) { 
            spinnerEl.classList.add("d-none");
            countriesList = jsonData;
            displaySearchResults();
        })
}


function onChangeSearchInput(event) { 
    searchInputVal = event.target.value;
    displaySearchResults();
}


getCountries();
searchInputEl.addEventListener("keyup", onChangeSearchInput);