import React, { useState } from "react";
import profilePic from "/Users/natalie/Desktop/school_work/homework/react-bulgern-portfolio/src/images/BulgerN_VTech Photo.jpg";

const styles = {
  profilePhoto: {
    maxWidth: "300vw",
    padding: "5px",
    height: "300px",
  },

  aboutMe: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },

  aboutMeAside: {
    flex: 1,
  },

  aboutMeSection: {
    flex: 3,
    color: "white",
    padding: "20px",
    fontSize: "16px",
    overflow: "scroll",
  },
};

export default function AboutMe() {
  return (
    <div className="container">
      <article className="about-me" style={styles.aboutMe}>
        <aside style={styles.aboutMeAside}>
          <img
            src={profilePic}
            alt="Profile Photo of Natalie standing in front of Harborview Medical Center in Seattle Washington wearing a blank turtleneck and pink/black flowered skirt"
            style={styles.profilePhoto}
          ></img>
        </aside>
        <section style={styles.aboutMeSection}>
          <p>
            I grew up the daughter of a physician, thus I was exposed to the
            world of medicine and the possibility of medical school as a career
            avenue. I pursued a Bachelor's in Chemistry, worked as a research
            assistant during the summer, and obtained my EMT certification.
            After graduating college, I began working full time as a research
            assistant for Seattle Medic One, where I taught myself STATA to help
            manipulate challenging datasets for medical research. That was the
            first time I questioned why I hadn't taken a computer science class
            in college.
          </p>
          <p>
            Over the next couple years I always had this nagging feeling that I
            should look into educational opportunities for software engineering,
            but I chose to neglect that feeling and continued on my path of
            pursuing medicine. Eventually, I went on to matriculate with a
            Masters in Sports Science and currently apply that knowledge in my
            Head Coach position at Orangetheory Fitness.
          </p>
          <p>
            Recently, I've started to question if the medical field is my true
            passion, as I often reflect on my role with Seattle Medic One where
            I found true joy tackling daily coding challenges. Therefore, at the
            end of 2021, I decided to enroll in a full stack coding bootcamp
            through the University of Washington to explore more aspects of
            software engineering. Through this bootcamp, I not only had a blast
            tackling challenging coding problems, but also excelled in the
            program and started to see a potential career opportunity. I love
            the way this bootcamp challenges my brain. It's reminiscent of my
            days on the math team in high school, statistics class in college,
            or working on multiple research project datasets through STATA in my
            former job. At this stage of my program, I feel confident I want to
            pursue a career in this field, and am now looking for the next step.
          </p>
        </section>
      </article>
    </div>
  );
}
