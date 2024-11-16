import { useCallback, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_+{}|";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed, password]);
  return (
    <>
      <div className="flex flex-col justify-center bg-red-200 m-5">
        <h1 className="text-3xl py-2">PASSWORD GENERATOR</h1>
        <input
          type="text"
          className="w-2/5"
          value={password}
          name
          placeholder="password"
          readOnly
        />
        <div className="">
          <input
            type="range"
            min={1}
            max={100}
            value={length}
            onChange={(e) => {
              setLength(Number(e.target.value));
            }}
          />
          <label>length: {length}</label>
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => {
              setCharAllowed(e.target.checked);
            }}
          />
          char
          <input
            type="checkbox"
            name=""
            id=""
            onChange={(e) => {
              setnumberAllowed(e.target.checked);
            }}
          />
          number
          <input
            type="submit"
            className="bg-white"
            onClick={() => {
              passwordGenerator();
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
