import { useState } from "react";
import reactLogo from "#/react.svg";
import "./App.css";
import HomeComponent from "../HomeComponent/HomeComponent";

function App() {
  const viteLogo = "/vite.svg";

  return (
    <>
      <HomeComponent />

      <div class="grid grid-cols-2 gap-4 justify-items-center">
        <div class="...">
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <p>Vite</p>
        </div>
        <div class="...">
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
          <p>React</p>
        </div>
        <div class="bg-blue-500 rounded-[2vw] px-6 py-3 ...">Submit</div>
      </div>
    </>
  );
}

export default App;
