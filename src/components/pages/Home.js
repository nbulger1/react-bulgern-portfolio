import React, { useState } from "react";
import banderaPano from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/bandera_pano.jpeg";

const styles = {
  bandera: {
    width: "100%",
    padding: "5px",
    borderRadius: "10px",
  },
  fullApp: {
    backgroundColor: "--var(darkgreen)",
  },
  header: {
    color: "white",
    textAlign: "center",
    margin: "10px",
  },
  photoFooter: {
    fontSize: "12px",
    fontStyle: "italic",
  },
};

export default function Home() {
  return (
    <div className="container" style={styles.fullApp}>
      <h2 style={styles.header}>
        Welcome To My Full-Stack Web Development Portfolio!
      </h2>
      <img
        src={banderaPano}
        alt="Panorama of Bandera Mountain Hike in Washington State with a women sitting in the center wearing all black and looking out at the view. There is a lake on the right and a valley on the left"
        className="bandera"
        style={styles.bandera}
      ></img>
      <p style={styles.photoFooter}>Bandera Mountain 2019</p>
    </div>
  );
}
