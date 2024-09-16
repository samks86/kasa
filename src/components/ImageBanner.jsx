import React, { useState } from 'react';
import "./ImageBanner.scss";

function ImageBanner(props) {
  const pictures = props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
  return"";
};

const movetonext = () => {
  setCurrentPicture((currentPicture + 1) % pictures.length);
};

const movetoprev = () => {
  const newCurrentPicture = currentPicture - 1;
  if (newCurrentPicture < 0) {
  setCurrentPicture(pictures.length - 1);
return;}
setCurrentPicture(currentPicture - 1 );
};

const arePicturesAvailable = () => {
  return pictures && pictures.length > 0;
};

const getCarouselOrDefaultImage = () => {
 

  return pictures.map((pic, i) => (
    <img key={pic} src={pic} alt="" className={getClassName(i)}></img>
  ));
};


  return (
    <div className='Image-banner'>
      <div className='image-container'>{getCarouselOrDefaultImage()}</div>
      {arePicturesAvailable() && pictures.length > 1 && (
      <>
    <button className='btn btn-next' onClick={movetonext}>
      <i className="fas fa-chevron-right"></i>
      </button>
      <span className='slide-conter'>  {currentPicture + 1}/{pictures.length}</span>
    <button className="btn btn-prev"onClick={movetoprev}>
    <i className="fas fa-chevron-left"></i>
      </button>
    </>
      )}
    </div>
  );
}

export default ImageBanner