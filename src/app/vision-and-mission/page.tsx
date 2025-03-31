export default function VisionMission() {
  return (
    <div className="relative min-h-screen">
      {/* Background Image - Replace with your own */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-50"
        style={{
          backgroundImage: "url('/mission-vission.png')",
        }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl font-bold text-blue-900 underline">Vision & Mission</h1>

        {/* Vision Section */}
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-serif text-blue-800"> Vision</h2>
          <p className="text-gray-700 mt-4">
            Our vision is to create a welcoming and transformative
            space where everyone can experience the life-changing love of Jesus Christ.
            We believe in fostering a diverse and inclusive community that embraces people
            from all walks of life, guiding them toward a deeper connection with God.
            Rooted in Scripture, we strive to provide practical teachings and authentic
            worship that inspire individuals to grow in their faith. Our ultimate goal is
            to cultivate a family of believers who wholeheartedly <strong>Love God and Love People</strong>,
            empowering them to live out their faith with purpose and passion.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-10 p-6 bg-white shadow-lg rounded-lg">
          <h2 className="text-2xl font-serif text-blue-800"> Mission</h2>
          <p className="text-gray-700 mt-4">
            Our mission is to disciple and equip individuals to serve both God and people,
            impacting lives through faith, love, and service. At Grace Life Church, worship
            is more than just a gathering—it is a meaningful encounter where Christ remains
            at the center, and relationships are built to last. Through uplifting teachings,
            heartfelt praise, and ministries designed to support every stage of life, we aim
            to nurture spiritual growth and empower believers to walk in victory. Whether
            through acts of kindness, outreach programs, or simply being a source of encouragement,
            we are committed to spreading the message of hope and transformation, ensuring that
            everyone who walks through our doors feels valued, supported, and strengthened in
            their journey with Christ.
          </p>
        </div>
      </div>
    </div>
  );
}
