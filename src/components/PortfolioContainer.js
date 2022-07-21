import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Project from "./pages/Project";
import Resume from "./pages/Resume";
import Form from "./pages/Form/index";
import projects from "../projects";
import proficiencies from "../proficiences";

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState("AboutMe");

  // TODO: Add a comment describing the functionality of this method
  // create a render page function that checkes for the currentPage variable --> if it is equal to a certain value then return that page
  const renderPage = () => {
    if (currentPage === "Home") {
      return <Home />;
    }
    if (currentPage === "Project") {
      return <Project projects={projects} />;
    }
    if (currentPage === "Resume") {
      return <Resume proficiencies={proficiencies} />;
    }
    if (currentPage === "Form") {
      return <Form />;
    }
    return <AboutMe />;
  };

  // function that takes in the page and sets the current page state variable to that value
  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are giving the navtabs component that value of the current page and the ability to change that value by giving it the function that corresponds */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This line is calling the renderPage function */}
      {renderPage()}
    </div>
  );
}
