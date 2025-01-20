import React, { useState } from 'react';
import { Code, Check, Copy } from 'lucide-react';

interface CodeExportProps {
  css: string;
}

export const CodeExport: React.FC<CodeExportProps> = ({ css }) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(css);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 items-center">
          <Code size={20} />
          <h3 className="text-lg font-semibold">Export CSS</h3>
        </div>
        <button
          onClick={copyToClipboard}
          className={`px-4 py-2 text-sm rounded-md flex items-center gap-2 duration-300 transition-all ${copied
            ? 'bg-green-600 hover:bg-green-700'
            : 'bg-amber-500 hover:bg-blue-700'
            } text-white`}
        >
          {copied ? (
            <>
              <Check size={16} />
              Copied!
            </>
          ) : (
            <>
              <Copy size={16} />
              Copy to Clipboard
            </>
          )}
        </button>
      </div>
      <pre className="overflow-x-auto p-4 text-gray-100 bg-gray-900 rounded-lg">
        <code>{css}</code>
      </pre>
    </div>
  );
};