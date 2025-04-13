import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import AccommodationPage from './pages/AccommodationPage';
import RestaurantsPage from './pages/RestaurantsPage';
import OffersPage from './pages/OffersPage';
import EventsPage from './pages/EventsPage';
import ActivitiesPage from './pages/ActivitiesPage';
import ContactsPage from './pages/ContactsPage';
import GalleryPage from './pages/GalleryPage';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <LanguageProvider>
      <Router>
        <div className={`min-h-screen font-sans ${darkMode ? 'dark' : ''}`}>
          <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/accommodation" element={<AccommodationPage />} />
              <Route path="/restaurants" element={<RestaurantsPage />} />
              <Route path="/offers" element={<OffersPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/activities" element={<ActivitiesPage />} />
              <Route path="/contacts" element={<ContactsPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;