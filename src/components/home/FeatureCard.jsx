import React from 'react';

const FeatureCard = ({ icon, title, description, buttonText, buttonLink }) => {
  return (
    <div className="bg-gray-50 p-6 rounded-lg flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-4 flex items-center justify-center">
        {typeof icon === 'string' ? (
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        ) : (
          icon
        )}
      </div>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="mt-auto text-primary font-medium text-sm transition duration-200"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

export default FeatureCard;