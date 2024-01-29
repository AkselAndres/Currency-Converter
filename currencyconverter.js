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