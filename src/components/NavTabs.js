import React from "react";

const styles = {
  headerH1: {
    display: "flex",
    justifyContent: "center",
    color: "black",
  },
  navbar: {
    backgroundColor: "var(--beigeblue)",
  },
  navLink: {
    color: "black",
  },
};

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <div style={styles.navbar}>
      <h1 style={styles.headerH1}>Bulger</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <a
            href="#home"
            onClick={() => handlePageChange("Home")}
            className={currentPage === "Home" ? "nav-link active" : "nav-link"}
            style={styles.navLink}
          >
            Home
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#aboutme"
            onClick={() => handlePageChange("AboutMe")}
            className={
              currentPage === "AboutMe" ? "nav-link active" : "nav-link"
            }
            style={styles.navLink}
          >
            About Me
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#projects"
            onClick={() => handlePageChange("Project")}
            className={
              currentPage === "Project" ? "nav-link active" : "nav-link"
            }
            style={styles.navLink}
          >
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#form"
            onClick={() => handlePageChange("Form")}
            className={currentPage === "Form" ? "nav-link active" : "nav-link"}
            style={styles.navLink}
          >
            Contact Me
          </a>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
