import React, { useState } from "react";
import profilePic from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/BulgerN_VTech Photo.jpg";
import banderaPano from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/bandera_pano.jpeg";

export default function AboutMe() {
  return (
    <div className="container">
      <img
        src={banderaPano}
        alt="Panorama of Bandera Mountain Hike in Washington State with a women sitting in the center wearing all black and looking out at the view. There is a lake on the right and a valley on the left"
        className="bandera"
      ></img>
      <article className="about-me" id="about-me">
        <aside>
          <h1>About Me</h1>
          <img
            src={profilePic}
            alt="Profile Photo of Natalie standing in front of Harborview Medical Center in Seattle Washington wearing a blank turtleneck and pink/black flowered skirt"
            className="profile-photo"
          ></img>
        </aside>
        <section>
          <p>
            Hello! My name is Natalie Bulger. I currently live in Kirkland, WA.
            I am the Head Fitness Coach at Orangetheory Fitness in Mercer
            Island, WA. I graduated from Carleton College with my Bachelor's of
            Arts in Chemistry in June 2019. Prior to working at Orangetheory
            Fitness, I worked as a Research Assistant and Research Coordinator
            for the Seattle Medic One (SMO) research office for 2.5 years. While
            continuing my work remotely for SMO, I moved to Long Island, NY to
            complete my Masters in Sports Science at Hofstra University. Since
            graduating with my Masters of Science in June of 2021, I moved back
            to Washington State and have been exploring the world of fitness.
          </p>
          <p>
            Through my work with SMO, I was exposed to STATA, a statistical and
            database management software. I spent 2.5 years familiarizing myself
            with, teaching myself, and ultimately utilizing STATA on a daily
            basis. That daily activity sparked my interest in coding, thus when
            time alloted in my career and school life, I applied to and enrolled
            in the University of Washington Coding Bootcamp. I hope to learn the
            skills necessary to explore job opportunities in the world of full
            stack development.
          </p>
        </section>
      </article>
    </div>
  );
}
