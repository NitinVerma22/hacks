import { useEffect } from 'react';

const AdScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = '//pl25637944.profitablecpmrate.com/dd/38/7a/dd387ac57f6f4690247948304eb25a6d.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No visible UI, just injecting the script
};

export default AdScript;
