import React from "react";

const Footer = () => {
  return (
    <footer className="md:hidden bg-gray-900 text-white text-center py-4 mt-10 shadow-inner w-full">
      <div className="flex flex-col items-center">
        <h2 className="text-green-400 text-lg font-semibold">Hack Mods</h2>
        <p className="text-sm mt-1">Unlocking Possibilities</p>
      </div>
      <div className="mt-4 text-gray-400 text-xs">
        &copy; {new Date().getFullYear()} NA Developers. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
