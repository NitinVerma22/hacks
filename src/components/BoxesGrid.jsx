import React from "react";

const BoxesGrid = ({ items }) => {
  return (
    <div className="md:hidden grid grid-cols-1 gap-6 p-6 w-4/5 mx-auto">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-900 text-white text-center py-6 rounded-lg shadow-lg hover:bg-green-500 transition-all duration-300"
        >
          <h2 className="text-lg font-semibold">{item.text}</h2>
        </a>
      ))}
    </div>
  );
};

export default BoxesGrid;
