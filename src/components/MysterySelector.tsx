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
          <option value="Homilias Dominicais">Homilias Dominicais</option>
          <option value="Terço da Misericórdia">Terço da Misericórdia</option>
          <option value="Ângelus">Ângelus</option>
          <option value="Consagração a Nossa Senhora">Consagração à Nossa Senhora</option>
          <option value="Alma de Cristo">Alma de Cristo</option>
          <option value="Comunhão Espiritual">Comunhão Espiritual</option>
          <option value="Quando Confessar">Quando Confessar</option>
          <option value="Os 10 Mandamentos">Os 10 Mandamentos</option>
        </>
      )}
    </select>
  );
};