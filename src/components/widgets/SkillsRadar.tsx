import React from 'react';
import { Badge } from '../ui/Badge';

interface SkillsRadarProps {
  skills: string[];
}

export const SkillsRadar: React.FC<SkillsRadarProps> = ({ skills }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {skills.map((skill, index) => (
        <Badge key={index} variant={index % 3 === 0 ? 'purple' : index % 3 === 1 ? 'cyan' : 'metallic'}>
          {skill}
        </Badge>
      ))}
    </div>
  );
};
