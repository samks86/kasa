import React, { useEffect, useState} from 'react';
import ImageBanner from "../components/ImageBanner";
import  DescriptionPanel from "../components/DescriptionPanel";
import "./About.scss";
import Banner from '../layout/Banner';
import image2 from '../assets/image-source-2.png';


function About() {
  return (
    <>
    <Banner imageUrl={image2}showTitle={false}/>
    <div className='about-container'>
    <DescriptionPanel title="Fiabilité" content="roi du code"/>
    <DescriptionPanel title= "Respect" content="roi du code"/>
    <DescriptionPanel title = "Service" content="roi du code"/>
    <DescriptionPanel title= "Responsabilité" content="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."/>
    </div>
    </>
  )
}

export default About