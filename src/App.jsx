import { useState } from "react";
import "./App.css"
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <Home />
      <Main />
      <Footer />
    </>
  );
}

export default App;
