import React from 'react';
import { Search } from 'lucide-react';

interface FontInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
}

export const FontInput: React.FC<FontInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-xl">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter a Google Font name (e.g., Roboto)"
        className="w-full px-4 py-3 pr-12 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        disabled={isLoading}
      />
      <button
        type="submit"
        className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-gray-500 hover:text-blue-600 disabled:opacity-50"
        disabled={isLoading}
      >
        <Search size={20} />
      </button>
    </form>
  );
};