import React from "react";
import page1image from '../images/page1image.png';
import page2image from '../images/page2image.png';
import page3image from '../images/page3image.png';
const ImagePage = () => {
  const images = [
    { src: page1image, link: "/rummy", alt: "Page 1" },
    { src: page2image, link: "/color", alt: "Page 2" },
    { src: page3image, link: "/other", alt: "Page 3" },
  ];

  return (
    <div className="md:hidden flex flex-col items-center gap-6 mt-10  w-full">
      {images.map((img, index) => (
        <a
          key={index}
          href={img.link}
          className="w-4/5 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={img.src}
            alt={img.alt}
            className="w-full h-auto rounded-lg"
          />
        </a>
      ))}
    </div>
  );
};

export default ImagePage;
