'use client';
import React from 'react';
import useSWR from 'swr';
import Card from '@/components/MunicipalityCard/MunicipalityCard';
import { Municipality, Product } from '@/models/interfaces';

export default function Municipalities() {
    const fetcher = (url: string) => fetch(url).then(res => res.json());
    const { data: municipalities, error, isLoading } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);

    if (error) return <div>Failed to load</div>;
    if (isLoading) return <div>Loading...</div>;
    if (!municipalities) return <div>No data available</div>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {municipalities.map((municipality) => (
                <Card
                    key={municipality.id}
                    id={municipality.id}
                    district_name={municipality.district_name}
                    name={municipality.name}
                />
            ))}
        </div>
    );
}