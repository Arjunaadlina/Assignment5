// fetchRates.js
import axios from "axios";

export const fetchRates = async () => {
    try {
        const response = await axios.get(`https://api.currencyfreaks.com/latest?apikey=622f01ead3664ec99e3c46f4fbbe7b4a`);
        const { CAD, IDR, JPY, CHF, EUR, GBP } = response.data.rates;

        const rates = {
            CAD: {
                currency: "CAD",
                exchangeRate: parseFloat(CAD),
                weBuy: parseFloat(CAD) * 1.05,
                weSell: parseFloat(CAD) * 0.95,
            },
            IDR: {
                currency: "IDR",
                exchangeRate: parseFloat(IDR),
                weBuy: parseFloat(IDR) * 1.05,
                weSell: parseFloat(IDR) * 0.95,
            },
            JPY: {
                currency: "JPY",
                exchangeRate: parseFloat(JPY),
                weBuy: parseFloat(JPY) * 1.05,
                weSell: parseFloat(JPY) * 0.95,
            },
            CHF: {
                currency: "CHF",
                exchangeRate: parseFloat(CHF),
                weBuy: parseFloat(CHF) * 1.05,
                weSell: parseFloat(CHF) * 0.95,
            },
            EUR: {
                currency: "EUR",
                exchangeRate: parseFloat(EUR),
                weBuy: parseFloat(EUR) * 1.05,
                weSell: parseFloat(EUR) * 0.95,
            },
            GBP: {
                currency: "GBP",
                exchangeRate: parseFloat(GBP),
                weBuy: parseFloat(GBP) * 1.05,
                weSell: parseFloat(GBP) * 0.95,
            },
        };
        
        return rates;
    } catch (err) {
        throw new Error("Failed to fetch exchange rates. Please try again.");
    }
};
