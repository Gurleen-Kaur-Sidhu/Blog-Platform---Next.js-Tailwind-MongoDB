"use-client";

import Image from "next/image";
import Link from "next/link";
// import { useTheme } from "next-themes"

const Header = () => {

  // const { setTheme } = useTheme()
  return (
    <div className="lg:py-5 md:py-5 sm:py-10 py-10 px-5 lg:px-10 header">
      <div className="flex justify-between items-center">
        <Link href="/">
          <div className="flex justify-between items-center hidden md:flex">
            <Image
              src="/blogger.png"
              width={40}
              height={40}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
            <h1 className="font-bold text-3xl ms-2">Blog</h1>
          </div>
        </Link>

        <nav className="w-max py-2.5 px-8 border border-solid border-dark rounded-full font-medium capitalize flex items-center fixed top-6 right-1/2 translate-x-1/2 bg-white backdrop-blur-sm z-10">
          <Link href="/" className="mx-3">
            Home
          </Link>
          <Link href="/AllBlog" className="mx-2">
            All Blogs
          </Link>
          {/* <Link href="/" className="mx-3">
            Contact
          </Link> */}
          <button className="ml-5">
            <Image
              src="/moon.png"
              width={22}
              height={22}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
          </button>

        </nav>

        <div className="hidden md:flex">
          <a href="https://www.linkedin.com" className="mr-4 inline-block">
            <Image
              src="/linkedin.png"
              width={22}
              height={22}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
          </a>
          <a href="https://www.instagram.com" className="mr-4 inline-block">
            <Image
              src="/instagram.png"
              width={20}
              height={20}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
          </a>
          <a href="https://www.facebook.com" className="mr-4 inline-block">
            <Image
              src="/facebook.png"
              width={20}
              height={20}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
          </a>
          <a href="https://www.twitter.com" className="mr-4 inline-block">
            <Image
              src="/logos.png"
              width={20}
              height={20}
              alt=""
              className="w-[130px] sm:w-auto"
            ></Image>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
