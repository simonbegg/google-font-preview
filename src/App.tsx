import React, { useState } from 'react';
import { FontInput } from './components/FontInput';
import { FontPreview } from './components/FontPreview';
import { ColorSchemeSelector } from './components/ColorSchemeSelector';
import { FontPairingSuggestions } from './components/FontPairingSuggestions';
import { CodeExport } from './components/CodeExport';
import { colorSchemes } from './data/colorSchemes';
import { suggestedPairings } from './data/fontPairings';
import { loadGoogleFont, generateFontCSS, normalizeFontName } from './utils/fontLoader';
import { Font, ColorScheme, FontPairing } from './types';
import { Type } from 'lucide-react';

function App() {
  const [headingFont, setHeadingFont] = useState<Font>({ family: '', loading: false });
  const [bodyFont, setBodyFont] = useState<Font>({ family: '', loading: false });
  const [inputValue, setInputValue] = useState('');
  const [selectedScheme, setSelectedScheme] = useState(colorSchemes[0]);
  const [currentTarget, setCurrentTarget] = useState<'heading' | 'body'>('heading');

  const handleFontSubmit = async () => {
    if (!inputValue.trim()) return;

    const normalizedInput = normalizeFontName(inputValue);
    const targetState = currentTarget === 'heading' ? setHeadingFont : setBodyFont;
    
    targetState({ family: normalizedInput, loading: true });
    
    try {
      await loadGoogleFont(normalizedInput);
      targetState({ family: normalizedInput, loading: false });
      setInputValue('');
    } catch (error) {
      targetState({ family: normalizedInput, loading: false, error: 'Failed to load font' });
    }
  };

  const handlePairingSelect = async (pairing: FontPairing) => {
    try {
      setHeadingFont({ family: pairing.heading, loading: true });
      setBodyFont({ family: pairing.body, loading: true });
      
      await Promise.all([
        loadGoogleFont(pairing.heading),
        loadGoogleFont(pairing.body)
      ]);
      
      setHeadingFont({ family: pairing.heading, loading: false });
      setBodyFont({ family: pairing.body, loading: false });
    } catch (error) {
      console.error('Failed to load font pairing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <header className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Type size={32} className="text-blue-600" />
          <h1 className="text-3xl font-bold">Google Fonts Preview</h1>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1">
            <FontInput
              value={inputValue}
              onChange={setInputValue}
              onSubmit={handleFontSubmit}
              isLoading={headingFont.loading || bodyFont.loading}
            />
          </div>
          
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentTarget('heading')}
              className={`px-4 py-2 rounded-md ${
                currentTarget === 'heading'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300'
              }`}
            >
              Heading Font
            </button>
            <button
              onClick={() => setCurrentTarget('body')}
              className={`px-4 py-2 rounded-md ${
                currentTarget === 'body'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white border border-gray-300'
              }`}
            >
              Body Font
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto">
        <div className="mb-8">
          <ColorSchemeSelector
            schemes={colorSchemes}
            selectedScheme={selectedScheme}
            onSelect={setSelectedScheme}
          />
        </div>

        {(headingFont.family || bodyFont.family) && (
          <div className="grid gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4">Font Preview</h2>
              <FontPreview
                headingFont={headingFont.family}
                bodyFont={bodyFont.family}
                colorScheme={selectedScheme}
              />
            </div>

            {headingFont.family && bodyFont.family && (
              <CodeExport
                css={generateFontCSS(headingFont.family, bodyFont.family)}
              />
            )}
          </div>
        )}

        <FontPairingSuggestions
          pairings={suggestedPairings}
          onSelect={handlePairingSelect}
        />
      </main>
    </div>
  );
}

export default App;