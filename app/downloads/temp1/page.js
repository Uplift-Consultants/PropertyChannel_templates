import FlierGenerator from '@/components/fliergenerator';

export default async function Page() {
  // Simulate fetching data from your external API
  const eventData = {
    title: "Fedora Tech Meetup",
    description: "Building production apps on Linux",
    logoUrl: "https://dckv23kh44p25.cloudfront.net/68baaf29a70c25964e0e2fb9/68bab5bea70c25964e0e2ff2/09cd20f3-7be7-419f-9152-7fd931a28baf.webp"
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-24 bg-gray-50">
      <h1 className="text-3xl font-bold mb-8">Flier Generator</h1>
      
      {/* The trigger button */}
      <FlierGenerator flierData={eventData} />
      
      <p className="mt-4 text-sm text-gray-500">
        Click to generate a custom PNG using Puppeteer.
      </p>
    </main>
  );
}