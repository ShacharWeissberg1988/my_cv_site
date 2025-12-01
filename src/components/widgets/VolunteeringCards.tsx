import React from 'react';
import { Heart } from 'lucide-react';
import { Card } from '../ui/Card';
import { useI18n } from '../../i18n/i18nContext';
import funFactsData from '../../data/fun_facts.json';

export const VolunteeringCards: React.FC = () => {
  const { language } = useI18n();
  const volunteering = funFactsData.volunteering[language as 'en' | 'he'];

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-4">
        <Heart className="text-primary-purple" size={24} />
        <h3 className="text-2xl font-bold text-primary-cyan">{language === 'he' ? 'התנדבות' : 'Volunteering'}</h3>
      </div>
      {volunteering.map((item, index) => (
        <Card key={index}>
          <h4 className="text-lg font-semibold text-primary-cyan mb-2">{item.organization}</h4>
          <p className="text-sm text-metallic-silver mb-2">{item.role} • {item.year}</p>
          <p className="text-gray-300">{item.description}</p>
        </Card>
      ))}
    </div>
  );
};
