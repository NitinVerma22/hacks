import React from "react";
import Header from "../components/Header";
import Card from "../components/Card";
import Footer from "../components/Footer";
import BoxesGrid from "../components/BoxesGrid";
import homeImage from "../images/aviator.jpeg"
import PopulenserAd from "../components/PopulenserAd";
const OtherPage = () => {
  const colorItems = [
    { text: "Aviator Hack", link: " https://m.indiamart.com/proddetail/2853320615248.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=19" },
    { text: "1x Bet Hack", link: " https://m.indiamart.com/proddetail/25670611491.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=20" },
    { text: "Black Jack Hack", link: " https://m.indiamart.com/impcat/display-hooks.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=17 " },
    { text: "Andar Bahar Hack ", link: " https://m.indiamart.com/proddetail/19530647712.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=24" },
    { text: "Roulet Hack", link: " https://m.indiamart.com/impcat/leather-folders.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=21 " },
    { text: "Slots Game Hack", link: "https://m.indiamart.com/proddetail/2853712996888.html?utm_source=unknown_patel_85&utm_medium=affiliate&utm_campaign=0125&utm_content=14" },
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
      <PopulenserAd></PopulenserAd>
      <Footer />
    </div>
  );
};

export default OtherPage;
