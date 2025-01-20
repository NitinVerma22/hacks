import React from "react";

const Card = ({ imageSrc, title, subtitle, buttonText, buttonLink }) => {
  return (
    <div className="flex flex-col items-center p-6 shadow-lg bg-gray-900 text-white rounded-lg w-4/5 mx-auto mt-6">
      <img src={imageSrc} alt={title} className="w-full rounded-lg mb-4" />
      <h2 className="text-2xl font-bold text-center">{title}</h2>
      <p className="text-lg text-center mt-2">{subtitle}</p>
      <a
        href={buttonLink}
        className="mt-4 bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-all"
      >
        {buttonText}
      </a>
    </div>
  );
};

export default Card;
