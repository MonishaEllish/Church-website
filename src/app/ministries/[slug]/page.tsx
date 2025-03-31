"use client";
import { notFound } from "next/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useRouter } from "next/navigation";
import Image from "next/image"; // Import Image component

const ministriesData: Record<
  string,
  { title: string; description: string; sliderDescription?: string; images: string[]; projects?: { name: string; description: string; images: string[] }[] }
> = {
    "gospel-crusades": {
        title: "Gospel Crusades",
        description: "Spreading the Gospel worldwide through crusades.",
        sliderDescription: "Gospel Crusades bring the message of hope and salvation to the masses- The Gospel Crusades Ministry is dedicated to sharing the message of faith, hope, and salvation with people from all walks of life. Through large gatherings, heartfelt worship, and the preaching of God’s Word, we strive to bring communities together to experience the transformative power of Jesus Christ Our mission is to ignite spiritual revival, lead individuals to salvation, and strengthen their faith through prayer, healing, and the presence of the Holy Spirit. These crusades serve as a beacon of light, reaching those in need, renewing hearts, and bringing people closer to God. As we continue this journey of spreading the Gospel, we invite you to be a part of this movement of faith and renewal, fulfilling the Great Commission to preach the Good News to all nations..",
        images: ["/gospel1.jpg","/gospel2.JPG","/gospel3.JPG","/gospel4.jpg","/gospel5.jpg","/gospel6.jpg","/gospel7.jpg","/gospel8.jpg","/gospel9.jpg","/gospel 10.jpg"],
    },
    "church-leadership": {
        title: "Church Leadership Conferences",
        description: "Empowering leaders with biblical knowledge.",
        sliderDescription: "Church Leadership Conferences – Equipping Leaders for Effective Ministry The Church Leadership Conferences are dedicated to equipping and empowering pastors, ministers, and church leaders with the wisdom and skills needed to guide their congregations effectively. These conferences provide a platform for spiritual growth, leadership training, and practical insights into ministry development. Through inspiring sermons, interactive workshops, and discussions led by experienced leaders, participants gain a deeper understanding of biblical leadership, pastoral care, and church management. The goal is to strengthen the body of Christ by raising up strong, committed, and visionary leaders who can serve their communities with wisdom and compassion. By fostering unity, encouraging spiritual renewal, and providing essential leadership tools, these conferences help church leaders navigate challenges and fulfill their calling with confidence and faith.",
        images: ["/con1.jpg","/con2.jpg","/con3.jpg","/con4.jpg","/con5.jpg","/con6.jpg","/con7.jpg","/con8.jpg","/con9.jpg","/con10.jpg","/con11.JPG","/con13.JPG","/con14.JPG","/con15.JPG",],
  },
  "youth-ministry": {
        title: "Youth Ministry",
        description: "Engaging and mentoring young believers.",
        sliderDescription: "Youth Ministry – Inspiring the Next Generation for Christ The Youth Ministry is dedicated to nurturing, guiding, and empowering young people to grow in their faith and live purpose-driven lives. Through engaging Bible studies, worship gatherings, mentorship programs, and community outreach, we provide a supportive environment where youth can deepen their relationship with Christ and develop strong moral values.Our mission is to equip young believers with spiritual wisdom, leadership skills, and a heart for service, helping them navigate life’s challenges with faith and confidence. By fostering a sense of belonging and purpose, we aim to raise a generation of passionate disciples who will impact their communities and share God’s love with the world. Through fellowship, discipleship, and meaningful connections, the Youth Ministry encourages young people to embrace their faith, grow in their gifts, and step boldly into the calling that God has placed on their lives.",
        images: ["/y1.JPG","/y2.JPG","/y3.JPG","/y4.JPG","/y5.JPG","/y6.jpg","/y7.jpg","/y8.jpg","/y9.jpg","/y10.jpg","/y11.jpg","/y12.JPG","/y13.JPG","/y14.JPG","/y15.JPG","/y16.jpg","/y17.JPG","/y18.JPG","/y19.JPG","/y20.jpeg","/y21.JPG","/y22.jpeg","/y23.jpeg","/y24.JPG"],
    },
    "children-ministry": {
        title: "Children Ministry",
        description: "Providing a biblical foundation for children.",
        sliderDescription: "Children’s Ministry – Nurturing Young Hearts in Faith The Children’s Ministry is committed to providing a strong spiritual foundation for young hearts, helping them grow in the love and knowledge of Jesus Christ. Through engaging Bible stories, interactive activities, worship, and prayer, we create a joyful and nurturing environment where children can develop a personal relationship with God. Our goal is to teach biblical values in a way that is easy to understand and apply, shaping their faith from an early age. We encourage children to explore their faith, ask questions, and build a strong moral character that will guide them throughout their lives.With a focus on love, kindness, and spiritual growth, the Children’s Ministry seeks to raise a generation that knows God’s Word, walks in His truth, and shares His love with others.",
        images: ["/ch7.JPG","/ch2.JPG","/ch3.JPG","/ch4.JPG","/ch6.JPG","/ch7.JPG","/ch8.JPG","/ch9.JPG",],
    },
    "Bible-distribution":{
        title: "Bible Distribution",
        description:"We provide both printed and audio Bibles to individuals, families, and communities, ensuring that everyone, regardless of literacy or accessibility, can experience the Word of God.",
        sliderDescription: "Bible Distribution – Spreading God’s Word to All The Bible Distribution Project is committed to sharing the Word of God with those who do not have access to it. By providing Bibles to individuals, families, and communities, we aim to inspire faith, bring hope, and strengthen spiritual growth. This initiative helps people deepen their understanding of God’s truth and experience His love in their daily lives.",
        images: [ "/bible1s.png","/bible3.png","/audio6.png","/b5.jpg","/bc6.png","/bc7.png","/b8.jpg","/bc9.png","/audio5.png"],
    },

   "outreach-ministry":{
        title: "Outreach Ministry",
        description:"Spreading the Gospel in less privileged areas, our Outreach Ministry brings hope, love, and salvation to every corner through evangelism and service.",
        sliderDescription: "Our Outreach Ministry is devoted to fulfilling the Great Commission by preaching the Gospel in less privileged areas, bringing the message of hope, salvation, and eternal life to every corner of the world. Through fervent evangelism, compassionate humanitarian efforts, and unwavering community support, we strive to be the hands and feet of Christ, reaching the lost and the broken with His boundless love and divine truth. Rooted in faith and guided by the Holy Spirit, our mission is to shine the light of Christ in every heart, transform lives through His grace, and build a strong, Spirit-filled community for His glory.",
        images: ["/outreach1.png","/outreach4.png","/outreach3.png","/outreach1.png","/outreach7.png","/outreach6.png","/outreach5.png","/outreach8.png","/outreach9.png","/outreach10.png","/outreach11.png","/outreach12.png",],
    },


    "Women-ministry":{
        title: "Women Ministry",
        description: "Empowering women through faith, mentorship, and community, the Women’s Ministry fosters spiritual growth and leadership rooted in God's love",
        sliderDescription:"Our Women’s Ministry is dedicated to empowering and uplifting women through faith, fellowship, and service. We provide a nurturing space where women can grow spiritually, develop strong leadership skills, and build meaningful relationships rooted in Christ’s love. Through prayer gatherings, mentorship programs, and community outreach, we strive to inspire and support one another in our journey of faith and purpose.",
        images: [ "/women1.png","/women2.png","/women4.png","/women5.png","/women6.png","/women8.png","/women9.png","/women10.png",],
    },


    "persecution": {
        title: "Persecution",
        description: "Standing Strong in Faith: Supporting the Persecuted Churches and families",
        images: [],
        projects: [
            {
                name: "Enduring Faith: Stories of the Persecuted Church",
                description: "Faith shines brightest in the face of adversity. This section showcases the unwavering spirit of persecuted believers who continue to worship, pray, and stand firm despite facing immense challenges. Their resilience is a testament to the power of faith, hope, and God’s grace.",
                images: ["/persecution1.png","/persecution2.png","/persecution3.png","/persecution4.png","/persecution5.png","/persecution6.png","/persecution7.png","/persecution8.png","/persecution9.png","/persecution10.png","/persecution11.png","/persecution12.png",],
            },
         
            {
                name: "Extending Hope: Providing Food and Support to the Affected",
                description: "Persecution not only threatens lives but also leaves many struggling for basic necessities. In this section, we highlight our efforts to provide food, relief, and essential aid to affected families. Through these initiatives, we strive to bring comfort, sustenance, and a message of hope to those in desperate need.",
                images: ["/help1.png","/help2.png","/help3.png","/help4.png","/help5.png","/help6.png","/help7.png","/help8.png",],
            },
        ],
    },



    "humanitarian": {
        title: "Humanitarian Work",
        description: "Helping communities through charitable work.",
        images: [],
        projects: [
            {
                name: "Water Pump Installation",
                description: "Water Pump Installation – Providing Clean Water, Bringing Hope The Water Pump Installation Project is dedicated to bringing clean and safe drinking water to communities in need. By installing reliable water pumps, we aim to improve health, prevent waterborne diseases, and enhance the quality of life for families. This initiative reflects God’s love through service, ensuring that no one is deprived of this basic necessity.",
                images: ["/wp1.jpg","/wp2.jpg","/wp3.jpg","/wp4.jpg","/wp10.PNG","/wp6.jpg","/wp8.jpg","/wp9.jpg","/w11.png","/w12.png"],
            },
         
            {
                name: "Blanket Distribution",
                description: "Blanket Distribution – Spreading Warmth and Compassion The Blanket Distribution Project is dedicated to helping those in need by providing warmth and comfort during harsh weather conditions. By distributing blankets to vulnerable individuals and families, we extend God’s love through acts of kindness and care. This initiative serves as a reminder that even the smallest gestures can bring hope and relief to those facing difficult times.",
                images: ["/blanket1.jpg","/blanket2.jpg","/blanket3.jpg","/blanket4.jpg","/blanket5.jpg","/blanket6.jpg","/blanket7.jpg","/blanket8.jpg","/blanket9.jpg",],
            },


            {
                name: "Feeding & Care for Street and Orphaned Children",
                description: "This ministry is dedicated to feeding and nurturing street and orphaned children, embodying the love and kindness of Christ. We believe that no child should go hungry or feel abandoned, and through this initiative, we provide warm meals, essential supplies, and a sense of belonging to those in need.Our mission extends beyond just offering food—we aim to restore hope, build trust, and show these children that they are cherished and valued. Through regular meal distributions, special outreach programs, and moments of fellowship, we strive to create a safe and loving environment where they can experience care, encouragement, and the transformative power of faith.",
                images: ["/foodstreet1.png","/foodstreet2.png","/foodstreet3.png","/foodstreet4.png","/foodstreet5.png","/foodstreet6.png","/foodstreet7.png","/foodstreet8.png","/foodstreet9.png","/foodstreet10.png","/foodstreet11.png","/foodstreet12.png",],
            },

            {
                name: "food Stuff Distribution",
                description: "This initiative is committed to providing essential food supplies to individuals and families struggling with hunger. We believe that no one should go without a meal, and through our food distribution efforts, we aim to support those in need with love and compassion.By distributing staple food items to low-income families, widows, elderly individuals, and those facing hardships, we seek to bring relief and nourishment to communities. Our goal is not only to fill empty plates but also to uplift hearts, reminding people that they are seen, valued, and cared for.",
                images: ["/stuff1.png","/stuff2.png","/stuff3.png","/stuff4.png","/stuff5.png","/stuff6.png","/stuff7.png","/stuff8.png","/stuff9.png","/stuff10.png","/stuff11.png","/stuff12.png",],
            },
        ],
    }
}

