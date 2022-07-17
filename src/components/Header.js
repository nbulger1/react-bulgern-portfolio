import React, { useState } from "react";

const styles = {
  header: {
    display: "flex",
    justifyContent: "center",
  },
  headerH1: {
    color: "white",
  },
};

export default function Header() {
  return (
    <div className="container">
      <header className="header" style={styles.header}>
        <h1 style={styles.headerH1}>Bulger</h1>
      </header>
    </div>
  );
}
