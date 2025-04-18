// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";

export default function App() {
  const [originalValue, setOriginalValue] = useState("");
  const [convertedValue, setConvertedValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");

  useEffect(
    function () {
      const controller = new AbortController();

      async function getConvertion() {
        try {
          if (fromCurrency === toCurrency || originalValue === "") {
            setConvertedValue(originalValue);
            return;
          }

          const res = await fetch(
            `https://api.frankfurter.app/latest?amount=${originalValue}&from=${fromCurrency}&to=${toCurrency}`,
            { signal: controller.signal },
          );
          const json = await res.json();
          setConvertedValue(() => json.rates[toCurrency]);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.error(err);
          }
        }
      }

      getConvertion();

      return function () {
        controller.abort();
      };
    },
    [originalValue, fromCurrency, toCurrency],
  );

  return (
    <div>
      <input type="text" onChange={(e) => setOriginalValue(e.target.value)} />
      <select onChange={(e) => setFromCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select onChange={(e) => setToCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{convertedValue}</p>
    </div>
  );
}