export default function MinistryPage({ params }: { params: { slug: string } }) {
  const ministry = ministriesData[params.slug];
  const router = useRouter();
  if (!ministry) return notFound();

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => router.back()}
        className="bg-blue-950 text-white mb-4 px-4 py-2 rounded-md"
      >
        ← Go Back
      </button>

      <h1 className="text-4xl font-bold text-blue-950 bg-white border-yellow-600 border-2 rounded-md w-fit px-6 py-3 mx-auto text-center">
        {ministry.title}
      </h1>
      <p className="text-gray-600 font-bold font-serif mt-2 text-center">{ministry.description}</p>

      {/* Normal Ministries Slider */}
      {ministry.images.length > 0 && (
        <div className="flex justify-center mt-6">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            loop={true}
            className="my-6 w-full max-w-3xl rounded-xl shadow-xl"
          >
            {ministry.images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  width={500} // Adjust width as per requirement
                  height={320} // Adjust height as per requirement
                  className="w-full h-64 md:h-80 object-contain rounded-xl shadow-md transition-transform duration-500 hover:scale-105 border-2 border-yellow-600 bg-gradient-to-b from-white to-blue-100"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}

      {/* Slider Description */}
      {ministry.sliderDescription && <p className="text-gray-600 text-center mt-4">{ministry.sliderDescription}</p>}

      {/* Ministries with Projects */}
      {ministry.projects && (
        <div className="mt-10">
          {ministry.projects.map((project, index) => (
            <div key={index} className="mt-10 bg-gradient-to-r from-blue-100 to-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold underline text-blue-950 text-center">{project.name}</h3>

              {/* Project Image Slider */}
              <div className="flex justify-center mt-4">
                <Swiper
                  modules={[Autoplay, Pagination]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  pagination={{ clickable: true }}
                  loop={true}
                  className="my-6 w-full max-w-3xl rounded-xl"
                >
                  {project.images.map((image, i) => (
                    <SwiperSlide key={i}>
                      <Image
                        src={image}
                        alt={`Slide ${i + 1}`}
                        width={500}
                        height={320}
                        className="w-full h-64 md:h-80 object-contain rounded-xl shadow-md transition-transform duration-500 hover:scale-105 border-2 border-yellow-600 bg-gradient-to-b from-white to-blue-100"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <p className="text-gray-600 text-center mt-4">{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
