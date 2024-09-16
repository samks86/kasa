import React, { useEffect, useState } from 'react';
import './ApartmentPage.scss';
import Gallery from '../components/Gallery';
import ApartmentHeader from "../components/ApartmentHeader";
import Collapse from '../components/Collapse';
import {useLocation} from "react-router-dom"

function ApartmentPage() {
  const location = useLocation();
  const [flat, setFlat] = useState (null);
  useEffect(fetchApartmentData, []);
  

  function fetchApartmentData(){
    fetch ("db.json")
    .then((res)=>res.json())
    .then((flats) => {
      const flat = flats.find((flat) => flat.id === location.state.apartmentId);
      setFlat(flat);
    })
     .catch (console.error);
  }
  if (flat == null) return <div>...loading</div>;
  return (
<div className='apartment-page'>
        <Gallery pictures = {flat.pictures} />
       <ApartmentHeader flat={flat}/>
    <div className="apartment-area">
        <Collapse title="Description"content={flat.description} />
        <Collapse title="Equipement"content={flat.equipments.map((equipments, i)=>(<li key={i}> {equipments}</li>))}/> 
  
    </div>
 </div>
  );
}

export default ApartmentPage

      

    