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
      className={`btn primary ${
        loading 
          ? 'bg-gray-400 cursor-not-allowed' 
          : 'bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-lg'
      }`}
    >
      {loading ? (
        <span className="flex items-center gap-2">
          Generating...
        </span>
      ) : (
        'Download Flier'
      )}
    </button>
  );
}