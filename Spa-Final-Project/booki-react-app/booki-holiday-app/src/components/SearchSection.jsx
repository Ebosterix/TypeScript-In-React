import React from "react";
import "./SearchSection.css";

function SearchSection() {
  return (
  
<section className="item-search">
<h1>Find a place for your dream vacation</h1>
<p>Downtown or in nature</p>

<div className="search-box">
  <i className="fas fa-map-marker-alt"></i>
  <input
    type="text"
    className="search-field"
    placeholder="Marseille, France"/>
  <button type="submit" className="search-button">
  <i className="fas fa-search display-icon"></i>
    <span className="search-title">Search</span>
  </button>
</div>
</section>


  );
}

export default SearchSection;
