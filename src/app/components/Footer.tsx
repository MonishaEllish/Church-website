'use client';

import { FaFacebookF, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-10 text-center">
      <div className="container mx-auto flex flex-col items-center">
        {/* Church Name */}
        <h2 className="text-lg font-bold uppercase">Grace Life Church</h2>

        {/* Social Links */}
        <div className="flex space-x-4 my-4">
          <a href="https://www.facebook.com/khurram.higgith?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-blue-800 hover:bg-gray-300">
            <FaFacebookF size={18} />
          </a>
          <a href="https://www.instagram.com/khurram_haggith?igsh=MWE3emk3bjYxYjlhag==" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-white text-blue-800 hover:bg-gray-300">
            <FaInstagram size={18} />
          </a>
        </div>

        {/* Address */}
        <p className="text-sm">
          Plot #777, Street #04, Sector E, Akhtar Colony, Karachi
        </p>

        {/* Links */}
        <div className="mt-4 space-x-6">
          <a href="/contact-us" className="text-white hover:underline">Contact Us</a>
          
        </div>
      </div>
    </footer>
  );
}
