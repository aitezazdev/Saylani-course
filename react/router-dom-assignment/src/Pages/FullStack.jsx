import React from "react";

const FullStack = ({fullStackBlogs}) => {

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Full Stack Blogs
      </h1>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fullStackBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow hover:shadow-2xl transition-shadow rounded-lg overflow-hidden"
          >
            <div className="h-40 bg-gradient-to-r from-green-300 to-lime-400 flex items-center justify-center">
              <h2 className="text-xl text-white font-semibold text-center px-4">
                {blog.title}
              </h2>
            </div>
            <div className="p-6">
              <p className="text-gray-600 mb-4">{blog.description}</p>
              <p className="text-green-600 font-semibold hover:underline cursor-pointer">READ MORE »</p>
            </div>
            <div className="border-t p-4 flex justify-between text-sm text-gray-500">
              <span>{blog.date}</span>
              <span>{blog.comments}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FullStack;
