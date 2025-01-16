import React from 'react';
import { ColorScheme } from '../types';

interface FontPreviewProps {
  headingFont: string;
  bodyFont: string;
  colorScheme: ColorScheme;
}

export const FontPreview: React.FC<FontPreviewProps> = ({
  headingFont,
  bodyFont,
  colorScheme
}) => {
  const headingStyle = headingFont ? { fontFamily: `'${headingFont}', sans-serif` } : {};
  const bodyStyle = bodyFont ? { fontFamily: `'${bodyFont}', sans-serif` } : {};

  return (
    <div className={`p-8 rounded-lg ${colorScheme.background} ${colorScheme.text}`}>
      <h1 style={headingStyle} className="text-4xl font-bold mb-4">
        The quick brown fox jumps over the lazy dog
      </h1>
      <h2 style={headingStyle} className="text-2xl font-semibold mb-3">
        Typography Sample
      </h2>
      <h3 style={headingStyle} className="text-xl font-medium mb-4">
        {headingFont ? `Heading Font: ${headingFont}` : 'Select a heading font'} <br />
        {bodyFont ? `Body Font: ${bodyFont}` : 'Select a body font'}
      </h3>
      <p style={bodyStyle} className="mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <div className="flex gap-4 mb-4">
        <button
          style={bodyStyle}
          className={`px-4 py-2 rounded-md ${colorScheme.accent} text-white`}
        >
          Primary Button
        </button>
        <button
          style={bodyStyle}
          className="px-4 py-2 rounded-md border border-current"
        >
          Secondary Button
        </button>
      </div>
      <nav style={bodyStyle} className="flex gap-4 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </div>
  );
};