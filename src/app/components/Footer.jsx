import Image from "next/image";

const Footer = () => {
  return (
    <div className="bg-black flex flex-col lg:flex-row lg:items-center items-start justify-between lg:px-10 lg:py-6 py-3 px-5  footer">
      <div className="flex items-center">
        <Image
          src="/blogger1.png"
          width={40}
          height={40}
          alt=""
          className="bg-white w-[130px] sm:w-auto"
        ></Image>
        <h1 className="font-bold text-3xl ms-2 text-white">Blog</h1>
      </div>
      <div className="w-max py-2.5 lg:px-8 font-medium">
        <h6 className="text-sm text-white">
          All rights reserved. Copyright @blog
        </h6>
      </div>
      <div>
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
  );
};

export default Footer;
