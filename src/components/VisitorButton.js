// src/components/VisitorButton.js
import React from "react";
import { FaEye } from "react-icons/fa"; 

function VisitorButton({ count }) {
  return (
    <button
      className="fixed bottom-4 left-4 flex items-center gap-2 bg-green-700 text-white text-sm font-semibold py-2 px-4 rounded-full shadow-lg hover:bg-green-800 transition-all duration-300"
      style={{ zIndex: 1000 }}
    >
      <FaEye className="text-white text-lg" /> 
      Dilihat: {count} kali
    </button>
  );
}

export default VisitorButton;
