import React from 'react';
// import './style.css';
// import Button from './Button'
import NavBar from './Navbar';
import HeroSection from './HeroSection';
import AppSection from './AppSection';
import CardSection from './CardSection';
import Footer from './FooterSection';

const App = () => {
    return(
        <div>
             <NavBar/>
             <HeroSection/>
             <AppSection/>
             <CardSection/>
             <Footer/>
        </div>
       
    )

};

export default App;