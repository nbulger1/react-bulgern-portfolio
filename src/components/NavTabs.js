import React from "react";

// TODO: Add a comment explaining how we are able to extract the key value pairs from props
// destructing the values so we can use them without having to type props.currentPage

function NavTabs({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange("Home")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // This is a ternary operater that is checling if the currentPage === "Home" then change the className to nav-link active otherwise change to nav-link

          className={currentPage === "Home" ? "nav-link active" : "nav-link"}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#aboutme"
          onClick={() => handlePageChange("AboutMe")}
          //  if the currentPage === "About" then change the className to nav-link active otherwise change to nav-link

          className={currentPage === "AboutMe" ? "nav-link active" : "nav-link"}
        >
          About Me
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#projects"
          // Onclick change the handlepagechange to blog which triggers the re-render from the Portfolio Container file
          onClick={() => handlePageChange("Project")}
          //  if the currentPage === "Blog" then change the className to nav-link active otherwise change to nav-link

          className={currentPage === "Project" ? "nav-link active" : "nav-link"}
        >
          Projects
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#form"
          //  if the currentPage === "Contact" then change the className to nav-link active otherwise change to nav-link

          onClick={() => handlePageChange("Form")}
          className={currentPage === "Form" ? "nav-link active" : "nav-link"}
        >
          Contact Me
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
