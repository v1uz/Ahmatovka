import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, Moon, Menu, X } from 'lucide-react';

const Header = ({ toggleDarkMode, darkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      // Set visibility based on scroll direction and position
      setIsVisible(
        (prevScrollPos > currentScrollPos) || // Scrolling up
        (currentScrollPos < 10)              // At the top
      );

      // Update previous scroll position
      setPrevScrollPos(currentScrollPos);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Remove event listener on cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  const headerStyle = {
    position: 'sticky',
    top: 0,
    zIndex: 50,
    transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
    transition: 'transform 0.3s ease-in-out',
    backgroundColor: 'white',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  };


  return (
    <header style={headerStyle}>
      <div className="container mx-auto px-4">
        {/* Top Header */}
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex flex-col">
              <div className="text-xl font-bold tracking-wide uppercase">AHMATOVKA</div>
              <div className="text-xs tracking-wider uppercase">Лучший отель</div>
            </div>
          </Link>

          {/* Right Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/contact" className="flex items-center text-gray-700 hover:text-gray-900">
              <Phone className="h-4 w-4 mr-1" />
              <span>Связаться</span>
            </Link>
            <Link to="/booking" className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition">
              Найти номер
            </Link>
            <button
              onClick={toggleDarkMode}
              className="text-gray-700 hover:text-gray-900"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <Moon className="h-5 w-5" />
            </button>
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
              { name: 'Проживание', path: '/accommodation' },
              { name: 'Отдых', path: '/recreation' },
              { name: 'Предложения', path: '/offers' },
              { name: 'Рестораны', path: '/restaurants' },
              { name: 'События', path: '/events' },
              { name: 'Активности', path: '/activities' },
              { name: 'Контакты', path: '/contacts' },
              { name: 'Галерея', path: '/gallery' }
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
                { name: 'Проживание', path: '/accommodation' },
                { name: 'Отдых', path: '/recreation' },
                { name: 'Предложения', path: '/offers' },
                { name: 'Рестораны', path: '/restaurants' },
                { name: 'События', path: '/events' },
                { name: 'Активности', path: '/activities' },
                { name: 'Контакты', path: '/contacts' },
                { name: 'Галерея', path: '/gallery' }
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
                  Сертификаты
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Связаться
                </Link>
              </li>
              <li>
                <Link
                  to="/booking"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Найти номер
                </Link>
              </li>
              <li>
                <div className="px-4 py-2 flex gap-4">
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