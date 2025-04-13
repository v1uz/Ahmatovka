import { useState } from 'react';
import { Calendar } from 'lucide-react';

const BookingForm = () => {
  // Date states
  const [checkIn, setCheckIn] = useState('11.04.2025');
  const [checkOut, setCheckOut] = useState('12.04.2025');
  const [guests, setGuests] = useState('2 взрослых, 0 детей');
  const [showCalendar, setShowCalendar] = useState(false);
  const [hasPromocode, setHasPromocode] = useState(false);
  const [promocode, setPromocode] = useState('');
  
  // Add these functions to use the state setters
  const handleCheckInChange = (date) => {
    setCheckIn(date);
    setShowCalendar(false);
  };
  
  const handleCheckOutChange = (date) => {
    setCheckOut(date);
    setShowCalendar(false);
  };
  
  const handleGuestsChange = (newGuests) => {
    setGuests(newGuests);
  };
  
  const toggleCalendar = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Забронировать номер</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <div className="relative">
            <input
              type="text"
              value={checkIn}
              className="w-full border border-gray-300 rounded py-3 px-4 pr-10 bg-white"
              readOnly
              onClick={toggleCalendar}
            />
            <div className="absolute top-0 right-0 px-3 py-3">
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <input
              type="text"
              value={checkOut}
              className="w-full border border-gray-300 rounded py-3 px-4 pr-10 bg-white"
              readOnly
              onClick={toggleCalendar}
            />
            <div className="absolute top-0 right-0 px-3 py-3">
              <Calendar className="h-5 w-5 text-gray-500" />
            </div>
          </div>
        </div>
        
        <div>
          <div className="relative">
            <select
              className="w-full border border-gray-300 rounded py-3 px-4 pr-10 bg-white appearance-none"
              value={guests}
              onChange={(e) => handleGuestsChange(e.target.value)}
            >
              <option value="1 взрослый, 0 детей">1 взрослый, 0 детей</option>
              <option value="2 взрослых, 0 детей">2 взрослых, 0 детей</option>
              <option value="2 взрослых, 1 ребенок">2 взрослых, 1 ребенок</option>
              <option value="2 взрослых, 2 детей">2 взрослых, 2 детей</option>
            </select>
            <div className="absolute top-0 right-0 px-3 py-3 flex items-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 10C12.2091 10 14 8.20914 14 6C14 3.79086 12.2091 2 10 2C7.79086 2 6 3.79086 6 6C6 8.20914 7.79086 10 10 10Z" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.9999 18C17.9999 14.6863 14.4182 12 9.99986 12C5.58156 12 1.99986 14.6863 1.99986 18" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      {/* Calendar component (simplified) */}
      {showCalendar && (
        <div className="mt-4 p-4 border border-gray-200 rounded-lg bg-white shadow">
          <div className="flex justify-between mb-4">
            <button 
              className="text-sm text-gray-500"
              onClick={() => handleCheckInChange('11.04.2025')}
            >
              11.04.2025
            </button>
            <button 
              className="text-sm text-gray-500"
              onClick={() => handleCheckOutChange('12.04.2025')}
            >
              12.04.2025
            </button>
            <button 
              className="text-sm text-gray-500"
              onClick={() => setShowCalendar(false)}
            >
              Закрыть
            </button>
          </div>
          <p className="text-xs text-gray-400 text-center">Это упрощенный календарь. В реальном проекте здесь будет полноценный календарь для выбора дат.</p>
        </div>
      )}
      
      <div className="mt-4 flex items-center">
        <input
          type="checkbox"
          id="has-promocode"
          checked={hasPromocode}
          onChange={(e) => setHasPromocode(e.target.checked)}
          className="mr-2"
        />
        <label htmlFor="has-promocode" className="text-sm">
          У меня есть промокод или карта лояльности
        </label>
      </div>
      
      {hasPromocode && (
        <div className="mt-4">
          <input
            type="text"
            value={promocode}
            onChange={(e) => setPromocode(e.target.value)}
            placeholder="Промокод"
            className="w-full sm:w-auto border border-gray-300 rounded py-3 px-4 bg-white"
          />
        </div>
      )}
      
      <div className="mt-6">
        <button className="w-full bg-[#a08b7b] hover:bg-[#8a7667] text-white py-3 px-6 rounded font-medium transition duration-200">
          Забронировать
        </button>
      </div>
    </div>
  );
};

export default BookingForm;