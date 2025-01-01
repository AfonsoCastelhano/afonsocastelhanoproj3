import React from 'react';
import { Product } from '@/models/interfaces';

const ProductCard: React.FC<Product> = ({ id, title, price, description, category, image, rating }) => {
    return (
        <div className="product-card">
            <img src={image} alt={title} className="product-image" />
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Category: {category}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <p>Rating: {rating.rate} ({rating.count} reviews)</p>
        </div>
    );
};

export default ProductCard;