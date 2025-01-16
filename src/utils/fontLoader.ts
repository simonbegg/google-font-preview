/**
 * Normalizes a font family name by properly capitalizing words
 */
export const normalizeFontName = (fontFamily: string): string => {
  if (!fontFamily || typeof fontFamily !== 'string') {
    throw new Error('Font family must be a non-empty string');
  }
  
  // Split by spaces and capitalize each word
  return fontFamily
    .trim()
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

/**
 * Validates and formats a font family name for use in URLs and CSS
 */
const formatFontFamily = (fontFamily: string): string => {
  if (!fontFamily || typeof fontFamily !== 'string') {
    throw new Error('Font family must be a non-empty string');
  }
  return fontFamily.trim().replace(/\s+/g, '+');
};

/**
 * Loads a Google Font by injecting a stylesheet link
 */
export const loadGoogleFont = async (fontFamily: string): Promise<void> => {
  if (!fontFamily) {
    throw new Error('Font family is required');
  }

  try {
    const formattedFamily = formatFontFamily(fontFamily);
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${formattedFamily}:wght@400;500;600;700&display=swap`;
    link.rel = 'stylesheet';
    
    return new Promise((resolve, reject) => {
      link.onload = () => resolve();
      link.onerror = () => reject(new Error(`Failed to load font: ${fontFamily}`));
      document.head.appendChild(link);
    });
  } catch (error) {
    throw new Error(`Error loading font ${fontFamily}: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};

/**
 * Generates CSS for font families with proper error handling and formatting
 */
export const generateFontCSS = (headingFont: string, bodyFont: string): string => {
  if (!headingFont || !bodyFont) {
    throw new Error('Both heading and body fonts are required');
  }

  try {
    const formattedHeading = formatFontFamily(headingFont);
    const formattedBody = formatFontFamily(bodyFont);

    return `/* Google Fonts Import */
@import url('https://fonts.googleapis.com/css2?family=${formattedHeading}:wght@400;700&family=${formattedBody}:wght@400;500;600&display=swap');

/* Font Applications */
h1, h2, h3, h4, h5, h6 {
  font-family: '${headingFont}', sans-serif;
}

body, p, input, button {
  font-family: '${bodyFont}', sans-serif;
}`;
  } catch (error) {
    throw new Error(`Error generating CSS: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
};