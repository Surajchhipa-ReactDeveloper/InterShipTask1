import { React, Suspense } from "react";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Menu from "./Components/MenuPage/Menu";
import Home from "./Components/HomePage/Home";
import OverView from "./Components/OverView/OverView";
import Review from "./Components/ReView/Review";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={"Loading..."}>
          <Routes>
            <Route path="/" name="Home" element={<Home />} />
            <Route path="/menu" name="Menu" element={<Menu />} />
          </Routes>
        </Suspense>
      </Router>
      <Footer />
    </>
  );
}

export default App;
