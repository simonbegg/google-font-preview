import React from 'react';
import { ColorScheme } from '../types';
import { Palette } from 'lucide-react';

interface ColorSchemeSelectorProps {
  schemes: ColorScheme[];
  selectedScheme: ColorScheme;
  onSelect: (scheme: ColorScheme) => void;
}

export const ColorSchemeSelector: React.FC<ColorSchemeSelectorProps> = ({
  schemes,
  selectedScheme,
  onSelect,
}) => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2">
        <Palette size={20} />
        <span>Color Scheme:</span>
      </div>
      <div className="flex gap-2">
        {schemes.map((scheme) => (
          <button
            key={scheme.name}
            onClick={() => onSelect(scheme)}
            className={`px-3 py-1 rounded-md ${
              scheme === selectedScheme
                ? 'ring-2 ring-blue-500 ring-offset-2'
                : 'hover:bg-gray-100'
            }`}
          >
            {scheme.name}
          </button>
        ))}
      </div>
    </div>
  );
};