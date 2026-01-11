'use client';

import { useState } from 'react';

export default function FlierGenerator({ flierData }) {
  const [loading, setLoading] = useState(false);
const handleGenerate = async () => {
    setLoading(true);

    try {
      const response = await fetch('/api/screenshot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(flierData),
      });

      if (!response.ok) throw new Error('Failed to generate image');

      // 1. Receive the binary data
      const blob = await response.blob();
      
      // 2. Create a temporary URL
      const url = window.URL.createObjectURL(blob);
      
      // 3. Trigger Download
      const link = document.createElement('a');
      link.href = url;
      
      // This uses the filename from the server, or a fallback
      link.download = `flier-${new Date().getTime()}.png`;
      
      document.body.appendChild(link);
      link.click();
      
      // 4. Cleanup
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url); // Free up memory
      
    } catch (error) {
      console.error(error);
      alert("Error generating flier. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleGenerate}
      disabled={loading}
      className={`px-8 py-4 rounded-full font-bold text-white transition-all ${
        loading 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg'
      }`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
             <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
             <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Generating Flier...
        </span>
      ) : (
        '📸 Download Flier'
      )}
    </button>
  );
}