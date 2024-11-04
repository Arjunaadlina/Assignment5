import React, { useEffect, useState } from "react";
import { fetchRates } from "../api/API";

function Tables() {
  const [exchangeRates, setExchangeRates] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rates = await fetchRates();
        setExchangeRates(rates);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);
  const formatCurrency = (value, currency) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: currency,
      currencyDisplay: "symbol",
      minimumFractionDigits: 2,
    }).format(value);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-semibold text-center mb-6 text-gray-800">Kurs Mata Uang</h1>
      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-gray-800 text-white text-left">
              <th className="py-3 px-4 font-medium uppercase">Mata Uang</th>
              <th className="py-3 px-4 font-medium uppercase">We Buy</th>
              <th className="py-3 px-4 font-medium uppercase">Exchange Rate</th>
              <th className="py-3 px-4 font-medium uppercase">We Sell</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(exchangeRates).map((currencyKey, index) => {
              const rate = exchangeRates[currencyKey];
              return (
                <tr
                  key={currencyKey}
                  className={`${
                    index % 2 === 0 ? "bg-blue-50" : "bg-slate-150"
                  } hover:bg-gray-200`}
                >
                  <td className="py-3 px-4 text-gray-700 font-semibold">{rate.currency}</td>
                  <td className="py-3 px-4 text-green-600 font-medium">
                    {formatCurrency(rate.weBuy, rate.currency)}
                  </td>
                  <td className="py-3 px-4 text-blue-600 font-medium">
                    {formatCurrency(rate.exchangeRate, rate.currency)}
                  </td>
                  <td className="py-3 px-4 text-red-600 font-medium">
                    {formatCurrency(rate.weSell, rate.currency)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Tables;
