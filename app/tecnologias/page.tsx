'use client';
import React from 'react';
import TecnologiasCard from '@/components/TecnologiasCard/TecnologiasCard'; // Importação do novo componente
import tecnologias from '@/app/data/tecnologias.json';

const TecnologiasPage = () => {
  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Tecnologias Aprendidas</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tecnologias.map((tecnologia, index) => (
          <TecnologiasCard
            key={index}
            title={tecnologia.title}
            image={tecnologia.image}
            description={tecnologia.description}
            rating={tecnologia.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default TecnologiasPage;