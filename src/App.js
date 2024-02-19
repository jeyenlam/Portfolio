import Navbar from "./components/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import ExtendedAbout from "./sections/ExtendedAbout";
import Projects from "./sections/Projects";
import WorkExperience from "./sections/WorkExperience";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <About />
      <ExtendedAbout />
      <WorkExperience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
