"use client";

import Image from "next/image";
import { blog_data } from "../../../assets/assets";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const AllBlog = () => {
  const [menu, setmenu] = useState("All");
  const [blogs, setBlogs] = useState([]);

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
