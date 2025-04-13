import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Контакты</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h2 className="text-xl font-bold mb-4">Информационный центр</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-start">
              <MapPin className="h-5 w-5 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>Россия, Московская область, городской округ Клин, сельское поселение Нудольское, вблизи п. Нарынка, вл. "Изумрудный лес".</span>
            </li>
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <a href="tel:+74951084034" className="hover:text-gray-900">
                +7 (495) 108-40-34
              </a>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-xl font-bold mb-4">Отдел бронирования</h2>
          <ul className="space-y-4 text-gray-600">
            <li className="flex items-center">
              <Phone className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <a href="tel:+74954020201" className="hover:text-gray-900">
                +7 495 402 02 01
              </a>
            </li>
            <li className="flex items-center">
              <Mail className="h-5 w-5 text-gray-500 mr-2 flex-shrink-0" />
              <a href="mailto:reservations.izl@cosmoscollection.ru" className="hover:text-gray-900">
                reservations.izl@cosmoscollection.ru
              </a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mb-12">
        <h2 className="text-xl font-bold mb-4">Как добраться</h2>
        <div className="bg-gray-100 p-4 rounded">
          <p className="text-gray-600 mb-2">Карта будет добавлена позже</p>
        </div>
      </div>
      
      <Link to="/" className="text-primary-DEFAULT hover:text-primary-dark">
        Вернуться на главную
      </Link>
    </div>
  );
};

export default ContactsPage;