// // const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";

// // const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies";
// // const BASE_URL = "https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.jason";
// const BASE_URL = "https://v6.exchangerate-api.com/v6/55b5e0f1734cff1fc7acaf89/latest";

// const dropdowns = document.querySelectorAll(".dropdown select");
// const btn = document.querySelector("form button");
// const fromCurr= document.querySelector(".from select");
// const toCurr= document.querySelector(".to select");
// const msg = document.querySelector(".msg")

// for(let select of dropdowns) {
//     for(currCode in countryList) {
//         let newOption = document.createElement("option");
//         newOption.innerText = currCode;
//         newOption.value = currCode;
//         if(select.name === "from" && currCode === "PKR") { 
//             newOption.selected = "selected";
//         }
//         else if(select.name === "To" && currCode === "USD") { 
//             newOption.selected = "selected";
//         }
//         select.append(newOption);
// }
//  select.addEventListener("change", (evt) => {
//      updateFlag(evt.target);
//  });
// }

// const updateFlag = (element) => {
//     let currCode = element.value;
//     let countryCode = countryList[currCode];
//     let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
//     let img = element.parentElement.querySelector("img");
//     img.src = newSrc;
// };


// btn.addEventListener("click", async (evt) => {
//       evt.preventDefault();
//       let amount = document.querySelector(".Amount input");
//       let amtValue = amount.value;
//       if(amtValue === "" || amtValue < 1) {
//          amtValue = 1;
//          amount.value = "1";
//       }
//       const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`;
//       let response = await fetch(URL);
//       console.log(response);
//       let data = await response.json();
//       let rate = data[toCurr.value.toLowerCase()];
//       console.log(rate);
//     let finalAmount = amtValue * rate;
//     msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
// });





// !      Chatgpt Created this:

// Replace YOUR_API_KEY with your actual API key from exchange-rate-api.com


const BASE_URL = "https://v6.exchangerate-api.com/v6/55b5e0f1734cff1fc7acaf89/latest";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".msg");

// Assuming countryList is defined in fetchApi.js with currency codes and country codes
for (let select of dropdowns) {
    for (let currCode in countryList) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;

        if (select.name === "from" && currCode === "PKR") {
            newOption.selected = "selected";
        } else if (select.name === "To" && currCode === "USD") {
            newOption.selected = "selected";
        }
        select.append(newOption);
    }

    select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
}

const updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newSrc;
};

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();
    let amount = document.querySelector(".Amount input");
    let amtValue = amount.value;

    if (amtValue === "" || amtValue < 1) {
        amtValue = 1;
        amount.value = "1";
    }

    try {
        const URL = `${BASE_URL}/${fromCurr.value}`;
        let response = await fetch(URL);
        
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rate");
        }
        
        let data = await response.json();
        let rate = data.conversion_rates[toCurr.value];

        let finalAmount = amtValue * rate;
        msg.innerText = `${amtValue} ${fromCurr.value} = ${finalAmount.toFixed(2)} ${toCurr.value}`;
    } catch (error) {
        console.error("Error fetching data:", error);
        msg.innerText = "Error fetching exchange rate. Please try again.";
    }
});





//!                 //......................................................... The End ........................................................... //