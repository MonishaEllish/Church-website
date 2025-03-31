import { FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className="relative bg-gray-100">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/your-image.jpg')" }} // Place this image inside /public folder
      ></div>

      {/* Heading */}
      <div className="relative z-10 text-center py-20">
        <h2 className="text-4xl md:text-5xl font-bold text-black">We&apos;d love to hear from you</h2>
      </div>

      {/* Contact Information */}
      <div className="relative z-10 bg-white py-12 px-8 md:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 text-center md:text-left">
        {/* Contact Us */}
        <div>
          <h3 className="text-2xl underline text-blue-950 font-semibold mb-6">Contact Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700">
            <FaPhoneAlt className="text-blue-600 text-2xl" /> +923462225436
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 mt-4">
            <FaEnvelope className="text-red-600 text-2xl" />  khurramhiggith@gmail.com 
          </p>
        </div>

        {/* Connect With Us */}
        <div>
          <h3 className="text-2xl  underline  text-blue-950 font-semibold mb-6">Connect With Us</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700">
            <FaInstagram className="text-pink-500 text-2xl" />
            <a href="https://www.instagram.com/khurram_haggith?igsh=MWE3emk3bjYxYjlhag==" className="text-blue-600 hover:underline text-xl">Instagram</a>
          </p>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700 mt-4">
            <FaFacebook className="text-blue-700 text-2xl" />
            <a href="https://www.facebook.com/khurram.higgith?mibextid=ZbWKwL" className="text-blue-600 hover:underline text-xl">Facebook</a>
          </p>
        </div>

        {/* Address */}
        <div>
          <h3 className="text-2xl underline  text-blue-950 font-semibold mb-6">Our Address</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700">
            <FaMapMarkerAlt className="text-green-600 text-2xl" /> 
            Plot #777, Street #04, Sector E, Akhtar Colony, Karachi
          </p>
          <br></br>
          <h3 className="text-2xl underline  text-blue-950 font-semibold mb-6">Our office timings</h3>
          <p className="flex items-center justify-center md:justify-start gap-3 text-lg text-gray-700">
            9:00am to 4:00pm
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

