import { useEffect } from "react";

const AdsterraAds = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.type = "text/javascript";
    script1.innerHTML = `
      atOptions = {
        'key' : '0253c488aa79d92cc26144988544f277',
        'format' : 'iframe',
        'height' : 250,
        'width' : 300,
        'params' : {}
      };
    `;
    document.body.appendChild(script1);

    const script2 = document.createElement("script");
    script2.type = "text/javascript";
    script2.src = "//www.highperformanceformat.com/0253c488aa79d92cc26144988544f277/invoke.js";
    document.body.appendChild(script2);

    const script3 = document.createElement("script");
    script3.type = "text/javascript";
    script3.src = "//pl25649382.profitablecpmrate.com/d2/13/09/d213095ff9a042e2682788afdd5b5c4f.js";
    document.body.appendChild(script3);

    const script4 = document.createElement("script");
    script4.async = true;
    script4.dataset.cfasync = "false";
    script4.src = "//pl25642399.profitablecpmrate.com/d26d8b91fe96e4663e17712e47fbf63b/invoke.js";
    document.body.appendChild(script4);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
      document.body.removeChild(script3);
      document.body.removeChild(script4);
    };
  }, []);

  return <div id="ad-container"><div id="container-d26d8b91fe96e4663e17712e47fbf63b"></div></div>;
};

export default AdsterraAds;
