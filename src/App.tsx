import Navbar from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="overflow-x-clip">
      <Navbar />
      <section id="home" className="scroll-mt-24">
        <HeroSection />
      </section>
      <section id="studio" className="scroll-mt-24">
        <HeroSection2 />
      </section>
      <section id="services" className="scroll-mt-24">
        <Service />
      </section>
      <section id="faqs" className="scroll-mt-24">
        <Testimonials />
      </section>
      <section id="contact" className="scroll-mt-24">
        <Footer />
      </section>
    </div>
  );
};

export default App;
