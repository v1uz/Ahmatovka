import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const RoomCard = ({ title, image, link, price }) => {
  const { t } = useLanguage();
  
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm">
      <Link to={link} className="block">
        <div className="relative h-64 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-medium">{title}</h3>
        <div className="mt-4">
          <Link 
            to={link} 
            className="block w-full py-3 bg-[#a08b7b] hover:bg-[#8a7667] text-white text-center rounded font-medium transition duration-200"
          >
            {t.homepage.rooms.book}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;