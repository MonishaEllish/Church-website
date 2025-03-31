'use client';

import Image from 'next/image';

export default function OfferingGiving() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="relative w-full h-64 md:h-96 flex items-center justify-center text-center text-white bg-gray-800 overflow-hidden">
        <Image
          src="/donation.jpg" // Replace with actual image path
          alt="Offering & Giving"
          layout="fill" // Ensures responsiveness
          objectFit="cover" // Makes sure the image covers the whole area
          objectPosition="center" // Centers the image properly
          priority
        />
      </div>

      {/* Support Section */}
      <div className="py-16 px-6 md:px-16 text-center">
        <h2 className="text-3xl  text-blue-950 underline font-semibold">Support our mission</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto">
          Thank you for giving to support the mission of Grace Life Church. Please choose from the available giving
          options below. Do{' '}
          <a href="/contact-us" className="text-blue-600 underline">
            contact us
          </a>{' '}
          for further options and assistance.
        </p>

        {/* Giving Options */}
        <div className="mt-10 max-w-4xl mx-auto">
          <div className="border border-gray-300 rounded-lg p-6 shadow-md text-left bg-white">
            <h3 className="text-xl font-semibold">Tithes & Offerings</h3>
            <div className="mt-3 space-y-2">
              <p>
                <span className="font-bold">Account Name:</span> Khurram Bhatti
              </p>
              <p>
                <span className="font-bold">Bank:</span> Habib Bank Limited
              </p>
              <p>
                <span className="font-bold">Account No:</span> 50017000108303
              </p>
              <p>
                <span className="font-bold">IBAN:</span> PK27HABB0050017000108303
              </p>
              <p>
                <span className="font-bold">Branch:</span> IBB-DHA PHASE IV BR
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
