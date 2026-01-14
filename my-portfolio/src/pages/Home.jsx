import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Credentials from "../components/Credentials";
import Footer from "../components/Footer";

function Home() {
    return (
        <>
        <Navbar/>
        <main>
            <About/>
            <Skills/>
            <Projects/>
            <Credentials/>
        </main>
        <Footer/>
        </>
    );
}

export default Home;