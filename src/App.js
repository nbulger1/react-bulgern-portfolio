import "./App.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import projects from "./projects";
import Form from "./components/Form/index";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="react-portfolio-app">
      <Header />
      <Navigation />
      <AboutMe />
      <Project projects={projects} />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
