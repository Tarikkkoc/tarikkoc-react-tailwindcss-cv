import AboutMe from "./About/AboutMe";
import "./App.css";
import ContactMe from "./Contact/ContactMe";
import HireMe from "./HireMe.js/HireMe";
import Info from "./Info/Info";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App bg-rose-200">
      <Navbar />
      <Info />
      <AboutMe />
      <Portfolio />
      <HireMe />
      <ContactMe />
    </div>
  );
}

export default App;
