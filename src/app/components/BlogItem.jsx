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
    title: "Sample Blog Post",
    description: "This is a sample description for the blog before API data loads.",
    category: "Technology",
    image: "/blogger.png",
    date: new Date().toISOString()
  },
  {
    _id: "2",
    title: "Wellness Guide",
    description: "Quick tips to improve your wellness and lifestyle.",
    category: "Wellness",
    image: "/default-blog2.jpg",
    date: new Date().toISOString()
  }
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
             
                 <Link href={`/Blog/${blog._id}`} key={index} >
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
      </div>   </div>
    </div>
  );
};

export default BlogItem;
