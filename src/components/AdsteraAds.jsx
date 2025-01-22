import { useEffect } from "react";

const AdsterraAd = () => {
  useEffect(() => {
    // Create the script element
    const script = document.createElement("script");
    script.async = true;
    script.setAttribute("data-cfasync", "false");
    script.src = "//pl25637724.profitablecpmrate.com/97614b6515575f415fce0392756b10a0/invoke.js";

    // Append the script to the ad container
    const adContainer = document.getElementById("adsterra-container");
    if (adContainer) {
      adContainer.appendChild(script);
    }

    // Cleanup function to remove the script when component unmounts
    return () => {
      if (adContainer) {
        adContainer.innerHTML = "";
      }
    };
  }, []);

  return <div id="adsterra-container"></div>;
};

export default AdsterraAd;
