import React from 'react';

interface TecnologiaCardProps {
  title: string;
  image: string;
  description: string;
  rating: number;
}

const TecnologiasCard: React.FC<TecnologiaCardProps> = ({ title, image, description, rating }) => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
        <p className="text-sm text-yellow-500 mt-2">Rating: {rating} / 5</p>
      </div>
    </div>
  );
};

export default TecnologiasCard;