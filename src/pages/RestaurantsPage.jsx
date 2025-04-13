import React from 'react';
import { Link } from 'react-router-dom';

const RestaurantsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Рестораны</h1>
      <p className="text-gray-600 mb-8">
        Информация о ресторанах будет добавлена в ближайшее время.
      </p>
      <Link to="/" className="text-primary-DEFAULT hover:text-primary-dark">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default RestaurantsPage;