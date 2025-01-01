import React from 'react';
import Image from 'next/image';
import { Product } from '@/models/interfaces';

const Card: React.FC<Product> = ({ title, price, description, category, image, rating }) => {
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
            <Image
                src={image}
                alt={title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                <p className="text-sm text-gray-500">{description}</p>
                <p className="text-sm text-blue-500 mt-2">Category: {category}</p>
                <p className="text-lg font-bold text-gray-800 mt-4">Price: ${price.toFixed(2)}</p>
                <p className="text-sm text-yellow-500 mt-2">Rating: {rating.rate} ({rating.count} reviews)</p>
            </div>
        </div>
    );
};

export default Card;