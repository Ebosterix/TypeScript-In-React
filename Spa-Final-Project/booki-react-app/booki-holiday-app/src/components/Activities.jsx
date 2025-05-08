import React from "react";
import "../assets/css/style.css";

function Activities(){
  return (
    <section id="activity">
      <h2>Activities in Marseille</h2>
      <a href="#" className="act-wrap-1">
        <div>
          <div className="image-1"></div>
          <span>Old Port</span>
        </div>
      </a>
      <a href="#" className="act-wrap-2">
        <div>
          <div className="image-2"></div>
          <span>Pommesgues Fort</span>
        </div>
      </a>
      <a href="#" className="act-wrap-3">
        <div>
          <div className="image-3"></div>
          <span>Frioul Island</span>
        </div>
      </a>
      <a href="#" className="act-wrap-4">
        <div>
          <div className="image-4"></div>
          <span>Calanques National Park</span>
        </div>
      </a>
      <a href="#" className="act-wrap-5">
        <div>
          <div className="image-5"></div>
          <span>Notre-Dame-de-la-Garde</span>
        </div>
      </a>
      <a href="#" className="act-wrap-6">
        <div>
          <div className="image-6"></div>
          <span>Longchamp Park</span>
        </div>
      </a>
    </section>
  );
};

export default Activities;
