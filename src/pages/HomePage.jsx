import React from 'react'
import "./HomePage.scss"
import Banner from '../layout/Banner.jsx';
import ApartmentGrid from '../components/ApartmentGrid.jsx';
import Cards from "../layout/Cards.jsx";
import image1 from '../assets/image-source-1.png'

function HomePage() {
  return (
  <div>
      <>
      <Banner imageUrl={image1} showTitle={true}/>
      <ApartmentGrid/>
     </>
  </div>
  );
}

export default HomePage