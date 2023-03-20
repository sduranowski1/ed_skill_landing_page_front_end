import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";
import LottieAnimation from "./LottieAnmiation";


const Home = () => {
  return (
    <div className="home-container" id="home">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
            India's Favorite Learning Place
          </h1>
          <p className="primary-text">
            Unlock Your Potential with India'a Best Teachers and 
            Mentors for Your Personalized Learning Journeys
          </p>
          <button className="secondary-button">
            Order Now <FiArrowRight />{" "}
          </button>
        </div>
        <div className="home-image-section">
          <LottieAnimation />
        </div>
      </div>
    </div>
  );
};

export default Home;
