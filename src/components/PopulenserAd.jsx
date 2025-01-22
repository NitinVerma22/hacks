import { useEffect } from "react";

const PopulenserAd = () => {
  useEffect(() => {
    // Create script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "//pl25637657.profitablecpmrate.com/13/7a/f5/137af571d457395a92065e8342ca89cd.js";
    script.async = true;

    // Append script to document body when component mounts
    document.body.appendChild(script);

    // Cleanup function to remove the script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible content, script runs in the background
};

export default PopulenserAd;
