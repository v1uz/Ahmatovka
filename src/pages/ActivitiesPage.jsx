import React from 'react';
import { Link } from 'react-router-dom';

const ActivitiesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Мероприятия</h1>
      <p className="text-gray-600 mb-8">
        На этой странице будет представлена информация о мероприятиях отеля. Страница находится в разработке.
      </p>
      <Link to="/" className="text-primary hover:text-primary-dark">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ActivitiesPage;