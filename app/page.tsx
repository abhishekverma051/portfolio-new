import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import About from "./components/About";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <ContactUs />
      <Footer />
    </main>
  );
}
