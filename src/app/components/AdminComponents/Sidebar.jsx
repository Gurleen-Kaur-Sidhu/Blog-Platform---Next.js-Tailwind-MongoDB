'use client';
import Link from "next/link";

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } sm:block bg-gray-300 w-full sm:w-70 h-full px-6 py-8`}
    >
      <h3 className="hidden sm:block text-xl font-bold text-center mb-10">ADMIN PANEL</h3>

      <Link href="/admin/addproduct" className="block text-center font-medium px-3 py-3 bg-black rounded-lg text-lg text-white mb-4">
        Add blogs
      </Link>
      <Link href="/admin/bloglist" className="block text-center font-medium px-3 py-3 bg-black rounded-lg text-lg text-white">
        Blog list
      </Link>
    </div>
  );
};

export default Sidebar;
