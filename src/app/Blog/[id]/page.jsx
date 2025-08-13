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
  const { id } = params; // ✅ unwrap Promise params
  const [data, setData] = useState(null);
  const [blogs, setBlogs] = useState([
   {
      _id: "1",
      title: "Mindfulness in the Digital Age: Finding Calm in a Busy World",
      description:
        "In our fast-paced, always-connected world, finding moments of stillness has become more important than ever.",
      category: "Wellness",
      image: "/well1.webp",
      date: new Date().toISOString(),
      article: "In today’s always-on world, the word wellness gets tossed around a lot. It shows up in fitness routines, skincare ads, mental health apps, and diet trends. But at its core, wellness is about one simple goal: feeling good—physically, mentally, and emotionally. It’s not about perfection. It’s not about the latest fads. It’s about finding what helps you thrive. 🌱 What Is Wellness, Really? Wellness is the active process of becoming aware of and making choices toward a healthy and fulfilling life. It’s multidimensional, often broken down into several key areas: Physical: Exercise, nutrition, sleep, and medical care Mental: Mindfulness, stress management, self-talk Emotional: Emotional intelligence, boundaries, self-compassion Social: Healthy relationships, community, support systems Spiritual: Purpose, values, inner peace—religious or not Occupational: Meaningful work and work-life balance Each area affects the others, and true wellness means paying attention to all of them—without burning out trying to optimize everything. 🧘‍♀️ Small Habits, Big Impact You don’t need to overhaul your life to improve your wellness. In fact, the most sustainable changes come from small, consistent shifts: Start your day with five minutes of deep breathing or meditation. Trade one soda a day for water or herbal tea. Take a 15-minute walk in nature without your phone. Journal before bed to process thoughts and reduce anxiety. Say “no” to things that drain you, and “yes” to what restores you. Wellness begins when you listen to your body and mind—and honor what they’re telling you. 💡 The Rise of Mindful Living In a culture that glorifies hustle and productivity, more people are reclaiming their peace through mindfulness and self-care. This shift is showing up in: Digital detoxes: Unplugging to reduce mental clutter Holistic health practices: Acupuncture, breathwork, and natural remedies Therapy & coaching: Prioritizing mental health as much as physical health Rituals over routines: Turning everyday moments into intentional acts of care Mindful living doesn’t mean you have to live like a monk—it means being present and choosing what aligns with your values. 🌼 Self-Care Isn’t Selfish Taking care of yourself doesn’t make you weak. It makes you resilient. When you nourish yourself—body, mind, and soul—you show up more fully for your work, your relationships, and your passions. So whether it’s spending a quiet morning with a book, investing in therapy, or simply getting 8 hours of sleep, know this: rest is productive. Joy is essential. And you are worth the care. 🌈 Final Thoughts: Your Wellness, Your Way Wellness isn’t a one-size-fits-all journey. It’s deeply personal. It changes with your seasons, your struggles, and your growth. Some days it looks like green juice and pilates. Other days, it’s crying on the couch with your favorite movie and a bowl of popcorn. Both count. The goal isn’t to do wellness perfectly. It’s to do it intentionally. So slow down. Breathe deep. Tune in. Your well-being is calling—and it’s time to answer."
    },
    {
      _id: "2",
      title: "The Future of Technology: Trends to Watch in 2025",
      description:
        "Technology in 2025 is evolving faster than ever, shaping industries, economies, and our daily lives in ways that were once unimaginable.",
      category: "Technology",
      image: "/tech1.jpg",
      date: new Date().toISOString(),
      article:"In a world where attention spans are short and competition is fierce, great UI design can be the difference between a product that thrives and one that’s quickly forgotten. But what exactly makes a user interface not just functional—but delightful? UI design isn't about flashy colors or trendy fonts—it’s about clarity, usability, and emotional connection. It’s about helping users achieve their goals with minimal friction and maximum satisfaction. 🧩 What is UI Design? UI (User Interface) design refers to the visual layout and interactive elements of a digital product—think buttons, icons, sliders, typography, spacing, and color schemes. It’s the bridge between the user and the software. While UI often gets grouped with UX (User Experience), they serve different (but deeply connected) purposes: UI = how it looks UX = how it works A beautiful interface without usability? Frustrating. A usable interface without visual clarity? Confusing. You need both. 📐 Principles of Great UI Design Great UI design follows a few core principles: Consistency: Visual language (colors, fonts, icons) should remain uniform across the product to build familiarity. Clarity: Every element should have a purpose. Design shouldn’t make the user think. Feedback: Visual or tactile cues (like hover effects or loading animations) reassure users that their actions have been registered. Hierarchy: Important actions or information should stand out visually using size, color, or positioning. Accessibility: Design for everyone, including users with disabilities—use proper contrast, readable text, and keyboard navigation. 💡 The Psychology Behind UI UI design isn’t just visual—it’s psychological. Good design speaks the user’s language and anticipates their needs. Consider: Color psychology: Blue feels trustworthy, red feels urgent, green feels positive. Whitespace: Less is often more. Breathing room helps users focus. Microinteractions: Tiny animations or sounds can create emotional engagement and improve usability. A good UI doesn’t just guide the user—it nudges them in the right direction without them even realizing it. 🧠 Tools & Trends in Modern UI UI design continues to evolve with technology and trends. Some current tools and styles dominating the field include: Tools: Figma, Sketch, Adobe XD, Framer Trends: Neumorphism & Glassmorphism Minimalistic interfaces Dark mode everything 3D elements and micro-animations Voice and gesture-driven interfaces However, trends should serve the user—not distract from usability. 🚫 Common UI Mistakes to Avoid Even experienced designers can fall into common traps: Overloading the interface with options (aka feature bloat) Using unclear icons without labels Poor contrast or unreadable fonts Lack of responsiveness on different devices Ignoring accessibility standards Design is problem-solving. If it looks cool but confuses users, it’s not great UI. 🖌️ Final Pixel: Design With Purpose At its best, UI design is invisible. Users don’t notice it—they just feel that the experience was smooth, intuitive, even enjoyable. That’s the magic. Whether you're designing an app, a website, or a dashboard, always ask: Is this helping the user? Is it clear and accessible? Does it feel human? Because in the end, UI design isn’t just about screens. It’s about people."
    },
    {
      _id: "3",
      title: "10 Daily Habits for a Healthier, Happier You",
      description:
        "Wellness isn’t built in a day — it’s the result of small, consistent actions that add up over time.",
      category: "Wellness",
      image: "/well2.jpg",
      date: new Date().toISOString(),
      article:"In today’s always-on world, the word wellness gets tossed around a lot. It shows up in fitness routines, skincare ads, mental health apps, and diet trends. But at its core, wellness is about one simple goal: feeling good—physically, mentally, and emotionally. It’s not about perfection. It’s not about the latest fads. It’s about finding what helps you thrive. 🌱 What Is Wellness, Really? Wellness is the active process of becoming aware of and making choices toward a healthy and fulfilling life. It’s multidimensional, often broken down into several key areas: Physical: Exercise, nutrition, sleep, and medical care Mental: Mindfulness, stress management, self-talk Emotional: Emotional intelligence, boundaries, self-compassion Social: Healthy relationships, community, support systems Spiritual: Purpose, values, inner peace—religious or not Occupational: Meaningful work and work-life balance Each area affects the others, and true wellness means paying attention to all of them—without burning out trying to optimize everything. 🧘‍♀️ Small Habits, Big Impact You don’t need to overhaul your life to improve your wellness. In fact, the most sustainable changes come from small, consistent shifts: Start your day with five minutes of deep breathing or meditation. Trade one soda a day for water or herbal tea. Take a 15-minute walk in nature without your phone. Journal before bed to process thoughts and reduce anxiety. Say “no” to things that drain you, and “yes” to what restores you. Wellness begins when you listen to your body and mind—and honor what they’re telling you. 💡 The Rise of Mindful Living In a culture that glorifies hustle and productivity, more people are reclaiming their peace through mindfulness and self-care. This shift is showing up in: Digital detoxes: Unplugging to reduce mental clutter Holistic health practices: Acupuncture, breathwork, and natural remedies Therapy & coaching: Prioritizing mental health as much as physical health Rituals over routines: Turning everyday moments into intentional acts of care Mindful living doesn’t mean you have to live like a monk—it means being present and choosing what aligns with your values. 🌼 Self-Care Isn’t Selfish Taking care of yourself doesn’t make you weak. It makes you resilient. When you nourish yourself—body, mind, and soul—you show up more fully for your work, your relationships, and your passions. So whether it’s spending a quiet morning with a book, investing in therapy, or simply getting 8 hours of sleep, know this: rest is productive. Joy is essential. And you are worth the care. 🌈 Final Thoughts: Your Wellness, Your Way Wellness isn’t a one-size-fits-all journey. It’s deeply personal. It changes with your seasons, your struggles, and your growth. Some days it looks like green juice and pilates. Other days, it’s crying on the couch with your favorite movie and a bowl of popcorn. Both count. The goal isn’t to do wellness perfectly. It’s to do it intentionally. So slow down. Breathe deep. Tune in. Your well-being is calling—and it’s time to answer."
    },
    {
      _id: "4",
      title: "Designing a Morning Routine That Sets You Up for Success",
      description:
        "The way you start your morning sets the tone for the rest of your day.",
      category: "Lifestyle",
      image: "/life1.jpg",
      date: new Date().toISOString(),
      article:"In a world overflowing with content, photography still has the power to make us pause. One image can say more than a thousand words, and often, it does. Whether it’s a candid street scene, a raw portrait, or a sweeping landscape, photography is storytelling in its purest form. And while the tools have changed—from film to DSLR to smartphones—the heart of photography remains the same: to see, feel, and share. 📷 A Brief Evolution Photography has come a long way since the first grainy black-and-white images in the 1800s. Some major milestones: Film cameras: The era of patience, darkrooms, and deliberate composition. Digital revolution: Instant review, infinite storage, and post-editing freedom. Smartphone photography: Pocket-sized cameras that rival professional gear. Drone and 360° photography: Changing how we view space and perspective. Today, photography is more accessible than ever. But that doesn’t make it any less meaningful. 🖼️ More Than a Picture: The Emotion Behind the Frame Great photography goes beyond technical skill. It's about emotion, timing, and intention: A tear in someone’s eye tells a deeper story than a paragraph ever could. Light hitting a building at golden hour can turn the ordinary into magic. A child laughing, a storm approaching, or a quiet street at dawn—these moments become timeless when captured with heart. The best photographers don’t just take photos—they feel them. 🌍 Photography in the Digital Age Social media platforms like Instagram, Pinterest, and TikTok have made photography global. With a tap, your shot of a sunset in Santorini can inspire someone in Tokyo. But with this accessibility comes new dynamics: Editing apps & presets let beginners achieve polished looks. AI and computational photography help automate settings and enhance images. Stock photography & content creation have turned passion into profession for many. NFTs & digital galleries are opening doors for photographers in the Web3 space. Still, amidst the filters and fast content, authenticity is what truly stands out. 💡 Tips for Becoming a Better Photographer Whether you’re shooting on an iPhone or a mirrorless camera, the fundamentals matter: Understand light. Natural light can elevate a photo more than any gear. Learn composition. Rule of thirds, leading lines, symmetry—know them. Shoot often. Practice is the fastest path to improvement. Edit wisely. Don’t over-process. Let the photo breathe. Tell a story. What do you want people to feel when they see your photo? Remember: it’s not the camera. It’s the person behind it. 📸 Popular Photography Styles Want to experiment? Here are some popular genres you can explore: Portrait Photography: Capturing emotion, personality, and presence. Landscape Photography: Nature, light, and dramatic scenery. Street Photography: Life in motion, candid human moments. Product & Food Photography: Clean, styled shots for commercial work. Documentary/Photojournalism: Telling real stories with impact. Each style requires a unique eye—and offers its own creative rewards."
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
      article:"In a world overflowing with content, photography still has the power to make us pause. One image can say more than a thousand words, and often, it does. Whether it’s a candid street scene, a raw portrait, or a sweeping landscape, photography is storytelling in its purest form. And while the tools have changed—from film to DSLR to smartphones—the heart of photography remains the same: to see, feel, and share. 📷 A Brief Evolution Photography has come a long way since the first grainy black-and-white images in the 1800s. Some major milestones: Film cameras: The era of patience, darkrooms, and deliberate composition. Digital revolution: Instant review, infinite storage, and post-editing freedom. Smartphone photography: Pocket-sized cameras that rival professional gear. Drone and 360° photography: Changing how we view space and perspective. Today, photography is more accessible than ever. But that doesn’t make it any less meaningful. 🖼️ More Than a Picture: The Emotion Behind the Frame Great photography goes beyond technical skill. It's about emotion, timing, and intention: A tear in someone’s eye tells a deeper story than a paragraph ever could. Light hitting a building at golden hour can turn the ordinary into magic. A child laughing, a storm approaching, or a quiet street at dawn—these moments become timeless when captured with heart. The best photographers don’t just take photos—they feel them. 🌍 Photography in the Digital Age Social media platforms like Instagram, Pinterest, and TikTok have made photography global. With a tap, your shot of a sunset in Santorini can inspire someone in Tokyo. But with this accessibility comes new dynamics: Editing apps & presets let beginners achieve polished looks. AI and computational photography help automate settings and enhance images. Stock photography & content creation have turned passion into profession for many. NFTs & digital galleries are opening doors for photographers in the Web3 space. Still, amidst the filters and fast content, authenticity is what truly stands out. 💡 Tips for Becoming a Better Photographer Whether you’re shooting on an iPhone or a mirrorless camera, the fundamentals matter: Understand light. Natural light can elevate a photo more than any gear. Learn composition. Rule of thirds, leading lines, symmetry—know them. Shoot often. Practice is the fastest path to improvement. Edit wisely. Don’t over-process. Let the photo breathe. Tell a story. What do you want people to feel when they see your photo? Remember: it’s not the camera. It’s the person behind it. 📸 Popular Photography Styles Want to experiment? Here are some popular genres you can explore: Portrait Photography: Capturing emotion, personality, and presence. Landscape Photography: Nature, light, and dramatic scenery. Street Photography: Life in motion, candid human moments. Product & Food Photography: Clean, styled shots for commercial work. Documentary/Photojournalism: Telling real stories with impact. Each style requires a unique eye—and offers its own creative rewards."
    },
  ]);
  const [menu, setMenu] = useState("All");

  const fetchBlogData = async () => {
    try {
      const response = await axios.get(`/api/blog`, { params: { id } }); // ✅ relative URL

      if (response.data && Object.keys(response.data).length > 0) {
        setData(response.data);
      } else {
        const fallback = blogs.find((b) => String(b._id) === String(id)); // ✅ string match
        setData(fallback || null);
      }
    } catch (error) {
      console.error("Error fetching blog, using static data:", error);
      const fallback = blogs.find((b) => String(b._id) === String(id)); // ✅ string match
      setData(fallback || null);
    }
  };

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
  if (!id) return; // wait until id is ready
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
