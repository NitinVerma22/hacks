import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ImagePage from "../components/ImagePage";
import CardImage from "../images/Card.png"
import AdsterraAd from "../components/AdsteraAds";
import PopulenserAd from "../components/PopulenserAd";
const HomePage = () => {
  return (
    <div>
      <Header />
      <Card
        imageSrc={CardImage}
        title="Join Our Telegram Channel"
        subtitle="All Loss Recover Guarantee"
        buttonText="Join Now"
        buttonLink="https://t.me/colorpredictionbyhackmods"
      />
      <script async="async" data-cfasync="false" src="//pl25637724.profitablecpmrate.com/97614b6515575f415fce0392756b10a0/invoke.js"></script>
      <div id="container-97614b6515575f415fce0392756b10a0"></div>
      <PopulenserAd></PopulenserAd>
      <AdsterraAd></AdsterraAd>
      <ImagePage />
      <AdsterraAd></AdsterraAd>
      <Footer />
    </div>
  );
};

export default HomePage;
