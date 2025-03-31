"use client";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="bg-white text-gray-900">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Church Introduction */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-blue-800 underline">
            Introduction of Grace Life Church
          </h2>
          <p className="mt-4 text-lg leading-relaxed">
            Grace Life Church of Pakistan is a thriving and devoted community of
            believers, united in our commitment to living out the teachings of
            Jesus Christ. We are dedicated to fostering a nurturing environment
            for spiritual growth, where individuals can deepen their
            understanding of faith through biblical study, prayer, and
            fellowship. Our church provides a welcoming space for worship,
            celebrating the presence of God through music, testimony, and the
            sharing of the Word. We believe in empowering our members to
            actively participate in ministry, discovering and utilizing their
            unique gifts to serve both within the church and in the broader
            community. Our vision extends beyond our walls, as we strive to be a
            beacon of hope and love, reflecting the transformative power of
            faith in the lives of those we touch. We are committed to building
            strong relationships, supporting one another through life&apos;s
            challenges, and extending the hand of compassion to all who seek
            spiritual guidance and connection.
          </p>
        </div>

        {/* Pastor Introduction */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image Section */}
          <div className="w-full md:w-1/3 text-center">
            <Image
              src="/pic2.png" 
              alt="Pastor Khurram Bhatti"
              width={300}
              height={300}
              className="rounded-lg shadow-lg mx-auto"
            />
            <h6 className="mt-4 text-lg font-semibold text-blue-800">
              Pastor Khurram Bhatti & Evangelist Beena Khurram
            </h6>
          </div>

          {/* Text Section */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl font-serif text-blue-800 underline">
              The Founder And Senior Pastor
            </h2>
            <p className="mt-4 text-lg leading-relaxed">
              Pastor Khurram Bhatti, hailing from Pakistan, is the Founder and
              Senior Pastor of Grace Life Church. He and his wife, Beena
              Khurram, have been dedicated to ministry since 2010, witnessing
              significant growth. As an Evangelist and Pastor, he is driven by a
              desire to reach the lost, make disciples, and advance the Kingdom
              of God throughout Pakistan and the Middle East. He seeks to
              collaborate with individuals, churches, and organizations who
              share this vision of spreading the Gospel globally. His desire is
              to connect with individuals, churches, and organizations that
              share the vision to spread the Gospel worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
