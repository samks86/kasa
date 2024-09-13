import React, {useState} from 'react';
import "./ImageBanner.scss";

function ImageBanner(props) {
  const pictures= props.pictures;

  const [currentPicture, setCurrentPicture] = useState(0);
  
  const getClassName = (i) => {
    if (i === currentPicture) return "show";
  return"";
};
  return (
    <div className='Image-banner'>
       {/*<img src={props.imageUrl } alt=""/>*/}
       {pictures.map((pic, i) =>( 
        <img key={pic}
       src={pic} alt="" className={getClassName(i)}/>
       ))}
    </div>
  );
}

export default ImageBanner