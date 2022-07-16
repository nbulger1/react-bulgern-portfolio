import React, { useState } from "react";
import banderaPano from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/bandera_pano.jpeg";

const styles = {
  bandera: {
    width: "100%",
  },
};

export default function Home() {
  return (
    <div className="container">
      <img
        src={banderaPano}
        alt="Panorama of Bandera Mountain Hike in Washington State with a women sitting in the center wearing all black and looking out at the view. There is a lake on the right and a valley on the left"
        className="bandera"
        style={styles.bandera}
      ></img>
    </div>
  );
}
