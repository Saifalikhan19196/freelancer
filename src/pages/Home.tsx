import { useTheme } from '../hooks/useTheme'
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Skills from "../components/Skills"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Blog from "../components/Blog"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"
import Footer from "../components/Footer"

const Home = () => {
    const { darkMode, setDarkMode } = useTheme()

    return (
        <div className={darkMode ? 'dark' : ''}>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Hero />
            <About />
            <Skills />
            <Services />
            <Projects />
            <Blog />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    )

}

export default Home