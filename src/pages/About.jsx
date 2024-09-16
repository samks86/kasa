import React, { useEffect, useState } from 'react';
import Collapse from "../components/Collapse";
import "./About.scss";
import Banner from '../layout/Banner';
import image2 from '../assets/image-source-2.png';

function About() {
  // Initialisation de l'état pour stocker les données JSON
  const [aboutData, setAboutData] = useState([]);

  // Récupération des données du fichier about.json
  useEffect(() => {
    fetch("/about.json")
      .then(response => response.json())
      .then(data => setAboutData(data))
      .catch(error => console.error("Erreur lors de la récupération des données :", error));
  }, []);

  return (
    <>
      {/* Bannière sans titre */}
      <Banner imageUrl={image2} showTitle={false} />

      {/* Affichage des données récupérées */}
      <div className='about-container'>
        {aboutData.length > 0 ? (
          aboutData.map((item, index) => (
            <Collapse key={index} title={item.title} content={item.content} />
          ))
        ) : (
          <p>...laoding</p>
        )}
      </div>
    </>
  );
}

export default About;