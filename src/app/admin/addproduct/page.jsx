// "use client";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import React, { useState } from "react";
// import Image from "next/image";
// import axios from "axios";
// import { redirect } from 'next/navigation'
// import { useRouter } from 'next/navigation';
// const Page = () => {
//   const router = useRouter();
//   const [image, setImage] = useState(null);
//   const [data, setData] = useState({
//     title: "",
//     description: "",
//     category: "Wellness",
//     article: "",
//   });

//   const onChangeHandler = (event) => {
//     const { name, value } = event.target;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("description", data.description);
//     formData.append("article", data.article);
//     formData.append("category", data.category);
//     formData.append("image", image);

//     try {
//       const response = await axios.post("/api/blog", formData);

//       if (response.data.success) {
//         toast.success(response.data.message || "Blog submitted successfully!");
//         setImage(null);

//         setData({
//           title: "",
//           description: "",
//           category: "Wellness",
//           article: "",
//         });
//         router.push('/');

//       } else {
//         toast.error("Something went wrong. Please try again.");
//       }
//       console.log("Response is:", response.data);
//     } catch (err) {
//       console.error(err);
//       toast.error("Error submitting blog. Try again.");
//     }
//   };

//   return (
//     <>
//       <ToastContainer position="top-right" autoClose={3000} />
//       <form onSubmit={onSubmitHandler} className="pt-6 lg:px-20 px-5 sm:pl-16">

//         <label htmlFor="image" className="text-lg font-semibold flex items-center">Upload an Image
//           <Image
//             className="ml-3"
//             src={
//               image ? URL.createObjectURL(image) : "/image.png"
//             }
//             width={30}
//             height={30}
//             alt="Blog thumbnail"
//           />
//         </label>

//         <input
//           onChange={(e) => setImage(e.target.files[0])}
//           type="file"
//           id="image"
//           hidden
//           required

//         />

//         <p className="text-lg font-semibold mt-4">Blog Category</p>
//         <select
//           name="category"
//           onChange={onChangeHandler}
//           className="w-40 mt-4 px-4 py-3 border border-black rounded-lg "
//           value={data.category}
//         >
//           <option value="Wellness">Wellness</option>
//           <option value="Technology">Technology</option>
//           <option value="Lifestyle">Lifestyle</option>
//         </select>

//         <p className="text-lg font-semibold mt-4">Blog Title</p>
//         <input
//           name="title"
//           onChange={onChangeHandler}
//           className="w-full mt-4 px-4 py-2 border rounded-lg"
//           type="text"
//           placeholder="Type title here"
//           value={data.title}
//           required
//         />

//         <p className="text-lg font-semibold mt-4">Blog Description</p>
//         <textarea
//           name="description"
//           onChange={onChangeHandler}
//           className="w-full mt-4 px-4 py-2 border  rounded-lg"
//           placeholder="Type description here"
//           rows={2}
//           value={data.description}
//           required
//         />

//         <p className="text-lg font-semibold mt-4">Blog Article</p>
//         <textarea
//           name="article"
//           onChange={onChangeHandler}
//           className="w-full mt-4 px-4 py-2 border  rounded-lg"
//           placeholder="Type full article here"
//           rows={6}
//           value={data.article}
//           required
//         />

//         <button
//           type="submit"
//           className="rounded-lg mt-8 mb-7 w-40 h-12 bg-black text-white"
//         >
//           Add Blog
//         </button>
//       </form>
//     </>
//   );
// };

// export default Page;




