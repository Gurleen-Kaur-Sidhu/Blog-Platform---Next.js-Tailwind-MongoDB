// pages/blog/index.jsx or components/BlogList.jsx
import BlogItem from './BlogItem'; // Adjust the path if needed
import { blog_data } from '../../../assets/assets';

const BlogList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blog_data.map((blog) => (
        <BlogItem
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          author={blog.author}
          date={blog.date}
          category={blog.category}
          article={blog.article}

        />
      ))}
    </div>
  );
};

export default BlogList;
