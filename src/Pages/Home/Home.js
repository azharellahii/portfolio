import React from "react";
import Exp from "../../Components/Exp/Exp";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";
import Intro from "../../Components/Intro/Intro";
import Footer from "../../Components/Footer/Footer";
const Home = () => {
    return (
        <>
            <Intro />
            <Exp />
            <Projects />
            <Contact />
            <Footer />
        </>
    )
}

export default Home;