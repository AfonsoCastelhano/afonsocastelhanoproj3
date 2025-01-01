import React from 'react';
import { Municipality } from '@/models/interfaces';

export default function MunicipalityCard({ id, district_name, name }: Municipality) {
    return <div>{name} ({district_name})</div>;
}