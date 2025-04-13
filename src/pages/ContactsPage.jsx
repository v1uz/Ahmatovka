// In ContactsPage.jsx
import React, { useEffect, useRef } from 'react';

export const ContactsPage = () => {
  const mapRef = useRef(null);
  
  useEffect(() => {
    // Create script dynamically to ensure it loads in the right order
    const script = document.createElement('script');
    script.src = "https://api-maps.yandex.ru/2.1/?apikey=55f1f93d-0af8-42f3-af5d-27a36a30ef42&lang=ru_RU";
    script.async = true;
    script.onload = initMap;
    document.head.appendChild(script);
    
    function initMap() {
      if (window.ymaps) {
        window.ymaps.ready(() => {
          // Check if component is still mounted
          if (mapRef.current) {
            new window.ymaps.Map(mapRef.current, {
              center: [53.3015, 45.9678],
              zoom: 14,
              controls: ['zoomControl', 'fullscreenControl']
            });
          }
        });
      }
    }
    
    return () => {
      // Clean up script if component unmounts before script loads
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div>
      {/* Your contact information here */}
      <div ref={mapRef} style={{ width: '100%', height: '400px', borderRadius: '0.5rem' }}></div>
    </div>
  );
};