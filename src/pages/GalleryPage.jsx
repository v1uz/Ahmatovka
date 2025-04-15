import React from 'react';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Фотогалерея</h1>
      <p className="text-gray-600 mb-8">
        Здесь будет размещена галерея фотографий отеля и его территории. Страница находится в разработке.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
        {/* Placeholder for gallery items */}
        {[1, 2, 3, 4, 5, 6, 7, 8].map(index => (
          <div 
            key={index} 
            className="aspect-square bg-gray-200 flex items-center justify-center"
          >
            <span className="text-gray-400">Фото {index}</span>
          </div>
        ))}
      </div>
      
      <Link to="/" className="text-primary hover:text-primary-dark">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default GalleryPage;