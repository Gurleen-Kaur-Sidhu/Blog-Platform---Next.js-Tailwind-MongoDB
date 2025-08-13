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
        "Technology in 2025 is evolving faster than ever, shaping industries, economies, and our daily lives in ways that were once unimaginable. ",
      category: "Technology",
      image: "/tech1.jpg",
      date: new Date().toISOString(),
    },
    {
      _id: "2",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever.",
      category: "Wellness",
      image: "/well1.webp",
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
      image: "/life.jpg",
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
