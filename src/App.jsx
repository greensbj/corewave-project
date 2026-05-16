import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Services from "./components/Services.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Stats from "./components/Stats.jsx";
import Testimonials from "./components/Testimonials.jsx";
import TrialBanner from "./components/TrialBanner.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="page-wrap overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Stats />
      <Testimonials />
      <TrialBanner />
      <Footer />
    </div>
  );
}
