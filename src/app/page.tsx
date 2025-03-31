"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

const slides = [
  {
    image: "/home.jpg",
    title: "Welcome To Grace Life Church",
    description: "We are so glad you are here",
  },
  {
    image: "/gospel1.jpg",
    title: "Gospel Crusades",
    description:
      "Spreading the Gospel worldwide through crusades.",
  },
  {
    image: "/home2.png",
    title: "Serving the Community",
    description:
      "We strive to make a difference by providing help and hope to those in need.",
  },
  {
    image: "/ch7.JPG",
    title: "Raising the Next Generation",
    description:
      "Empowering children and youth with faith, education, and leadership skills for a brighter future.",
  },
  {
    image: "/watertest.png",
    title: "Bringing Hope to the Needy",
    description:
      "Water Pump Installation – Providing Clean Water in the less privileged areas.",
  },

  {
    image: "/women6.png",
    title: "Women Ministry",
    description:
      "Empowering women through faith, mentorship, and community, the Women’s Ministry fosters spiritual growth and leadership rooted in God's love.",
  },
  {
    image: "/y9.jpg",
    title: "Youth Ministry",
    description:
      "Engaging and mentoring young believers.",
  },
  {
    image: "/bible1s.png",
    title: "Bible Distribution",
    description:
      "Spreading the God's word by providing Bibles to those who seek His guidance.",
  },
  {
    image: "/home3.png",
    title: "Church Leadership Conference",
    description:
      "Equipping leaders with the knowledge and faith to lead with wisdom and purpose.",
  },
];

export default function HomeSlider() {
  return (
    <div className="w-full px-4 md:px-10">
      {/* Slider Section */}
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative flex items-center justify-center">
            <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] border-4 border-white shadow-lg rounded-lg overflow-hidden">
              {/* Background Image */}
              <Image
                src={slide.image}
                alt={slide.title}
                layout="fill"
                objectFit="cover"
                className="brightness-75 rounded-lg"
              />
              
              {/* Centered Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 md:px-12">
                <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
                <p className="mt-2 text-base md:text-lg max-w-2xl">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Welcome Section */}
      <section className="mt-12 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800">Welcome to Grace Life Church</h2>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
          We are delighted to welcome you to Grace Life Church, a place where faith, love, and community come together. 
          Whether you are visiting for the first time or have been a part of our family for years, we believe that God has 
          a special purpose for your life. Join us in worship, fellowship, and service as we grow together in Christ.
        </p>
      </section>

      {/* Church Introduction */}
      <section className="mt-12 bg-gray-100 py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center">About Grace Life Church</h2>
          <p className="mt-4 text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
            Grace Life Church of Pakistan is dedicated to spreading the love and message of Jesus Christ. 
            Our mission is to serve the needy, uplift the brokenhearted, and share the Gospel across our nation and beyond. 
            Through our ministries, we provide Bibles, clean water, education, and humanitarian aid to those in need. 
            Join us as we impact lives and bring hope to the world through faith and service.
          </p>
        </div>
      </section>
    </div>
  );
}
