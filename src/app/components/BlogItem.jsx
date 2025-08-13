"use client";

import Image from "next/image";
import { blog_data } from "../../../assets/assets";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const BlogItem = () => {
  const [menu, setmenu] = useState("All");
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "The Future of Technology: Trends to Watch in 2025",
      description:
        "Technology in 2025 is evolving faster than ever, shaping industries, economies, and our daily lives in ways that were once unimaginable. Artificial Intelligence is no longer an experimental concept — it has become a mainstream tool driving efficiency, creativity, and innovation across sectors. From AI-powered healthcare systems capable of predicting illnesses before symptoms appear, to automated financial platforms that analyze global markets in real-time, the impact of AI is undeniable. In parallel, quantum computing is beginning to break into practical use cases, enabling scientists and engineers to solve complex problems in fields like drug discovery, climate modeling, and cryptography at unprecedented speeds. The global rollout of 5G has transformed connectivity, but the race towards 6G promises even more — ultra-fast, low-latency networks that will power immersive experiences in augmented and virtual reality, autonomous vehicles, and smart city infrastructure.\n\nSustainability is another defining trend of the decade. Technology companies are committing to greener operations, adopting renewable energy for data centers, developing energy-efficient chips, and exploring biodegradable materials for electronics. The goal is to reduce the carbon footprint of our increasingly digital world. The rise of the Internet of Things (IoT) is also transforming everyday environments, with billions of connected devices collecting and exchanging data to make homes, offices, and cities smarter and more efficient.\n\nHowever, these opportunities come with challenges. Cybersecurity threats are becoming more sophisticated, targeting critical infrastructure, personal data, and financial systems. As AI grows more powerful, ethical concerns about bias, privacy, and accountability continue to intensify. Governments and organizations are under pressure to create regulations that encourage innovation while protecting citizens from misuse of technology.\n\nLooking ahead, the winners in this digital race will be those who can adapt quickly, embrace lifelong learning, and responsibly leverage emerging tools to create value. The future belongs to innovators, but it will require a balance between speed, sustainability, and security to ensure that technology serves humanity as a whole.",
      category: "Technology",
      image: "/tech1.jpg",
      date: new Date().toISOString(),
    },
    {
      _id: "2",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever. Mindfulness, the practice of being fully present in the moment, offers a powerful tool for reducing stress, improving mental clarity, and enhancing emotional well-being. With constant notifications, social media updates, and endless to-do lists, it’s easy to feel overwhelmed. Mindfulness teaches us to pause, breathe, and focus on the here and now. Research shows that practicing mindfulness for just 10 minutes a day can significantly lower stress hormones, improve concentration, and boost overall happiness. Simple activities like mindful breathing, body scans, or mindful walking can be done anywhere — at your desk, during a commute, or while preparing a meal. Beyond stress reduction, mindfulness helps cultivate compassion, resilience, and a deeper connection to ourselves and others. In a world driven by speed, mindfulness reminds us that slowing down can actually help us achieve more, with greater clarity and purpose.",
      category: "Wellness",
      image: "/well1.webp",
      date: new Date().toISOString(),
    },
    {
      _id: "3",
      title: "10 Daily Habits for a Healthier, Happier You",
      description:
        "Wellness isn’t built in a day — it’s the result of small, consistent actions that add up over time. Incorporating healthy habits into your daily routine can improve your physical health, mental clarity, and emotional balance. Start your day with a glass of water to rehydrate after sleep, followed by a nourishing breakfast packed with protein and fiber. Move your body for at least 30 minutes a day, whether it’s a brisk walk, yoga, or strength training. Prioritize sleep by aiming for 7–8 hours each night, and establish a bedtime routine to signal your body it’s time to rest. Limit processed foods and sugar, opting instead for whole, nutrient-rich meals. Take breaks from screens to reduce eye strain and mental fatigue. Practice gratitude by writing down three things you’re thankful for each day. Engage in meaningful conversations and nurture your relationships. Remember to spend time outdoors — fresh air and sunlight are natural mood boosters. Finally, dedicate a few minutes each evening to self-reflection or meditation. These small, intentional choices can create lasting change and help you feel more energized and fulfilled.",
      category: "Wellness",
      image: "/healthy-habits.png",
      date: new Date().toISOString(),
    },
    {
      _id: "4",
      title: "Designing a Morning Routine That Sets You Up for Success",
      description:
        "The way you start your morning sets the tone for the rest of your day. A well-structured morning routine can boost productivity, improve mood, and enhance overall well-being. Begin by waking up at a consistent time, even on weekends, to regulate your body’s natural rhythm. Avoid checking your phone first thing in the morning — instead, take a few deep breaths, stretch, or do light exercise to energize your body. Hydrate with a glass of water before coffee, and nourish yourself with a balanced breakfast that fuels your brain and body. Set aside time for a positive practice, such as journaling, reading, or practicing gratitude, to frame your mindset for the day ahead. Identify your top three priorities for the day to stay focused and avoid feeling overwhelmed. Morning routines don’t have to be long or complicated — what matters most is consistency. By starting your day intentionally, you create momentum that carries you through challenges and helps you feel in control, focused, and motivated.",
      category: "Lifestyle",
      image: "/morning-routine.png",
      date: new Date().toISOString(),
    },
    {
      _id: "5",
      title:
        "Minimalism in Everyday Life: Living with Less, Living with Purpose",
      description:
        "Minimalism is more than just decluttering — it’s a lifestyle that focuses on intentional living and prioritizing what truly matters. In a world that often equates success with accumulation, minimalism encourages us to let go of excess possessions, distractions, and commitments that don’t serve our well-being. The benefits are profound: less stress, more clarity, and greater freedom to focus on experiences and relationships. Start small by decluttering one area of your home, such as your closet or workspace. Be mindful of new purchases, asking yourself whether they add genuine value to your life. Minimalism also extends to digital spaces — reducing screen time, simplifying your apps, and curating your social media feed can create mental space and reduce anxiety. Ultimately, minimalism isn’t about deprivation; it’s about making room for more of what matters: creativity, connection, and purpose. When you live with intention, you find that less truly can be more.",
      category: "Lifestyle",
      image: "/minimalism.png",
      date: new Date().toISOString(),
    },
  ]);

  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="lg:mx-10 mx-5 my-14">
      <div className="flex flex-col xl:flex-row justify-between gap-10">
        <div>
          <h1 className="text-5xl font-bold">Featured Blogs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-10">
            {Array.isArray(blogs) &&
              blogs
                .slice(0, 9)
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .map((blog, index) => (
                  <Link
                    href={`/Blog/${blog._id}`}
                    key={index}
                    className="h-full"
                  >
                    <div className="bg-white rounded-xl shadow flex flex-col h-full">
                      {/* Image */}
                      <div className="w-full h-[200px] relative">
                        <Image
                          src={
                            blog.image.startsWith("/")
                              ? blog.image
                              : `/${blog.image}`
                          }
                          alt={blog.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                          className="rounded-t-xl"
                        />
                      </div>

                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow justify-between">
                        <div>
                          <button className="bg-red-100 text-red-600 px-4 py-1 rounded-lg font-bold text-sm mb-2">
                            {blog.category}
                          </button>

                          <h1 className="text-xl font-semibold text-dark mb-2">
                            {blog.title}
                          </h1>

                          <p className="text-md text-gray-800">
                            {blog.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>

          <Link href="/AllBlog">
            {" "}
            <button
              className="border mt-5 border-3 border-solid-3xl  bg-dark rounded-full text-light px-5 py-3 font-bold text-md"
              style={{ background: "black", color: "white" }}
            >
              ALL BLOGS
            </button>
          </Link>
        </div>
        <div className="w-full xl:w-[50%]">
          <h1 className="text-2xl font-bold mb-3 text-red-600">LATEST BLOGS</h1>

          <div className="flex flex-wrap gap-2 mb-4">
            <button
              className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
              onClick={() => setmenu("All")}
            >
              All
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
              onClick={() => setmenu("Technology")}
            >
              Technology
            </button>
            <button
              className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
              onClick={() => setmenu("Wellness")}
            >
              Wellness
            </button>
            {/* <button
              className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
              onClick={() => setmenu("Lifestyle")}
            >
              Lifestyle
            </button> */}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:flex xl:flex-col">
            {/* <Link href="/Blog"> */}
            {Array.isArray(blogs) &&
              blogs
                .filter((blog) =>
                  menu === "All" ? true : blog.category === menu
                )
                .sort((a, b) => new Date(b.date) - new Date(a.date))
                .slice(0, 5)
                .map((blog, index) => (
                  <Link href={`/Blog/${blog._id}`} key={index}>
                    <div key={index} className="flex items-start gap-4 mb-4">
                      <div className="w-[104px] h-[84px] relative shrink-0 rounded-lg overflow-hidden">
                        <Image
                          src={
                            blog.image.startsWith("/")
                              ? blog.image
                              : `/${blog.image}`
                          }
                          alt={`Post ${index + 1}`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-sm flex gap-2 text-gray-500 mb-1">
                          <Image
                            src="/calendar.png"
                            alt="Calendar"
                            width={20}
                            height={15}
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: "cover" }}
                          />
                          {new Date(blog.date).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </h2>
                        <h2 className="text-sm font-semibold text-gray-800">
                          {blog.title}
                        </h2>
                      </div>
                    </div>
                  </Link>
                ))}
            {/* </Link> */}
          </div>
        </div>{" "}
      </div>
    </div>
  );
};

export default BlogItem;
