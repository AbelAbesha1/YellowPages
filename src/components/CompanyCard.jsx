// src/components/BusinessCard.js
import React from "react";

const CompanyCard = ({ business }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <h2 className="text-xl font-bold mb-2">{business.name}</h2>
      <p>{business.description}</p>
      <p className="text-gray-700">{business.address}</p>
      <p className="text-gray-700">{business.phone}</p>
      <a
        href={company.website}
        className="text-blue-500"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </div>
  );
};

export default CompanyCard;
