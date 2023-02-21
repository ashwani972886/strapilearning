import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Navbar, Footer } from "./components";
import { Home, Login, Register } from "./pages";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
