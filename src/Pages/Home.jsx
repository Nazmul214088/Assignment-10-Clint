import React from "react";
import Slider from "../Components/Slider";
import FeaturedArtworks from "../Components/FeaturedArtworks";
import TopArtist from "../Components/TopArtist";
import Community from "../Components/Community";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <FeaturedArtworks></FeaturedArtworks>
      <TopArtist></TopArtist>
      <Community></Community>
    </div>
  );
};

export default Home;
