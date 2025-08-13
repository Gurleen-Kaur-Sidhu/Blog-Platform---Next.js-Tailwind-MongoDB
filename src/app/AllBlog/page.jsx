"use client";

import Image from "next/image";
import { blog_data } from "../../../assets/assets";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import HomeCoverSection from "../components/HomeCoverSection";
const AllBlog = () => {
  const [menu, setmenu] = useState("All");
   const [blogs, setBlogs] = useState([
    {
     _id: "1",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever.",
      category: "Wellness",
      image: "/well1.webp",
      date: new Date().toISOString(),
    },
    {
      
      _id: "2",
      title: "The Future of Technology: Trends to Watch in 2025",
      description:
        "Technology in 2025 is evolving faster than ever, shaping industries, economies, and our daily lives in ways that were once unimaginable. ",
      category: "Technology",
      image: "/tech1.jpg",
      date: new Date().toISOString(),
    },
    {
      _id: "3",
      title: "10 Daily Habits for a Healthier, Happier You",
      description:
        "Wellness isn’t built in a day — it’s the result of small, consistent actions that add up over time.",
      category: "Wellness",
      image: "/well2.jpg",
      date: new Date().toISOString(),
    },
    {
      _id: "4",
      title: "Designing a Morning Routine That Sets You Up for Success",
      description:
        "The way you start your morning sets the tone for the rest of your day.",
      category: "Lifestyle",
      image: "/life1.jpg",
      date: new Date().toISOString(),
    },
    {
      _id: "5",
      title:
        "Minimalism in Everyday Life: Living with Less, Living with Purpose",
      description:
        "Minimalism is more than just decluttering — it’s a lifestyle that focuses on intentional living and prioritizing what truly matters.",
      category: "Lifestyle",
      image: "/mini1.jpg",
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
    <div className="bg-gray-100">
      <HomeCoverSection></HomeCoverSection>
      <div className="flex justify-between gap-10 lg:mx-10 mx-5 lg:py-12 py-6">
        <div>
          <h1 className="lg:text-5xl text-3xl font-bold mb-2">Read your Favourites!!</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
  {Array.isArray(blogs) &&
    blogs
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .map((blog, index) => (
        <Link href={`/Blog/${blog._id}`} key={index} className="h-full">
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


          
        </div>

    
      </div>
    </div>
  );
};

export default AllBlog;
