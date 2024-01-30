const currencyData = {
    "USD": { "name": "United States Dollar", "rate": 1 },
    "AED": { "name": "United Arab Emirates Dirham", "rate": 3.6725 },
    "AFN": { "name": "Afghan Afghani", "rate": 73.1068 },
    "ALL": { "name": "Albanian Lek", "rate": 96.5581 },
    "AMD": { "name": "Armenian Dram", "rate": 403.5276 },
    "ANG": { "name": "Netherlands Antillean Guilder", "rate": 1.79 },
    "AOA": { "name": "Angolan Kwanza", "rate": 837.6896 },
    "ARS": { "name": "Argentine Peso", "rate": 823.55 },
    "AUD": { "name": "Australian Dollar", "rate": 1.5201 },
    "AWG": { "name": "Aruban Florin", "rate": 1.79 },
    "AZN": { "name": "Azerbaijani Manat", "rate": 1.7087 },
    "BAM": { "name": "Bosnia-Herzegovina Convertible Mark", "rate": 1.8025 },
    "BBD": { "name": "Barbadian Dollar", "rate": 2 },
    "BDT": { "name": "Bangladeshi Taka", "rate": 109.565 },
    "BGN": { "name": "Bulgarian Lev", "rate": 1.8025 },
    "BHD": { "name": "Bahraini Dinar", "rate": 0.376 },
    "BIF": { "name": "Burundian Franc", "rate": 2846.6187 },
    "BMD": { "name": "Bermudian Dollar", "rate": 1 },
    "BND": { "name": "Brunei Dollar", "rate": 1.3419 },
    "BOB": { "name": "Bolivian Boliviano", "rate": 6.8321 },
    "BRL": { "name": "Brazilian Real", "rate": 4.9162 },
    "BSD": { "name": "Bahamian Dollar", "rate": 1 },
    "BTN": { "name": "Bhutanese Ngultrum", "rate": 83.1816 },
    "BWP": { "name": "Botswana Pula", "rate": 13.6273 },
    "BYN": { "name": "Belarusian Ruble", "rate": 3.2072 },
    "BZD": { "name": "Belize Dollar", "rate": 2 },
    "CAD": { "name": "Canadian Dollar", "rate": 1.3449 },
    "CDF": { "name": "Congolese Franc", "rate": 2662.5229 },
    "CHF": { "name": "Swiss Franc", "rate": 0.8642 },
    "CLP": { "name": "Chilean Peso", "rate": 911.7081 },
    "CNY": { "name": "Chinese Yuan Renminbi", "rate": 7.1886 },
    "COP": { "name": "Colombian Peso", "rate": 3981.8852 },
    "CRC": { "name": "Costa Rican Colon", "rate": 515.7866 },
    "CUP": { "name": "Cuban Peso", "rate": 24 },
    "CVE": { "name": "Cape Verdean Escudo", "rate": 101.6211 },
    "CZK": { "name": "Czech Koruna", "rate": 22.8229 },
    "DJF": { "name": "Djiboutian Franc", "rate": 177.721 },
    "DKK": { "name": "Danish Krone", "rate": 6.8754 },
    "DOP": { "name": "Dominican Peso", "rate": 57.2729 },
    "DZD": { "name": "Algerian Dinar", "rate": 133.9335 },
    "EGP": { "name": "Egyptian Pound", "rate": 30.9221 },
    "ERN": { "name": "Eritrean Nakfa", "rate": 15 },
    "ETB": { "name": "Ethiopian Birr", "rate": 56.6015 },
    "EUR": { "name": "Euro", "rate": 0.9217 },
    "FJD": { "name": "Fijian Dollar", "rate": 2.2325 },
    "FKP": { "name": "Falkland Islands Pound", "rate": 0.7872 },
    "FOK": { "name": "Faroese Krona", "rate": 6.8742 },
    "GBP": { "name": "British Pound", "rate": 0.7873 },
    "GEL": { "name": "Georgian Lari", "rate": 2.669 },
    "GGP": { "name": "Guernsey Pound", "rate": 0.7872 },
    "GHS": { "name": "Ghanaian Cedi", "rate": 12.3522 },
    "GIP": { "name": "Gibraltar Pound", "rate": 0.7872 },
    "GMD": { "name": "Gambian Dalasi", "rate": 66.9106 },
    "GNF": { "name": "Guinean Franc", "rate": 8555.0133 },
    "GTQ": { "name": "Guatemalan Quetzal", "rate": 7.7279 },
    "GYD": { "name": "Guyanese Dollar", "rate": 209.3666 },
    "HKD": { "name": "Hong Kong Dollar", "rate": 7.8144 },
    "HNL": { "name": "Honduran Lempira", "rate": 24.3783 },
    "HRK": { "name": "Croatian Kuna", "rate": 6.9439 },
    "HTG": { "name": "Haitian Gourde", "rate": 131.7413 },
    "HUF": { "name": "Hungarian Forint", "rate": 356.8179 },
    "IDR": { "name": "Indonesian Rupiah", "rate": 15794.3377 },
    "ILS": { "name": "Israeli Shekel", "rate": 3.6927 },
    "IMP": { "name": "Isle of Man Pound", "rate": 0.7872 },
    "INR": { "name": "Indian Rupee", "rate": 83.1649 },
    "IQD": { "name": "Iraqi Dinar", "rate": 1308.8672 },
    "IRR": { "name": "Iranian Rial", "rate": 42006.1101 },
    "ISK": { "name": "Iceland Krona", "rate": 136.4841 },
    "JEP": { "name": "Jersey Pound", "rate": 0.7872 },
    "JMD": { "name": "Jamaican Dollar", "rate": 155.5285 },
    "JOD": { "name": "Jordanian Dinar", "rate": 0.709 },
    "JPY": { "name": "Japanese Yen", "rate": 148.0252 },
    "KES": { "name": "Kenyan Shilling", "rate": 162.5429 },
    "KGS": { "name": "Kyrgyzstani Som", "rate": 89.2963 },
    "KHR": { "name": "Cambodian Riel", "rate": 4099.0173 },
    "KID": { "name": "Kiribati Dollar", "rate": 1.5203 },
    "KMF": { "name": "Comorian Franc", "rate": 453.4015 },
    "KRW": { "name": "South Korean Won", "rate": 1335.7376 },
    "KWD": { "name": "Kuwaiti Dinar", "rate": 0.3074 },
    "KYD": { "name": "Cayman Islands Dollar", "rate": 0.8333 },
    "KZT": { "name": "Kazakhstani Tenge", "rate": 450.274 },
    "LAK": { "name": "Lao Kip", "rate": 20346.4867 },
    "LBP": { "name": "Lebanese Pound", "rate": 15000 },
    "LKR": { "name": "Sri Lankan Rupee", "rate": 317.4909 },
    "LRD": { "name": "Liberian Dollar", "rate": 188.8961 },
    "LSL": { "name": "Lesotho Loti", "rate": 18.7931 },
    "LYD": { "name": "Libyan Dinar", "rate": 4.8163 },
    "MAD": { "name": "Moroccan Dirham", "rate": 9.973 },
    "MDL": { "name": "Moldovan Leu", "rate": 17.7089 },
    "MGA": { "name": "Malagasy Ariary", "rate": 4526.6202 },
    "MKD": { "name": "Macedonian Denar", "rate": 56.7307 },
    "MMK": { "name": "Myanmar Kyat", "rate": 2077.397 },
    "MNT": { "name": "Mongolian Tugrik", "rate": 3427.5484 },
    "MOP": { "name": "Macau Pataca", "rate": 8.049 },
    "MRU": { "name": "Mauritanian Ouguiya", "rate": 39.5875 },
    "MUR": { "name": "Mauritian Rupee", "rate": 44.8681 },
    "MVR": { "name": "Maldivian Rufiyaa", "rate": 15.4269 },
    "MWK": { "name": "Malawian Kwacha", "rate": 1683.6249 },
    "MXN": { "name": "Mexican Peso", "rate": 17.1677 },
    "MYR": { "name": "Malaysian Ringgit", "rate": 4.7277 },
    "MZN": { "name": "Mozambican Metical", "rate": 63.8594 },
    "NAD": { "name": "Namibian Dollar", "rate": 18.7931 },
    "NGN": { "name": "Nigerian Naira", "rate": 897.1376 },
    "NIO": { "name": "Nicaraguan Cordoba", "rate": 36.3495 },
    "NOK": { "name": "Norwegian Krone", "rate": 10.4296 },
    "NPR": { "name": "Nepalese Rupee", "rate": 133.0905 },
    "NZD": { "name": "New Zealand Dollar", "rate": 1.6405 },
    "OMR": { "name": "Omani Rial", "rate": 0.3845 },
    "PAB": { "name": "Panamanian Balboa", "rate": 1 },
    "PEN": { "name": "Peruvian Sol", "rate": 3.7923 },
    "PGK": { "name": "Papua New Guinean Kina", "rate": 3.7075 },
    "PHP": { "name": "Philippine Peso", "rate": 56.3456 },
    "PKR": { "name": "Pakistani Rupee", "rate": 279.7754 },
    "PLN": { "name": "Polish Zloty", "rate": 4.0289 },
    "PYG": { "name": "Paraguayan Guarani", "rate": 7277.0455 },
    "QAR": { "name": "Qatari Riyal", "rate": 3.64 },
    "RON": { "name": "Romanian Leu", "rate": 4.5811 },
    "RSD": { "name": "Serbian Dinar", "rate": 107.9204 },
    "RUB": { "name": "Russian Ruble", "rate": 89.8742 },
    "RWF": { "name": "Rwandan Franc", "rate": 1280.2396 },
    "SAR": { "name": "Saudi Riyal", "rate": 3.75 },
    "SBD": { "name": "Solomon Islands Dollar", "rate": 8.5005 },
    "SCR": { "name": "Seychellois Rupee", "rate": 14.2577 },
    "SDG": { "name": "Sudanese Pound", "rate": 458.7868 },
    "SEK": { "name": "Swedish Krona", "rate": 10.456 },
    "SGD": { "name": "Singapore Dollar", "rate": 1.3422 },
    "SHP": { "name": "Saint Helena Pound", "rate": 0.7872 },
    "SLE": { "name": "Sierra Leonean Leone", "rate": 22.4799 },
    "SLL": { "name": "Sierra Leonean Leone", "rate": 22479.9107 },
    "SOS": { "name": "Somali Shilling", "rate": 571.6542 },
    "SRD": { "name": "Surinamese Dollar", "rate": 36.9106 },
    "SSP": { "name": "South Sudanese Pound", "rate": 1103.8207 },
    "STN": { "name": "São Tomé and Príncipe Dobra", "rate": 22.5794 },
    "SYP": { "name": "Syrian Pound", "rate": 12743.8421 },
    "SZL": { "name": "Swazi Lilangeni", "rate": 18.7931 },
    "THB": { "name": "Thai Baht", "rate": 35.6048 },
    "TJS": { "name": "Tajikistani Somoni", "rate": 10.9248 },
    "TMT": { "name": "Turkmenistan Manat", "rate": 3.4995 },
    "TND": { "name": "Tunisian Dinar", "rate": 3.1052 },
    "TOP": { "name": "Tongan Pa'anga", "rate": 2.3322 },
    "TRY": { "name": "Turkish Lira", "rate": 30.3456 },
    "TTD": { "name": "Trinidad and Tobago Dollar", "rate": 6.6358 },
    "TVD": { "name": "Tuvaluan Dollar", "rate": 1.5203 },
    "TWD": { "name": "New Taiwan Dollar", "rate": 31.2055 },
    "TZS": { "name": "Tanzanian Shilling", "rate": 2541.3059 },
    "UAH": { "name": "Ukrainian Hryvnia", "rate": 37.7895 },
    "UGX": { "name": "Ugandan Shilling", "rate": 3800.2997 },
    "UYU": { "name": "Uruguayan Peso", "rate": 38.9075 },
    "UZS": { "name": "Uzbekistani Som", "rate": 12320.3637 },
    "VES": { "name": "Venezuelan Bolívar", "rate": 36.2020 },
    "VND": { "name": "Vietnamese Dong", "rate": 24503.4828 },
    "VUV": { "name": "Vanuatu Vatu", "rate": 119.7050 },
    "WST": { "name": "Samoan Tala", "rate": 2.7189 },
    "XAF": { "name": "Central African CFA Franc", "rate": 604.5354 },
    "XCD": { "name": "East Caribbean Dollar", "rate": 2.7000 },
    "XDR": { "name": "Special Drawing Rights", "rate": 0.7526 },
    "XOF": { "name": "West African CFA Franc", "rate": 604.5354 },
    "XPF": { "name": "CFP Franc", "rate": 109.9774 },
    "YER": { "name": "Yemeni Rial", "rate": 247.1610 },
    "ZAR": { "name": "South African Rand", "rate": 18.7918 },
    "ZMW": { "name": "Zambian Kwacha", "rate": 26.9984 },
    "ZWL": { "name": "Zimbabwean Dollar", "rate": 9686.6114 }
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
