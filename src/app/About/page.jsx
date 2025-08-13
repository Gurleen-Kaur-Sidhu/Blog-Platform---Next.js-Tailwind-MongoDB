"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* Header Section */}
      <section className="relative w-full h-[50vh]">
        <Image
          src="/about-banner.jpg"
          alt="About Banner"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white text-center">
            About Our Blog
          </h1>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-4">Welcome to Our Space</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our blog is a space for curious minds, creative thinkers, and lifelong learners. 
          We share stories, ideas, and resources that inspire and empower. 
          Whether you're here for technology trends, wellness tips, or lifestyle inspiration, 
          you'll always find something to spark your curiosity.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-5 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our mission is simple: to provide valuable, authentic, and engaging content 
              that enriches lives. We believe in the power of storytelling and knowledge sharing 
              to connect people across the globe.
            </p>
          </div>
          <div className="relative w-full h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/mission.jpg"
              alt="Our Mission"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="max-w-6xl mx-auto px-5 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What We Offer</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Technology Insights", img: "/tech.jpg", desc: "Stay ahead with the latest trends, tools, and innovations in the tech world." },
            { title: "Wellness Tips", img: "/wellness.jpg", desc: "Discover simple and effective ways to boost your mental and physical well-being." },
            { title: "Lifestyle Stories", img: "/lifestyle.jpg", desc: "Inspiration and advice for living a balanced, fulfilling life." }
          ].map((item, i) => (
            <div key={i} className="bg-white shadow-md rounded-lg overflow-hidden">
              <div className="relative w-full h-48">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-5">
          <h2 className="text-3xl font-bold mb-8 text-center">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Gurleen Kaur", role: "Founder & Writer", img: "/team1.jpg" },
              { name: "Amit Sharma", role: "Editor", img: "/team2.jpg" },
              { name: "Priya Verma", role: "Content Strategist", img: "/team3.jpg" }
            ].map((member, i) => (
              <div key={i} className="bg-white shadow-md rounded-lg text-center p-5">
                <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden">
                  <Image src={member.img} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
                <p className="text-gray-500">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <section className="text-center py-12 px-5 bg-red-600 text-white">
        <h2 className="text-2xl font-semibold mb-2">“Inspire. Learn. Grow.”</h2>
        <p>Thank you for being part of our journey!</p>
      </section>
    </div>
  );
}
