import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Hackathons from "./components/Hackathons";
import Skills from "./components/Skills";
import Recognition from "./components/Recognition";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A0E17] text-[#E7ECFB]">
      <Nav />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Hackathons />
      <Skills />
      <Recognition />
      <Contact />
      <Footer />
    </main>
  );
}
