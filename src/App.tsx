import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Logo } from "./components/Logo";
import { Body } from "./components/Body";
import { Routes, Route } from "react-router";

import { Home } from "./pages/Home";
import { About } from "./pages/About";

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
      </div>
      <Body
        count={count}
        onButtonClick={() => setCount((count) => count + 1)}
      />

      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
