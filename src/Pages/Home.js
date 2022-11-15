import React from "react";
import Hero from "../Components/Hero";
import HomeList from "../Components/HomeList";
import MetabnbSection from "../Components/MetabnbSection";

function Home() {
  return (
    <>
      <Hero />
      <h2 className="title">Inspiration for your next adventure</h2>
      <HomeList />
      <MetabnbSection />
    </>
  );
}

export default Home;
