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
    const url = "https://v6.exchangerate-api.com/v6/ef0a6d0d40af35d5d031a059/latest/USD";

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.result === 'success') {
            const currencies = Object.keys(data.conversion_rates);

            const fromCurrencyDropdown = document.getElementById("fromCurrency");
            const toCurrencyDropdown = document.getElementById("toCurrency");

            currencies.forEach(currency => {
                const option = document.createElement("option");
                option.value = currency;
                option.text = currency;
                fromCurrencyDropdown.add(option);

                const option2 = document.createElement("option");
                option2.value = currency;
                option2.text = currency;
                toCurrencyDropdown.add(option2);
            });
        } else {
            console.error("Error fetching currencies:", data.error);
        }
    } catch (error) {
        console.error("Error fetching currencies:", error);
    }
}

window.onload = populateCurrencies;
