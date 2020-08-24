import React from 'react';
import './App.css';
import Footer from "./components/Footer/index";
import NavBar from "./components/NavBar/index";
import AboutMe from "./components/AboutMe/index";
import Display from "./components/Display/index";
import Contact from "./pages/Contact"
import Home from './pages/Home';



function App() {
    return (
        <div>
            <NavBar />
            <div className="container tm-container">
                <div className="tm-page-content"> 
                    <Home />
                    <Display />
                    <AboutMe />
                    <Contact />
                    <Footer />

                </div>
            </div>
        </div>






    );
}

export default App;


