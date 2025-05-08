import React from "react";
import "./Filters.css"; 

function Filters() {
  return (
    <section id="filters">
      <h3>Filters</h3>

      <div className="filter-icons">
        <i className="fas fa-money-bill-wave"></i>
        <a href="#" className="low_cost">
          Low Cost
        </a>
      </div>
      <div className="filter-icons">
        <i className="fas fa-heart"></i>
        <a href="#" className="romantic">
          Romantic
        </a>
      </div>
      <div className="filter-icons">
        <i className="fas fa-child"></i>
        <a href="#" className="family">
          Family-friendly
        </a>
      </div>
      <div className="filter-icons">
        <i className="fas fa-dog"></i>
        <a href="#" className="pets">
          Pets allowed
        </a>
      </div>

      <div className="info">
        <span className="info-icon">i</span>
        <p>
          More than 500 accommodations are available in this city
        </p>
      </div>
    </section>
  );
};

export default Filters;
