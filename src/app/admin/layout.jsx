'use client';
import { useState } from "react";
import Sidebar from "../components/AdminComponents/Sidebar";
import { ToastContainer } from 'react-toastify';

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-col sm:flex-row bg-gray-300">
        <ToastContainer />
        <div className="sm:hidden p-4 bg-gray-300 flex justify-between items-center">
          <h3 className="text-xl font-bold">ADMIN PANEL</h3>
          <button
            className="px-4 py-2 bg-black text-white rounded-md"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            {isSidebarOpen ? 'Close Menu' : 'Open Menu'}
          </button>
        </div>

        <Sidebar isOpen={isSidebarOpen} />
  
        <div className="flex flex-col w-full bg-gray-100">
          <div className="flex items-center justify-between w-full py-6 max-h-[100px] px-6 sm:px-20">
            <h3 className="text-2xl font-bold">Update your blog with a fresh post</h3>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
