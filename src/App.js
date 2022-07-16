import "./App.css";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="react-portfolio-app">
      <Header />
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
