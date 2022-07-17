import "./App.css";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

const styles = {
  fullApp: {
    backgroundColor: "#1E3125",
    height: "100vh",
  },
};

function App() {
  return (
    <div className="react-portfolio-app" style={styles.fullApp}>
      <PortfolioContainer />
      <Footer />
    </div>
  );
}

export default App;
