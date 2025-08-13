// "use client";
// import { use, useState, useEffect } from "react";
// import Image from "next/image";
// import { blog_data } from "../../../../assets/assets";
// import Link from "next/link";
// import axios from "axios";
// const page = ({ params }) => {
//   const [data, setData] = useState(null);
//   const [menu, setmenu] = useState("All");

//   const fetchBlogData = async () => {
//     const resolvedParams = await params;
//     const response = await axios.get("http://localhost:3000/api/blog", {
//       params: {
//         id: resolvedParams.id,
//       },
//     });
//     setData(response.data);
//   };

//   useEffect(() => {
//     fetchBlogData();
//   }, []);

//   const [blogs, setBlogs] = useState([]);

//   const fetchBlogs = async () => {
//     const response = await axios.get("http://localhost:3000/api/blog");
//     setBlogs(response.data.blogs);
//     console.log(response.data);
//   };

//   useEffect(() => {
//     fetchBlogs();
//   }, []);

//   return data ? (
//     <>
//       <div className="w-full inline-block ">
//         <article className="flex flex-col items-start justify-end lg:mx-10 mx-5 relative h-[55vh]">
//           <div className="absolute top-0 left-0 bottom-0 right-0 h-full rounded-3xl z-0">
//             <Image
//               src={data.image}
//               fill
//               alt="image"
//               className="w-full h-full object-cover object-center rounded-3xl -z-10"
//             ></Image>

//             <div className="absolute bottom-0 w-full  lg:p-16 p-4  flex flex-col items-start justify-center bg-gradient-to-t from-black via-transparent to-transparent text-light rounded-b-3xl">
//               <button className="border border-3 border-solid-3xl border-light rounded-full bg-dark text-white px-4 py-2 font-bold text-sm">
//                 {data.category}
//               </button>
//               <h1 className="lg:text-4xl text-xl text-white mt-4">
//                 {data.title}
//               </h1>
//               <p className="text-lg font-light text-white mt-2">
//                 {data.description}
//               </p>
//             </div>
//           </div>
//         </article>

//         <div className="flex flex-col xl:flex-row justify-between gap-10 lg:mx-10 mx-5 my-14">
//           <div className="w-full xl:w-[70%]">
//             <button className="bg-red-100 text-red-600 px-4 py-1 rounded-lg font-bold text-sm mb-2">
//               {data.category}
//             </button>
//             <h1 className="text-2xl font-bold">{data.title}</h1>

//             <p className="mt-4 text-gray-700">{data.description}</p>

//             <div className="mt-4 text-gray-700" dangerouslySetInnerHTML={{ __html: data.article }}></div>

//             <div className=" mt-15 blog-page">
//               <h1 className="text-2xl font-bold my-4">Share the Blog</h1>
//               <div>
//                 <a
//                   href="https://www.linkedin.com"
//                   className="mr-4 inline-block"
//                 >
//                   <Image
//                     src="/linkedin.png"
//                     width={22}
//                     height={22}
//                     alt=""
//                     className="w-[130px] sm:w-auto"
//                   ></Image>
//                 </a>
//                 <a
//                   href="https://www.instagram.com"
//                   className="mr-4 inline-block"
//                 >
//                   <Image
//                     src="/instagram.png"
//                     width={20}
//                     height={20}
//                     alt=""
//                     className="w-[130px] sm:w-auto"
//                   ></Image>
//                 </a>
//                 <a
//                   href="https://www.facebook.com"
//                   className="mr-4 inline-block"
//                 >
//                   <Image
//                     src="/facebook.png"
//                     width={20}
//                     height={20}
//                     alt=""
//                     className="w-[130px] sm:w-auto"
//                   ></Image>
//                 </a>
//                 <a href="https://www.twitter.com" className="mr-4 inline-block">
//                   <Image
//                     src="/logos.png"
//                     width={20}
//                     height={20}
//                     alt=""
//                     className="w-[130px] sm:w-auto"
//                   ></Image>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className="w-full xl:w-[30%]">
//             <h1 className="text-2xl font-bold mb-3 text-red-600">
//               LATEST BLOGS
//             </h1>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {["All", "Technology", "Wellness"].map((category) => (
//                 <button
//                   key={category}
//                   className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
//                   onClick={() => setmenu(category)}
//                 >
//                   {category}
//                 </button>
//               ))}
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 xl:flex xl:flex-col">
//               {Array.isArray(blogs) &&
//                 blogs
//                   .filter((blog) =>
//                     menu === "All" ? true : blog.category === menu
//                   )
//                   .sort((a, b) => new Date(b.date) - new Date(a.date))
//                   .slice(0, 5)
//                   .map((blog, index) => (
//                     <Link href={`/Blog/${blog._id}`} key={index}>
//                       <div className="flex items-start gap-4 mb-4">
//                         <div className="w-[104px] h-[84px] relative shrink-0 rounded-lg overflow-hidden">
//                           <Image
//                             src={
//                               blog.image.startsWith("/")
//                                 ? blog.image
//                                 : `/${blog.image}`
//                             }
//                             alt={`Post ${index + 1}`}
//                             fill
//                             sizes="(max-width: 768px) 100vw, 50vw"
//                             style={{ objectFit: "cover" }}
//                           />
//                         </div>
//                         <div className="flex-1">
//                           <h2 className="text-sm flex gap-2 text-gray-500 mb-1">
//                             <Image
//                               src="/calendar.png"
//                               alt="Calendar"
//                               width={20}
//                               height={15}
//                               sizes="(max-width: 768px) 100vw, 50vw"
//                               style={{ objectFit: "cover" }}
//                             />
//                             {new Date(blog.date).toLocaleDateString("en-GB", {
//                               day: "2-digit",
//                               month: "short",
//                               year: "numeric",
//                             })}
//                           </h2>
//                           <h2 className="text-sm font-semibold text-gray-800">
//                             {blog.title}
//                           </h2>
//                         </div>
//                       </div>
//                     </Link>
//                   ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   ) : (
//     <></>
//   );
// };

