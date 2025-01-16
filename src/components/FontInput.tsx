import React from 'react';
import { Search } from 'lucide-react';

interface FontInputProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  isLoading: boolean;
  error?: string;
  fontName?: string;
}

export const FontInput: React.FC<FontInputProps> = ({
  value,
  onChange,
  onSubmit,
  isLoading,
  error,
  fontName
}) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <div className="w-full max-w-xl">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Enter a Google Font name (e.g., Roboto)"
          className="px-4 py-3 pr-12 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          disabled={isLoading}
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 p-2 text-gray-500 -translate-y-1/2 hover:text-blue-600 disabled:opacity-50"
          disabled={isLoading}
        >
          <Search size={20} />
        </button>
      </form>
      {error && fontName && (
        <div className="mt-2 text-sm text-red-500">
          Font "{fontName}" not found
        </div>
      )}
    </div>
  );
};