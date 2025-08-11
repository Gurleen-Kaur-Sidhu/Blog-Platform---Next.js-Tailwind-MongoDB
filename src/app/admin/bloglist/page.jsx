"use client";

import React, { useState, useEffect } from 'react';
import BlogTable from '@/app/components/AdminComponents/BlogTable';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/blog');
      setBlogs(response.data.blogs);
    } catch (error) {
      console.error("Error fetching blogs:", error);
      toast.error("Failed to fetch blogs");
    }
  };

  const deleteBlog = async (mongoId) => {
    try {
      const response = await axios.delete('http://localhost:3000/api/blog', {
        params: { id: mongoId }
      });
      toast.success(response.data.msg || "Blog deleted successfully");
      fetchBlogs(); 
    } catch (error) {
      console.error("Error deleting blog:", error);
      toast.error("Failed to delete blog");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="flex flex-col h-screen"> 
      <ToastContainer />


      <div className="overflow-x-auto flex-1 px-5 sm:px-16">
        <table className="min-w-full text-sm text-gray-500 mb-5">
          <thead className="text-sm text-gray-700 text-left uppercase">
            <tr>
              <th scope="col" className="px-6 py-3">Blog Title</th>
              <th scope="col" className="px-6 py-3">Date</th>
              <th scope="col" className="px-6 py-3">Action</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((item, index) => (
              <BlogTable
                key={index}
                mongoId={item._id}
                title={item.title}
                date={item.date}
                deleteBlog={deleteBlog}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Page;
