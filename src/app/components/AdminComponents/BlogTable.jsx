const BlogTable = ({ title, date, deleteBlog, mongoId }) => {
// const BlogTable = ({ title, date}) => {

    const BlogDate = new Date(date);
  
    return (
      <tr className="bg-white border-b hover:bg-gray-50 transition">
        <td className="px-6 py-4">{title || "No title"}</td>
  
        <td className="px-6 py-4">
          {isNaN(BlogDate.getTime()) ? "Invalid date" : BlogDate.toDateString()}
        </td>
  
        <td
          className="px-6 py-4 text-center cursor-pointer text-red-600 font-bold"
          onClick={() => deleteBlog(mongoId)}
          title="Delete blog"
        >
          ×
        </td>
      </tr>
    );
  };
  
  export default BlogTable;
  