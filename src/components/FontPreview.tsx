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
      <h1 style={headingStyle} className="mb-4 text-4xl font-bold">
        The quick brown fox jumps over the lazy dog
      </h1>
      <h2 style={headingStyle} className="mb-3 text-2xl font-semibold">
        Typography Sample
      </h2>
      <h3 style={headingStyle} className="mb-4 text-xl font-medium">
        {headingFont ? `Heading Font: ${headingFont}` : 'Select a heading font'} <br />
        {bodyFont ? `Body Font: ${bodyFont}` : 'Select a body font'}
      </h3>
      <p style={bodyStyle} className="mt-4 text-lg">
        Elit velit ex do magna labore proident cupidatat tempor. Enim excepteur consectetur voluptate sit elit magna fugiat tempor labore anim mollit ea. Ullamco est ad consequat duis elit cillum quis esse ea officia deserunt. Anim nulla esse cillum excepteur consectetur labore.
      </p>
      <p style={bodyStyle} className="mt-4">Dolore consequat do id duis anim reprehenderit tempor esse. Aute amet id exercitation sint eiusmod ea dolor tempor tempor nulla ea ut. Enim cillum sunt aliquip qui Lorem Lorem nisi.
      </p>
      <div className="grid grid-cols-1 gap-4 my-16 md:grid-cols-2 lg:grid-cols-3">
        <div className={`p-4 rounded-2xl ${colorScheme.cardBackground}`}>
          <img className="object-cover w-full rounded-xl" src="https://picsum.photos/300/200?random=1" alt="" />
          <h4 style={headingStyle} className="mt-4 text-2xl font-semibold">Stage 1.</h4>
          <p className="mt-2" style={bodyStyle}>Ullamco nulla eiusmod duis cupidatat in anim ea eiusmod consequat voluptate eu proident et.</p>
          <div className="flex gap-4 mt-4">
            <button
              style={bodyStyle}
              className={`px-4 py-2 rounded-md ${colorScheme.accent} text-white`}
            >
              Primary
            </button>
            <button
              style={bodyStyle}
              className="px-4 py-2 rounded-md border border-current"
            >
              Secondary
            </button>
          </div>
        </div>
        <div className={`p-4 rounded-2xl ${colorScheme.cardBackground}`}>
          <img className="object-cover w-full rounded-xl" src="https://picsum.photos/300/200?random=2" alt="" />
          <h4 style={headingStyle} className="mt-4 text-2xl font-semibold">Stage 1.</h4>
          <p className="mt-2" style={bodyStyle}>Velit aliquip ad laboris nulla. Sunt dolore eiusmod incididunt ex nisi irure ullamco aute.</p>
          <div className="flex gap-4 mt-4">
            <button
              style={bodyStyle}
              className={`px-4 py-2 rounded-md ${colorScheme.accent} text-white`}
            >
              Primary
            </button>
            <button
              style={bodyStyle}
              className="px-4 py-2 rounded-md border border-current"
            >
              Secondary
            </button>
          </div>
        </div>
        <div className={`p-4 rounded-2xl ${colorScheme.cardBackground}`}>
          <img className="object-cover w-full rounded-xl" src="https://picsum.photos/300/200?random=3" alt="" />
          <h4 style={headingStyle} className="mt-4 text-2xl font-semibold">Stage 1.</h4>
          <p className="mt-2" style={bodyStyle}>Sunt dolore eiusmod incididunt ex nisi irure ullamco aute. Dolore id pariatur nostrud voluptate sit.</p>
          <div className="flex gap-4 mt-4">
            <button
              style={bodyStyle}
              className={`px-4 py-2 rounded-md ${colorScheme.accent} text-white`}
            >
              Primary
            </button>
            <button
              style={bodyStyle}
              className="px-4 py-2 rounded-md border border-current"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
      <div className="flex gap-4 mt-4">
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
      <nav style={bodyStyle} className="flex gap-4 mt-4 text-sm">
        <a href="#" className="hover:underline">Home</a>
        <a href="#" className="hover:underline">About</a>
        <a href="#" className="hover:underline">Services</a>
        <a href="#" className="hover:underline">Contact</a>
      </nav>
    </div>
  );
};