import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Moon, Globe, Menu, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-wide uppercase">COSMOS</div>
              <div className="text-sm tracking-wider uppercase">COLLECTION</div>
              <div className="text-xs tracking-wider uppercase">IZUMRUDNY LES HOTEL</div>
            </div>
          </Link>
          
          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/choose-hotel" className="flex items-center text-gray-700 hover:text-gray-900">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{language === 'ru' ? 'Выбрать отели' : 'Select Hotel'}</span>
            </Link>
            <Link to="/certificates" className="flex items-center text-gray-700 hover:text-gray-900">
              <span>{language === 'ru' ? 'Сертификаты' : 'Certificates'}</span>
            </Link>
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4 mr-1" />
              <span>{language === 'ru' ? 'Связаться' : 'Contact Us'}</span>
            </Link>
            <Link to="/booking" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              {language === 'ru' ? 'Найти номер' : 'Find Room'}
            </Link>
            <button 
              onClick={toggleDarkMode} 
              className="text-gray-700 hover:text-gray-900"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Moon className="h-5 w-5" />
            </button>
            <div className="relative">
              <button 
                className="text-gray-700 hover:text-gray-900 flex items-center"
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                aria-label="Change language"
              >
                <Globe className="h-5 w-5" />
              </button>
              
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'ru' ? 'font-semibold' : ''}`}
                    onClick={() => {
                      if (language !== 'ru') toggleLanguage();
                      setIsLanguageMenuOpen(false);
                    }}
                  >
                    Русский
                  </button>
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'en' ? 'font-semibold' : ''}`}
                    onClick={() => {
                      if (language !== 'en') toggleLanguage();
                      setIsLanguageMenuOpen(false);
                    }}
                  >
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Main Navigation */}
        <nav className="hidden md:block border-t border-gray-100 py-4">
          <ul className="flex space-x-8">
            {[
              { name: t.nav.accommodation, path: '/accommodation' },
              { name: t.nav.recreation, path: '/recreation' },
              { name: t.nav.offers, path: '/offers' },
              { name: t.nav.restaurants, path: '/restaurants' },
              { name: t.nav.events, path: '/events' },
              { name: t.nav.activities, path: '/activities' },
              { name: t.nav.contacts, path: '/contacts' },
              { name: t.nav.gallery, path: '/gallery' }
            ].map((item) => (
              <li key={item.name}>
                <Link 
                  to={item.path} 
                  className="text-gray-700 hover:text-gray-900 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <ul className="space-y-4">
              {[
                { name: t.nav.accommodation, path: '/accommodation' },
                { name: t.nav.recreation, path: '/recreation' },
                { name: t.nav.offers, path: '/offers' },
                { name: t.nav.restaurants, path: '/restaurants' },
                { name: t.nav.events, path: '/events' },
                { name: t.nav.activities, path: '/activities' },
                { name: t.nav.contacts, path: '/contacts' },
                { name: t.nav.gallery, path: '/gallery' }
              ].map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.path} 
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              
              <li className="border-t border-gray-100 pt-4 mt-4">
                <Link 
                  to="/certificates" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.certificates}
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link 
                  to="/booking" 
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t.nav.findRoom}
                </Link>
              </li>
              <li>
                <div className="px-4 py-2 flex gap-4">
                  <button 
                    className="text-gray-700" 
                    onClick={toggleLanguage}
                    aria-label="Change language"
                  >
                    <Globe className="h-5 w-5" />
                  </button>
                  <button 
                    className="text-gray-700"
                    onClick={toggleDarkMode}
                    aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
                  >
                    <Moon className="h-5 w-5" />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;