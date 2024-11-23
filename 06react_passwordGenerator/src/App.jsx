import { useCallback, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setLength] = useState(5);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);
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

  const copytoclipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);
  return (
    <>
      <div className="w-screen h-screen bg-[#233142] flex flex-col justify-center items-center  ">
        <div className="bg-[#e3e3e3] p-5 border flex flex-col items-center rounded-xl shadow-white shadow-lg border-solid  border-black">
          <h1 className="text-5xl p-3 text-[#233142]">PASSWORD GENERATOR</h1>
          <div className="">
            <input
              type="text"
              className="m-1 p-1 rounded-lg"
              value={password}
              name
              placeholder="password"
            />
            <input
              type="submit"
              className="m-1 p-1  rounded-full bg-[red] text-[#e3e3e3]"
              onClick={() => {
                passwordGenerator();
              }}
            />
            <button
              className="m-1 p-1  rounded-full bg-[#233142] text-[#e3e3e3]"
              onClick={() => {
                copytoclipboard();
              }}
            >
              Copy
            </button>
          </div>
          <div className="h-10  w-full flex items-center gap-4">
            <div>
              <input
                className="px-2 align-middle"
                type="range"
                min={1}
                max={100}
                value={length}
                onChange={(e) => {
                  setLength(Number(e.target.value));
                }}
              />
              <label className="w-100 px-2 m-1">length: {length}</label>
            </div>
            <div>
              <input
                className="align-middle"
                type="checkbox"
                name="ch"
                id=""
                onChange={(e) => {
                  setCharAllowed(e.target.checked);
                }}
              />
              <label className="px-2" htmlFor="ch">
                Include Characters
              </label>
            </div>
            <div>
              <input
                className="align-middle"
                type="checkbox"
                name="num"
                id=""
                onChange={(e) => {
                  setnumberAllowed(e.target.checked);
                }}
              />
              <label className="px-2" htmlFor="num">
                Include Numbers
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
