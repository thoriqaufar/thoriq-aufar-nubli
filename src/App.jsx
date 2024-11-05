import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Education from "./components/Education.jsx";
import Contact from "./components/Contact.jsx";

export default function App() {
    return (
        <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
            <div className="bg-image fixed inset-0 bg-cover bg-fixed bg-center"></div>
            <div className="relative z-10">
                <Navbar />
                <Hero />
                <Projects />
                <Skills />
                <Experience />
                <Education />
                <Contact />
            </div>
        </main>
    );
}
