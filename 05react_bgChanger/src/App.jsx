import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setColor] = useState("");
  return (
    <>
      <div
        className="w-full h-screen duration-1"
        style={{ backgroundColor: color }}
      ></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap shadow-lg bg-white px-3 py-2 rounded-3xl justify-between gap-3 ">
          <button
            className="outline-none px-4 py-1 bg-red-600 rounded-3xl"
            onClick={() => {
              setColor("red");
            }}
          >
            Red
          </button>
          <button
            className="outline-none px-4 py-1 bg-blue-600 rounded-3xl"
            onClick={() => {
              setColor("blue");
            }}
          >
            Blue
          </button>
          <button
            className="outline-none px-4 py-1 bg-green-600 rounded-3xl"
            onClick={() => {
              setColor("green");
            }}
          >
            Green
          </button>
          <button
            className="outline-none px-4 py-1 bg-black text-white rounded-3xl"
            onClick={() => {
              setColor("black");
            }}
          >
            Black
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
