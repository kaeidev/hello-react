import { Routes, Route } from "react-router";

import { Tabs } from "./components/Tabs";
import { Home } from "./pages/Home";
import { Todo } from "./pages/Todo";

function App() {
  return (
    <>
      <Tabs />
      <Routes>
        <Route index element={<Home />} />
        <Route path="todo" element={<Todo />} />

        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