// export default page;



"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { blog_data } from "../../../../assets/assets";
import Link from "next/link";
import axios from "axios";

const Page = ({ params }) => {
  const id = params.id; // ✅ direct access, no `use(params)`
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState(blog_data);
  const [menu, setMenu] = useState("All");

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`/api/blog`);
      if (Array.isArray(response.data.blogs)) {
        setBlogs(response.data.blogs);
      } else {
        setBlogs(blog_data);
      }
    } catch (error) {
      console.error("Error fetching blogs, using static list:", error);
      setBlogs(blog_data);
    }
  };

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blog`, { params: { id } });

      if (response.data && Object.keys(response.data).length > 0) {
        setData(response.data);
      } else {
        const fallback = blog_data.find((b) => String(b._id) === String(id));
        setData(fallback || null);
      }
    } catch (error) {
      console.error("Error fetching blog, using static data:", error);
      const fallback = blog_data.find((b) => String(b._id) === String(id));
      setData(fallback || null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchBlogs();
  }, [id]);

  if (!data) return <p className="p-10">Blog not found.</p>;

  return (
    <div className="w-full inline-block">
      {/* Featured Image + Title */}
      <article className="flex flex-col items-start justify-end lg:mx-10 mx-5 relative h-[55vh]">
        <div className="absolute top-0 left-0 bottom-0 right-0 h-full rounded-3xl z-0">
          <Image
            src={data.image.startsWith("/") ? data.image : `/${data.image}`}
            fill
            alt="image"
            className="w-full h-full object-cover object-center rounded-3xl -z-10"
          />
          <div className="absolute bottom-0 w-full lg:p-16 p-4 flex flex-col items-start justify-center bg-gradient-to-t from-black via-transparent to-transparent text-light rounded-b-3xl">
            <button className="border border-light rounded-full bg-dark text-white px-4 py-2 font-bold text-sm">
              {data.category}
            </button>
            <h1 className="lg:text-4xl text-xl text-white mt-4">{data.title}</h1>
            <p className="text-lg font-light text-white mt-2">{data.description}</p>
          </div>
        </div>
      </article>

      {/* Main content + Sidebar */}
      <div className="flex flex-col xl:flex-row justify-between gap-10 lg:mx-10 mx-5 my-14">
        <div className="w-full xl:w-[70%]">
          <p className="mt-4 text-gray-700">{data.description}</p>
          {data.article && (
            <div
              className="mt-4 text-gray-700"
              dangerouslySetInnerHTML={{ __html: data.article }}
            />
          )}
        </div>

        {/* Sidebar Latest Blogs */}
        <div className="w-full xl:w-[30%]">
          <h1 className="text-2xl font-bold mb-3 text-red-600">LATEST BLOGS</h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {["All", "Technology", "Wellness"].map((category) => (
              <button
                key={category}
                className="bg-gray-200 text-black px-4 py-1 rounded-lg font-bold text-sm"
                onClick={() => setMenu(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 xl:flex xl:flex-col gap-4">
            {blogs
              .filter((b) => (menu === "All" ? true : b.category === menu))
              .slice(0, 5)
              .map((blog, index) => (
                <Link href={`/Blog/${blog._id}`} key={index}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-[104px] h-[84px] relative rounded-lg overflow-hidden">
                      <Image
                        src={blog.image.startsWith("/") ? blog.image : `/${blog.image}`}
                        alt={blog.title}
                        fill
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-sm text-gray-500">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
