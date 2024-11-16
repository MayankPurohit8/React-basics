import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./card";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-300">test Tailwind</h1>
      <Card username="Mayank" />
      <Card />
    </>
  );
}

export default App;
