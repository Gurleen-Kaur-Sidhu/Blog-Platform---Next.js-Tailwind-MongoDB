"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
const HomeCoverSection = () => {
  const [blogs, setBlogs] = useState([{
      _id: "1",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever.",
      category: "Wellness",
      image: "/well1.webp",
      date: new Date().toISOString(),
    }]);
  const fetchBlogs = async () => {
    const response = await axios.get("http://localhost:3000/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);
  return (
    <div className="w-full inline-block">
      {/* <Link href='/Blog'> */}
      <article className="flex flex-col items-start justify-end lg:mx-10 mx-5 relative h-[85vh]">
        {Array.isArray(blogs) &&
          blogs
            .sort((a, b) => new Date(b.date) - new Date(a.date))
            .slice(0, 1)
            .map((blog, index) => (
              <Link href={`/Blog/${blog._id}`} key={index}>
                <div className="absolute top-0 left-0 bottom-0 right-0 h-full rounded-3xl z-0">
                  <Image
                    src={
                      blog.image.startsWith("/") ? blog.image : `/${blog.image}`
                    }
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    alt="coverimage"
                    className="w-full h-full object-cover object-center rounded-3xl -z-10"
                  ></Image>

                  <div className="absolute bottom-0 w-full lg:p-16 p-8 flex flex-col items-start justify-center bg-gradient-to-t from-black via-transparent to-transparent text-light rounded-b-3xl">
                    <button className="border border-3 border-solid-3xl border-light rounded-full bg-dark text-white px-4 py-2 font-bold text-sm">
                      {blog.category}
                    </button>
                    <h1 className="lg:text-4xl text-2xl text-white mt-4"> {blog.title}</h1>
                    <p className="text-lg font-light text-white mt-2">
                      {" "}
                      {blog.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
      </article>

      {/* </Link> */}
    </div>
  );
};

export default HomeCoverSection;
