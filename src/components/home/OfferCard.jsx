import React from 'react';
import { Link } from 'react-router-dom';

const OfferCard = ({ title, image, link }) => {
  return (
    <Link to={link} className="block group">
      <div className="relative h-80 rounded-lg overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-6">
          <h3 className="text-xl font-bold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default OfferCard;