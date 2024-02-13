import Navbar from "./components/NavBar/navbar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";
import Works from "./components/Works/works";
import Contact from "./components/Contact/contact"
import Footer from "./components/Footer/footer";
import Education from "./components/education/education";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;