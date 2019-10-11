let url // 'https://api.worldbank.org/v2/country/br?format=json'// original link

let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector("#user-answer")
let submitButton = document.querySelector("#submit-answer")
let resultTextElement = document.querySelector('#result')
let clrBtn = document.querySelector("#clir-answer")


// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array of country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files as one big file, o
// organized in the order of the script tags so the countriesAndCodes array is available to this script.

function worldBank(){//creating function
let browserUrl = getCCode();
url= "https://api.worldbank.org/v2/country/"+browserUrl+"?format=json"
fetch(url)//a function that takes API path as parameter
.then(res => res.json())//convert json to readable format
.then(worldBankData => {//content of the fetched data
    console.log(worldBankData)
    worldBankData[1].forEach(element => {
        resultTextElement.innerHTML = element.capitalCity
    })
})
    .catch (err => {
       // console.log(err)
        alert("ERROR!!!, DATA CANNOT BE FETCH, TRY AGAIN LATER")
        
    })
    //console.log(worldBankData)

}

let newUrl
let state = []// create an empty array
let allCodes = []
let eachCountry;//declare a variable to hold individual country
function fetchCountries()//created a function to fetch individual country
{
    countriesAndCodes.forEach(function(el){//looping over CountryAndCode arry
       //console.log(el.name); 
       state.push(el.name)// it adds the countries into state array
       allCodes.push(el["alpha-2"]); // it adds the codes into allCodes array
    })
    
     eachCountry =state[Math.floor(Math.random() * state.length)] //randomizing the country names 
     return eachCountry
     //console.log(eachCountry)   
}
function getCCode()// function to get country code
{
    for(let i=0; i < state.length; i++) //loop
    {
        if(state[i].toUpperCase() === eachCountry.toUpperCase()) //loop and compare country
        {
            newUrl = allCodes[i].toLowerCase()// get corresponding code, change code to lower case
        }
    }
        return newUrl; // url for next to get country capital
}

//window.onload=fetchCountries();
window.addEventListener("load", function(){//window loading event
    randomCountryElement.innerHTML = fetchCountries();//execute function to get country at random
    resultTextElement.innerHTML = ""
    getCCode(); //call function
})

clrBtn.addEventListener("click", function(){
    randomCountryElement.innerHTML = fetchCountries();//execute function to get country at random
    resultTextElement.innerHTML = ""
    userAnswerElement.value =""
})


submitButton.addEventListener("click", function(){
    worldBank()
})

// TODO when the page loads, select an element at random from the countriesAndCodes array
//countriesAndCodes

// TODO display the country's name in the randomCountryElement 

// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the country code (from countriesAndCodes)
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare it to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example "Correct! The capital of Germany is Berlin" or "Wrong - the capital of Germany is not G, it is Berlin"


