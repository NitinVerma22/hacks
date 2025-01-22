import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ImagePage from "../components/ImagePage";
import CardImage from "../images/Card.png"
import AdsterraAd from "../components/AdsteraAds";
import PopulenserAd from "../components/PopulenserAd";
import AdScript from "../components/AdScript";
const HomePage = () => {
  return (
    <div>
      <Header />
      <AdsterraAd></AdsterraAd>
      <Card
        imageSrc={CardImage}
        title="Join Our Telegram Channel"
        subtitle="All Loss Recover Guarantee"
        buttonText="Join Now"
        buttonLink="https://t.me/colorpredictionbyhackmods"
      />
     
    
      
      <ImagePage />
      <PopulenserAd></PopulenserAd>
   
      <Footer />
    </div>
  );
};

export default HomePage;
