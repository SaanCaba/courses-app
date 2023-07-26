import React from "react";
import { techsIcons } from "./images";
import "./index.css";

function TechsLogos() {
  return (
    <div className="h-full w-full flex items-center ">
      <div className="flex  w-full justify-around gap-64">
        {techsIcons.map((icon) => {
          return (
            <div className="tech-logo-container">
              <img className="tech-logo" src={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TechsLogos;
