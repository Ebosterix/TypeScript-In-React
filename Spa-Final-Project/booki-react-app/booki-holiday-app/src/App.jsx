import React from "react";
import Header from "./components/Header";
import SearchSection from "./components/SearchSection";
import Filters from "./components/Filters";
import MainSection from "./components/MainSection";
import Activities from "./components/Activities";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <SearchSection />
      <Filters />
      <MainSection />
      <Activities />
      <Footer />
    </div>
  );
}

export default App;
