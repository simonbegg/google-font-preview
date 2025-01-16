import { ColorScheme } from '../types';

export const colorSchemes: ColorScheme[] = [
  {
    name: 'Light',
    background: 'bg-white',
    text: 'text-gray-900',
    accent: 'bg-blue-600'
  },
  {
    name: 'Dark',
    background: 'bg-gray-900',
    text: 'text-white',
    accent: 'bg-blue-400'
  },
  {
    name: 'Warm',
    background: 'bg-orange-50',
    text: 'text-gray-800',
    accent: 'bg-orange-600'
  },
  {
    name: 'Cool',
    background: 'bg-slate-100',
    text: 'text-slate-900',
    accent: 'bg-indigo-600'
  }
];