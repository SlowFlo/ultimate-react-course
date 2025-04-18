// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
import { useState, useEffect } from "react";

export default function App() {
  const [originalValue, setOriginalValue] = useState(1);
  const [convertedValue, setConvertedValue] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      const controller = new AbortController();

      const delayFetching = setTimeout(() => {
        async function getConvertion() {
          try {
            setIsLoading(true);

            const res = await fetch(
              `https://api.frankfurter.app/latest?amount=${originalValue}&from=${fromCurrency}&to=${toCurrency}`,
              { signal: controller.signal },
            );
            const data = await res.json();
            setConvertedValue(() => data.rates[toCurrency]);
          } catch (err) {
            if (err.name !== "AbortError") {
              console.error(err);
            }
          } finally {
            setIsLoading(false);
          }
        }

        if (fromCurrency === toCurrency) {
          return setConvertedValue(originalValue);
        }

        getConvertion();
      }, 1000);

      return function () {
        controller.abort();
        clearTimeout(delayFetching);
      };
    },
    [originalValue, fromCurrency, toCurrency],
  );

  return (
    <div>
      <input
        type="text"
        value={originalValue}
        onChange={(e) => setOriginalValue(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {convertedValue} {toCurrency}
      </p>
    </div>
  );
}
