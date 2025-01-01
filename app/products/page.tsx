'use client';
import React from 'react';
import useSWR from 'swr';
import ProductCard from '@/components/ProductCard/ProductCard';
import { Product } from '@/models/interfaces';

export default function Products() {
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const { data: products, error, isLoading } = useSWR<Product[], Error>('/api/products', fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!products) return <div>No data available</div>;

    return (
        <div className="products-list">
            {products.map((product) => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    title={product.title}
                    price={product.price}
                    description={product.description}
                    category={product.category}
                    image={product.image}
                    rating={product.rating}
                />
            ))}
        </div>
    );
}