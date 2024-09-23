import React from 'react';
import "../layout/Banner.scss";

function Banner({ imageUrl, showTitle = true }) {
  return (
    <div className="banner">
      <img src={imageUrl} alt="Banner" className="banner-image" />
      {showTitle && <h2 className="title">Chez vous,<br className="line-break"/> partout et ailleurs</h2>}
    </div>
  );
}

export default Banner;