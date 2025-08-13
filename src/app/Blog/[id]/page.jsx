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

import { use, useState, useEffect } from "react";
import Image from "next/image";
import { blog_data } from "../../../../assets/assets";
import Link from "next/link";
import axios from "axios";

const Page = ({ params }) => {
  const { id } = use(params); // ✅ unwrap Promise params
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ new loading state
  const [blogs, setBlogs] = useState([
    {
      _id: "1",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever.",
      category: "Wellness",
      image: "/well1.webp",
      date: new Date().toISOString(),
      article:
        "In today’s always-on world, the word wellness gets tossed around a lot. It shows up in fitness routines, skincare ads, mental health apps, and diet trends. But at its core, wellness is about one simple goal: feeling good—physically, mentally, and emotionally. It’s not about perfection. It’s not about the latest fads. It’s about finding what helps you thrive. 🌱 What Is Wellness, Really? Wellness is the active process of becoming aware of and making choices toward a healthy and fulfilling life. It’s multidimensional, often broken down into several key areas: Physical: Exercise, nutrition, sleep, and medical care Mental: Mindfulness, stress management, self-talk Emotional: Emotional intelligence, boundaries, self-compassion Social: Healthy relationships, community, support systems Spiritual: Purpose, values, inner peace—religious or not Occupational: Meaningful work and work-life balance Each area affects the others, and true wellness means paying attention to all of them—without burning out trying to optimize everything. 🧘‍♀️ Small Habits, Big Impact You don’t need to overhaul your life to improve your wellness. In fact, the most sustainable changes come from small, consistent shifts: Start your day with five minutes of deep breathing or meditation. Trade one soda a day for water or herbal tea. Take a 15-minute walk in nature without your phone. Journal before bed to process thoughts and reduce anxiety. Say “no” to things that drain you, and “yes” to what restores you. Wellness begins when you listen to your body and mind—and honor what they’re telling you. 💡 The Rise of Mindful Living In a culture that glorifies hustle and productivity, more people are reclaiming their peace through mindfulness and self-care. This shift is showing up in: Digital detoxes: Unplugging to reduce mental clutter Holistic health practices: Acupuncture, breathwork, and natural remedies Therapy & coaching: Prioritizing mental health as much as physical health Rituals over routines: Turning everyday moments into intentional acts of care Mindful living doesn’t mean you have to live like a monk—it means being present and choosing what aligns with your values. 🌼 Self-Care Isn’t Selfish Taking care of yourself doesn’t make you weak. It makes you resilient. When you nourish yourself—body, mind, and soul—you show up more fully for your work, your relationships, and your passions. So whether it’s spending a quiet morning with a book, investing in therapy, or simply getting 8 hours of sleep, know this: rest is productive. Joy is essential. And you are worth the care. 🌈 Final Thoughts: Your Wellness, Your Way Wellness isn’t a one-size-fits-all journey. It’s deeply personal. It changes with your seasons, your struggles, and your growth. Some days it looks like green juice and pilates. Other days, it’s crying on the couch with your favorite movie and a bowl of popcorn. Both count. The goal isn’t to do wellness perfectly. It’s to do it intentionally. So slow down. Breathe deep. Tune in. Your well-being is calling—and it’s time to answer.",
    },
    {
      _id: "2",
      title: "The Future of Technology: Trends to Watch in 2025",
      description:
        "Technology in 2025 is evolving faster than ever, shaping industries, economies, and our daily lives in ways that were once unimaginable.",
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
  const [menu, setMenu] = useState("All");

  const fetchBlogs = async () => {
    try {
      const response = await axios.get(`/api/blog`); // ✅ relative URL
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

  useEffect(() => {
    fetchBlogData();
    fetchBlogs();
  }, [id]);

  if (!data) return <p className="p-10">Blog not found.</p>;

  const fetchBlogData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`/api/blog`, { params: { id } });

      if (response.data && Object.keys(response.data).length > 0) {
        setData(response.data);
      } else {
        const fallback = blogs.find((b) => String(b._id) === String(id));
        setData(fallback || null);
      }
    } catch (error) {
      console.error("Error fetching blog, using static data:", error);
      const fallback = blogs.find((b) => String(b._id) === String(id));
      setData(fallback || null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogData();
    fetchBlogs();
  }, [id]);

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
            <h1 className="lg:text-4xl text-xl text-white mt-4">
              {data.title}
            </h1>
            <p className="text-lg font-light text-white mt-2">
              {data.description}
            </p>
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
                        src={
                          blog.image.startsWith("/")
                            ? blog.image
                            : `/${blog.image}`
                        }
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
