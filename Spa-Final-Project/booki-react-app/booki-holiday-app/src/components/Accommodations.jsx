import React from "react";
import "./Accommodations.css";
import marcusLoke from "../assets/images/hebergements/4_small/marcus-loke-WQJvWU_HZFo-unsplash.jpg";
import fredKleber from "../assets/images/hebergements/4_small/fred-kleber-gTbaxaVLvsg-unsplash.jpg";
import reisetopia from "../assets/images/hebergements/4_small/reisetopia-B8WIgxA_PFU-unsplash.jpg";
import annieSpratt from "../assets/images/hebergements/4_small/annie-spratt-Eg1qcIitAuA-unsplash.jpg";
import nicateLee from "../assets/images/hebergements/4_small/nicate-lee-kT-ZyaiwBe0-unsplash.jpg";
import febrianZakaria from "../assets/images/hebergements/4_small/febrian-zakaria-M6S1WvfW68A-unsplash.jpg";

const Accommodations = () => {
  const hotels = [
    {
      name: "Auberge la Cannebière",
      price: "€25",
      image: marcusLoke,
      rating: 4,
    },
    {
      name: "Hôtel du port",
      price: "€52",
      image: fredKleber,
      rating: 5,
    },
    {
      name: "Les mouettes Hotel",
      price: "€76",
      image: reisetopia,
      rating: 4,
    },
    {
      name: "Hôtel de la mer",
      price: "€46",
      image: annieSpratt,
      rating: 3,
    },
    {
      name: "Auberge Le Panier",
      price: "€23",
      image: nicateLee,
      rating: 4,
    },
    {
      name: "Hôtel chez Amina",
      price: "€96",
      image: febrianZakaria,
      rating: 5,
    },
  ];

  return (
    <section id="accom">
      <div className="head-accom">
        <h2>Accommodation in Marseille</h2>
      </div>

      <section className="accom-middle">
        {hotels.map((hotel, index) => (
          <a href="#" className="hotel-icons" key={index}>
            <div
              className="image"
              style={{
                backgroundImage: `url(${hotel.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100px",
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
               
              }}
            ></div>
            <div className="hotels">
              <h5>{hotel.name}</h5>
              <p>
                Night starting at <b>{hotel.price}</b>
              </p>
              <div className="rating">
                {[...Array(5)].map((_, starIndex) => (
                  <i
                    key={starIndex}
                    className={`fas fa-star ${
                      starIndex < hotel.rating ? "" : "gray-star"
                    }`}
                  ></i>
                ))}
              </div>
            </div>
          </a>
        ))}

        <div className="show-more">
          <a href="#">Show More</a>
        </div>
      </section>
    </section>
  );
};

export default Accommodations;
