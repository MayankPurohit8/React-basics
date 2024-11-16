import { useState } from "react";
import "./App.css";
function App() {
  let [count, setCount] = useState(15);
  const upcount = () => {
    setCount(count + 1);
  };
  const downcount = () => {
    setCount(count - 1);
  };
  return (
    <>
      <h1>REACT</h1>
      <h2>counter value: {count}</h2>
      <button onClick={upcount}>+</button>
      <button onClick={downcount}>-</button>
    </>
  );
}

export default App;
