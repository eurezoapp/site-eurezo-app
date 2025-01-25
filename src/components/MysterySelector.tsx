import React from 'react';
import { MysteryGroup } from '../types/mysteries';

interface MysterySelectorProps {
  mysteryGroups: MysteryGroup[];
  selectedMystery: string;
  onSelect: (value: string) => void;
  showAdditionalPrayers?: boolean;
}

export const MysterySelector: React.FC<MysterySelectorProps> = ({
  mysteryGroups,
  selectedMystery,
  onSelect,
  showAdditionalPrayers = false,
}) => {
  const additionalPrayers = [
    'Terço da Misericórdia',
    'Ângelus',
    'Consagração a Nossa Senhora',
    'Consagração a N. S. Aparecida',
    'Quando Confessar',
    'Os 10 Mandamentos',
    'Alma de Cristo',
    'Comunhão Espiritual',
    'Homilias Dominicais',
    'Oração antes das refeições',
    'Salve Rainha',
    'Vinde Espírito Santo',
    'Oferecimento Diário',
    'Legião de Maria',
    'Ofício da Imaculada',
    'Bênção de São Bento'
  ];

  return (
    <select
      className="w-full px-4 py-2 border rounded-md bg-[#eac948] text-[#503d2e] font-medium"
      onChange={(e) => onSelect(e.target.value)}
      value={selectedMystery}
    >
      <option value="none">Selecione uma oração</option>
      {mysteryGroups.map(group => (
        <option key={group.name} value={group.name}>
          {group.name} ({group.days.join(' e ')})
        </option>
      ))}
      {showAdditionalPrayers && (
        <>
          {additionalPrayers.map(prayer => (
            <option key={prayer} value={prayer}>
              {prayer}
            </option>
          ))}
        </>
      )}
    </select>
  );
};