"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import { redirect } from "next/navigation";
import { useRouter } from "next/navigation";
import Placeholder from "@tiptap/extension-placeholder";
import Underline from "@tiptap/extension-underline";
const Page = () => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Placeholder.configure({
        placeholder: "Type your article here...",
      }),
    ],
    content: "",
    onUpdate({ editor }) {
      setData((prev) => ({
        ...prev,
        article: editor.getHTML(),
      }));
    },
  });
  const [isCustomCategory, setIsCustomCategory] = useState(false);
  const router = useRouter();
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    title: "",
    description: "",
    category: "Wellness",
    article: "",
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("article", data.article);
    formData.append("category", data.category);
    formData.append("image", image);

    try {
      const response = await axios.post("/api/blog", formData);

      if (response.data.success) {
        toast.success(response.data.message || "Blog submitted successfully!");
        setImage(null);

        setData({
          title: "",
          description: "",
          category: "Wellness",
          article: "",
        });
        editor?.commands.clearContent();
        // router.push("/");
      } else {
        toast.error("Something went wrong. Please try again.");
      }
      console.log("Response is:", response.data);
    } catch (err) {
      console.error(err);
      toast.error("Error submitting blog. Try again.");
    }

    if (editor) {
      editor.commands.clearContent();
    }
  };

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      <form onSubmit={onSubmitHandler} className="pt-6 lg:px-20 px-5 sm:pl-16">
        <label
          htmlFor="image"
          className="text-lg font-semibold flex items-center"
        >
          Upload an Image
          <Image
            className="ml-3"
            src={image ? URL.createObjectURL(image) : "/image.png"}
            width={30}
            height={30}
            alt="Blog thumbnail"
          />
        </label>

        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />

        <p className="text-lg font-semibold mt-4">Blog Category</p>
        <select
          name="category"
          onChange={(e) => {
            if (e.target.value === "Custom") {
              setIsCustomCategory(true);
              setData((prev) => ({ ...prev, category: "" }));
            } else {
              setIsCustomCategory(false);
              setData((prev) => ({ ...prev, category: e.target.value }));
            }
          }}
          className="w-40 mt-4 px-4 py-3 border border-black rounded-lg"
          value={isCustomCategory ? "Custom" : data.category}
        >
          <option value="Wellness">Wellness</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Custom">Custom</option>
        </select>

        {isCustomCategory && (
          <input
            type="text"
            name="category"
            placeholder="Enter custom category"
            onChange={onChangeHandler}
            value={data.category}
            className="w-full mt-4 px-4 py-2 border rounded-lg"
            required
          />
        )}

        <p className="text-lg font-semibold mt-4">Blog Title</p>
        <input
          name="title"
          onChange={onChangeHandler}
          className="w-full mt-4 px-4 py-2 border rounded-lg"
          type="text"
          placeholder="Type title here"
          value={data.title}
          required
        />

        <p className="text-lg font-semibold mt-4">Blog Description</p>
        <textarea
          name="description"
          onChange={onChangeHandler}
          className="w-full mt-4 px-4 py-2 border  rounded-lg"
          placeholder="Type description here"
          rows={2}
          value={data.description}
          required
        />

        <p className="text-lg font-semibold mt-4">Blog Article</p>
        {editor && (
          <div className="w-full mt-6">
            <div className="flex flex-wrap gap-2 mb-3">
              <button
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`px-3 py-1 rounded border ${
                  editor.isActive("bold")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Bold
              </button>
              <button
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`px-3 py-1 rounded border ${
                  editor.isActive("italic")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Italic
              </button>
              <button
                type="button"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`px-3 py-1 rounded border ${
                  editor.isActive("underline")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Underline
              </button>
              <button
                type="button"
                onClick={() => editor.chain().focus().setParagraph().run()}
                className={`px-3 py-1 rounded border ${
                  editor.isActive("paragraph")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                Paragraph
              </button>
              <button
                type="button"
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 1 }).run()
                }
                className={`px-3 py-1 rounded border ${
                  editor.isActive("heading", { level: 1 })
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                H1
              </button>
              <button
                type="button"
                onClick={() =>
                  editor.chain().focus().toggleHeading({ level: 2 }).run()
                }
                className={`px-3 py-1 rounded border ${
                  editor.isActive("heading", { level: 2 })
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                H2
              </button>
              <button
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`px-3 py-1 rounded border ${
                  editor.isActive("bulletList")
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                • List
              </button>
            </div>

            <div className="w-full mt-4 border  rounded-lg">
              <EditorContent editor={editor} />
            </div>
          </div>
        )}

        <button
          type="submit"
          className="rounded-lg mt-8 mb-7 w-40 h-12 bg-black text-white"
        >
          Add Blog
        </button>
      </form>
    </>
  );
};

export default Page;
