const currencyData = {
    "USD": { "name": "United States Dollar", "rate": 1 },
    "AED": { "name": "United Arab Emirates Dirham", "rate": 3.6725 }
};

async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const url = `https://v6.exchangerate-api.com/v6/ef0a6d0d40af35d5d031a059/latest/${fromCurrency}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const exchangeRate = data.conversion_rates[toCurrency];
            const convertedAmount = amount * exchangeRate;
            document.getElementById("result").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
        } else {
            document.getElementById("result").innerText = "Unable to fetch exchange rates.";
        }
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
        document.getElementById("result").innerText = "Error fetching exchange rates.";
    }
}

async function populateCurrencies() {
    const fromCurrencyDropdown = document.getElementById("fromCurrency");
    const toCurrencyDropdown = document.getElementById("toCurrency");

    Object.keys(currencyData).forEach(currency => {
        const option = document.createElement("option");
        option.value = currency;
        option.text = `${currency} - ${currencyData[currency].name}`;
        fromCurrencyDropdown.add(option);

        const option2 = document.createElement("option");
        option2.value = currency;
        option2.text = `${currency} - ${currencyData[currency].name}`;
        toCurrencyDropdown.add(option2);
    });

    generateCurrencyTable();
}

function generateCurrencyTable() {
    const currencyTableBody = document.getElementById("currencyTableBody");
    currencyTableBody.innerHTML = ''; 

    Object.keys(currencyData).forEach(currency => {
        const row = document.createElement("tr");

        const currencyCodeCell = document.createElement("td");
        currencyCodeCell.textContent = currency;
        row.appendChild(currencyCodeCell);

        const currencyNameCell = document.createElement("td");
        currencyNameCell.textContent = currencyData[currency].name;
        row.appendChild(currencyNameCell);

        const conversionRateCell = document.createElement("td");
        conversionRateCell.textContent = currencyData[currency].rate.toFixed(4);
        row.appendChild(conversionRateCell);

        currencyTableBody.appendChild(row);
    });
}

window.onload = populateCurrencies;
