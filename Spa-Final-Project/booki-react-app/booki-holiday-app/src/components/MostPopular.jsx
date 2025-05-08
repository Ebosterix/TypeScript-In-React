import React from "react";
import "./MostPopular.css";


function MostPopular(){
  return (
    <main>
      <section id="most-popular">
        <h2 className="chart">Chart Line</h2>
        <section id="chart-wrapper">
          <div className="chart-header">
            <h2>Most Popular</h2>
            <i className="fas fa-chart-line"></i>
          </div>

          <div className="main-chart">
            <a href="#" className="chart-box">
              <div className="chart-image-1"></div>
              <div className="test">
                <h5>Morning Sun Hotel</h5>
                <br />
                <p>
                  Night starting at <b>€128</b>
                </p>

                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                </div>
              </div>
            </a>

            <a href="#" className="chart-box">
              <div className="chart-image-2"></div>
              <div className="test">
                <h5>
                  Au Coeur de l'Eau
                  <br />
                  Bed and Breakfast
                </h5>
                <p className="pop-2">
                  Night starting at <b>€71</b>
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star gray-star"></i>
                </div>
              </div>
            </a>

            <a href="#" className="chart-box">
              <div className="chart-image-3"></div>
              <div className="test">
                <h5>Tout Bleu et Blanc Hotel</h5>
                <p>
                  Night starting at <b>€68</b>
                </p>
                <div className="rating">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star gray-star"></i>
                </div>
              </div>
            </a>
          </div>
        </section>
      </section>
    </main>
  );
};

export default MostPopular;
