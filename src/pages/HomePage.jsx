import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import ImagePage from "../components/ImagePage";
import CardImage from "../images/Card.png"
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
      <ImagePage />
      <Footer />
    </div>
  );
};

export default HomePage;
