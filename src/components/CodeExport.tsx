import React from 'react';
import { Code } from 'lucide-react';

interface CodeExportProps {
  css: string;
}

export const CodeExport: React.FC<CodeExportProps> = ({ css }) => {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(css);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Code size={20} />
          <h3 className="text-lg font-semibold">Export CSS</h3>
        </div>
        <button
          onClick={copyToClipboard}
          className="px-4 py-2 text-sm rounded-md bg-blue-600 text-white hover:bg-blue-700"
        >
          Copy to Clipboard
        </button>
      </div>
      <pre className="p-4 bg-gray-900 text-gray-100 rounded-lg overflow-x-auto">
        <code>{css}</code>
      </pre>
    </div>
  );
};