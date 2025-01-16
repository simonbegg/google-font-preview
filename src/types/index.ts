export interface Font {
  family: string;
  loading: boolean;
  error?: string;
}

export interface ColorScheme {
  name: string;
  background: string;
  text: string;
  accent: string;
}

export interface FontPairing {
  heading: string;
  body: string;
  description: string;
}