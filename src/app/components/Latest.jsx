"use client"

import Image from "next/image";
import { blog_data } from "../../../assets/assets";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const Latest = () => {

  const [blogs, setBlogs] = useState([]);

  
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/api/blog");
    setBlogs(response.data.blogs || []);
    console.log(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="lg:px-10 px-5 py-15 my-14 bg-gray-100">
      <h1 className="text-5xl text-dark font-bold">What's Trending Today</h1>
      {/* <Link href='/Blog'> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-8 mt-10">
          {Array.isArray(blogs) &&
              blogs.slice(0, 4).map((blog, index) => (
                <Link href={`/Blog/${blog._id}`} key={index}>
            <div className="w-[100%] rounded-xl">
              <div className="w-full h-[200px] relative mb-4">
                <Image
                  src={
                    blog.image.startsWith("/")
                      ? blog.image
                      : `/${blog.image}`
                  }
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                 style={{ objectFit: 'cover' }}
                  className="rounded-xl"
                />
              </div>
              <div className="">
                <button className="bg-red-600 text-white px-4 py-1 rounded-lg font-bold text-sm mb-2">
                  {blog.category}
                </button>
                {/* 
                  <h1 className="text-lg font-bold text-white">
                    {blog.title}
                  </h1> */}
                <h6 className="text-md font-semibold text-dark">
                  {blog.description}
                </h6>
              </div>
            </div>
           </Link>
          ))}
        </div>
      {/* </Link> */}
    </div>
  );
};

export default Latest;
