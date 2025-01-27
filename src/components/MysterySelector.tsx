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
    'Antífonas de Nossa Senhora',
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
          <option value="Consagração a Nossa Senhora">Consagração a Nossa Senhora</option>
          <option value="Consagração a N. S. Aparecida">Consagração a N. Sra. Aparecida</option>
          <option value="Alma de Cristo">Alma de Cristo</option>
          <option value="Comunhão Espiritual">Comunhão Espiritual</option>
          <option value="Salve Rainha">Salve Rainha</option>
          <option value="Vinde Espírito Santo">Vinde Espírito Santo</option>
          <option value="Oferecimento Diário">Oferecimento Diário</option>
          <option value="Legião de Maria">Legião de Maria</option>
          <option value="Ofício da Imaculada">Ofício da Imaculada</option>
          <option value="Bênção de São Bento">Bênção de São Bento</option>
          <option value="Antífonas de Nossa Senhora">Antífonas de Nossa Senhora</option>
          <option value="As 7 Dores de Maria">As 7 Dores de Maria</option>
          <option value="Ato de Contrição">Ato de Contrição</option>
          <option value="Oração a São Miguel Arcanjo">Oração a São Miguel Arcanjo</option>
        </>
      )}
    </select>
  );
};
