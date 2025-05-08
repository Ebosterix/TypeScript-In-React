import React from "react";
import Accommodations from "./Accommodations";
import MostPopular from "./MostPopular";

function MainSection() {
  return (
    <div className="main-sections-row">
      <section id="accom" className="card-section">
        <Accommodations />
      </section>
      <section id="most-popular" className="card-section">
        <MostPopular />
      </section>
    </div>
  );
}

export default MainSection;