import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Logo } from "./components/Logo";
import { Body } from "./components/Body";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Logo src={viteLogo} url="https://vite.dev" alt="Vite logo" />
        <Logo
          src={reactLogo}
          url="https://react.dev"
          alt="React logo"
          isReact
        />
        123345
      </div>
      <Body
        count={count}
        onButtonClick={() => setCount((count) => count + 1)}
      />
    </>
  );
}

export default App;
