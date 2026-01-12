'use client';

import { getHtml } from '@/lib/flier';
import FlierGenerator from '@/components/fliergenerator';

export default function PreviewPage() {
  
    const eventData = {
    title: "Highlands Discovery",
    description: "$20,500",
    imgUrl: "https://dckv23kh44p25.cloudfront.net/68baaf29a70c25964e0e2fb9/68bab5bea70c25964e0e2ff2/09cd20f3-7be7-419f-9152-7fd931a28baf.webp"
  };

  const htmlContent = getHtml(eventData);

  return (
    <>
    <div className='container'
      dangerouslySetInnerHTML={{ __html: htmlContent }} 
    />    
        <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-gray-50">
          
          {/* The trigger button */}
          <FlierGenerator flierData={eventData} />
        </main>
    </>

  );
}