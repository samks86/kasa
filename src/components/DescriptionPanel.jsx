import { useState } from "react";
import "./DescriptionPanel.scss"

function DescriptionPanel(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  }

    return (
          <div className="description-panel">
          <p className='description-header'>
            <span>{props.title} </span>
            <i className="fas fa-chevron-down"onClick={showContent}></i>
            </p>


          {isContentVisible &&< p className='description-content'>{props.content}</p>}
      </div>
    );
  }

  export default DescriptionPanel