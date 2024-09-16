import { useState } from "react";
import "./Collapse.scss"

function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

    return (
          <div className="description-panel">
          <p className='description-header' onClick={showContent}>
            <span>{props.title} </span>
            <i className={chevronClass}></i>
            </p>


          {isContentVisible &&< p className='description-content'>{props.content}</p>}
      </div>
    );
  }

  export default Collapse