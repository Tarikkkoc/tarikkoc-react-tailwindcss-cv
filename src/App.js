import AboutMe from "./About/AboutMe";
import "./App.css";
import ContactMe from "./Contact/ContactMe";
import Footer from "./Footer/Footer";
import HireMe from "./HireMe.js/HireMe";
import Info from "./Info/Info";
import Navbar from "./Navbar/Navbar";
import Portfolio from "./Portfolio/Portfolio";

function App() {
  return (
    <div className="App bg-stone-300">
      <Navbar />
      <Info />
      <AboutMe />
      <Portfolio />
      <HireMe />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;
