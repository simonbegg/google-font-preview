import React from 'react';
import { FontPairing } from '../types';
import { Sparkles } from 'lucide-react';

interface FontPairingSuggestionsProps {
  pairings: FontPairing[];
  onSelect: (pairing: FontPairing) => void;
}

export const FontPairingSuggestions: React.FC<FontPairingSuggestionsProps> = ({
  pairings,
  onSelect,
}) => {
  return (
    <div className="mt-8">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles size={20} />
        <h3 className="text-lg font-semibold">Suggested Font Pairings</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {pairings.map((pairing) => (
          <button
            key={`${pairing.heading}-${pairing.body}`}
            onClick={() => onSelect(pairing)}
            className="p-4 rounded-lg border border-gray-200 hover:border-blue-500 hover:shadow-md transition-all text-left"
          >
            <h4 className="font-semibold mb-1">{pairing.heading}</h4>
            <p className="text-sm text-gray-600 mb-2">with {pairing.body}</p>
            <p className="text-xs text-gray-500">{pairing.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};