import React from 'react'
import Header from "../components/Header.jsx";
import OurWorks from "../components/OurWorks.jsx";
import Results from "../components/Results.jsx";
import Serviche from "../components/Serviche.jsx";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="home">
      <Header/>
      <Results />
      <OurWorks />
      <Serviche />
      <Footer/> 
    </div>
  );
}

export default Home;