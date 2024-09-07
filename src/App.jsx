import React from 'react'
import NavBar from "./components/NavBar.jsx";
import "./App.css"
import Banner from './components/Banner.jsx';
import ApartmentGrid from './components/ApartmentGrid.jsx';
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
  <div>
      <NavBar/>
    <Cards>
      <Banner/>
      <ApartmentGrid/>
    </Cards>
    <Footer/>
  </div>
  )
}

export default App