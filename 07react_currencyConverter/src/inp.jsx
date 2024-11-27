import { useState, useId } from "react";
import "./index.css";

function Inp({
  label,
  amount = 0,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
}) {
  const [curr, setcurr] = useState(0);
  return (
    <>
      <div className="w-full m-2 p-2 bg-white rounded-xl text-slate-400  selected">
        <div className="flex justify-between">
          <label htmlFor="">{label}</label>
          <label htmlFor="">Currency Type</label>
        </div>
        <div className="flex justify-between text-black">
          <input
            className="w-1/2 cursor-blink"
            type="text"
            disabled={amountDisable}
            value={amount}
            onChange={(e) =>
              onAmountChange && onAmountChange(Number(e.target.value))
            }
          />
          <select
            className=""
            value={selectCurrency}
            onChange={(e) =>
              onCurrencyChange && onCurrencyChange(e.target.value)
            }
            disabled={currencyDisable}
          >
            {currencyOption.map((cur) => {
              return (
                <option key={cur} value={cur}>
                  {cur.toUpperCase()}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </>
  );
}
export default Inp;
