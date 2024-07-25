import "./App.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleDecreaseStep() {
    setStep((s) => s - 1);
  }

  function handleIncreaseStep() {
    setStep((s) => s + 1);
  }

  function handleDecreaseCount() {
    setCount((c) => c - step);
  }

  function handleIncreaseCount() {
    setCount((c) => c + step);
  }

  function getDateStringIn(days) {
    let now = new Date(Date.now());
    return new Date(now.setDate(now.getDate() + days)).toDateString();
  }

  return (
    <>
      <div>
        <button onClick={handleDecreaseStep}>-</button>
        Step: {step}
        <button onClick={handleIncreaseStep}>+</button>
      </div>
      <div>
        <button onClick={handleDecreaseCount}>-</button>
        Count: {count}
        <button onClick={handleIncreaseCount}>+</button>
      </div>
      <div>
        {count === 0 && "Today is "}
        {count < 0 && -count + " days ago was "}
        {count > 0 && count + " days from now is "}
        {getDateStringIn(count)}
      </div>
    </>
  );
}
