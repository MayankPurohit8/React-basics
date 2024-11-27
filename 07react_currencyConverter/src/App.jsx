import { useState } from "react";
import Inp from "./inp";
import "./App.css";
import useCurrencyinfo from "./useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setto(from);
    setConverted(amount);
    setAmount(converted);
  };

  const Convert = () => {
    setConverted(amount * currencyInfo[to]);
  };

  return (
    <>
      <div className="bg-[url('./src/assets/back.jpg')] h-screen bg-cover bg-center flex justify-center items-center ">
        <div className="w-100 p-3 bg-slate-500 bg-opacity-50 rounded-xl flex flex-col items-center absolute">
          <Inp
            label={"From"}
            amount={amount}
            currencyOption={options}
            onCurrencyChange={(Currency) => {
              setFrom(Currency);
            }}
            selectCurrency={from}
            onAmountChange={(amount) => setAmount(amount)}
          />
          <input
            className="bg-blue-600 border-solid text-white rounded-xl p-2  absolute top-16 h-11 w-15 "
            type="button"
            value="swap"
            onClick={swap}
          />
          <Inp
            label={"To"}
            amount={converted}
            currencyOption={options}
            onCurrencyChange={(Currency) => {
              setto(Currency);
            }}
            selectCurrency={to}
          />
          <button
            className="bg-blue-600 p-2 w-full text-white rounded-xl"
            onClick={Convert}
          >
            Convert {from.toUpperCase()} to {to.toUpperCase()}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
