import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import BoxesGrid from "../components/BoxesGrid";
import homeImage from "../images/Card.png";
import AdScript from "../components/AdScript";
const ColorPage = () => {
  const colorItems = [
    { text: "Tringa Game Hack", link: "https://m.indiamart.com/proddetail/24213035862.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=12 " },
    { text: "55 Club Hack", link: " https://m.indiamart.com/proddetail/2853712996888.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=14" },
    { text: "Lucknow Games Hack 3", link: "https://m.indiamart.com/proddetail/19760239812.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=15" },
    { text: "Winzo Game Hack", link: "https://m.indiamart.com/proddetail/23580769662.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=16" },
    { text: " Daman Game Hack", link: "- https://m.indiamart.com/impcat/dms-boot.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=13 " },
    { text: "BDG Game Hack ", link: "- https://m.indiamart.com/proddetail/2855079196573.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=18" },
  ];

  return (
    <div>
      <Header />
      <Card
        imageSrc={homeImage}
        title="Join Our Telegram Channel"
        subtitle="All Loss Recover Guarantee"
        buttonText="Join Now"
        buttonLink="https://t.me/colorpredictionbyhackmods"
      />
      <BoxesGrid items={colorItems} />
  <AdScript></AdScript>
      <Footer />
    </div>
  );
};

export default ColorPage;
