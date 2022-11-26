import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Layout from "./components/Layout";
import UserPage from "./components/UserPage";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} path="/"></Route>
        <Route path="/user/:id" element={<UserPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
