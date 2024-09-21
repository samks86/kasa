import { useState } from "react";
import "./Collapse.scss";

function Collapse(props) {
  const [isContentVisible, setIsContentVisible] = useState(false);
  
  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  const chevronClass = `fas ${isContentVisible ? "fa-chevron-up rotate" : "fa-chevron-down"}`;

  return (
    <div className="description-panel">
      <p className="description-header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>

      <div className={`description-content ${isContentVisible ? "visible" : "hidden"}`}>
        {props.content}
      </div>
    </div>
  );
}

export default Collapse;
