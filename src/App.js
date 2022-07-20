import "./App.css";
import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer";

const styles = {
  fullApp: {
    backgroundColor: "#1E3125",
    minHeight: "100vh",
    position: "relative",
  },

  contentWrapper: {
    paddingBottom: "100px",
  },
  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100px",
    backgroundColor: "var(--beigeblue)",
  },
};

function App() {
  return (
    <div className="react-portfolio-app" style={styles.fullApp}>
      <div style={styles.contentWrapper}>
        <PortfolioContainer />
      </div>
      <footer style={styles.footer}>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
