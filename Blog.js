 jsx
  import React from 'react';

  const Blog = () => {
    return (
      <section className="text-center text-white bg-gray-900 py-20">
        <h2 className="text-4xl font-bold mb-4">Blog</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Blog post placeholders */}
          <div className="bg-gray-800 p-6">
            <h3 className="text-xl font-bold">Time is passing by</h3>
            <p className="mt-2">A preview of a potential blog post about time.</p>
          </div>
          <div className="bg-gray-800 p-6">
            <h3 className="text-xl font-bold">The pleasure of remote work</h3>
            <p className="mt-2">A preview of a potential blog post about remote work.</p>
          </div>
          <div className="bg-gray-800 p-6">
            <h3 className="text-xl font-bold">A year in our nomad life</h3>
            <p className="mt-2">A preview of a potential blog post about nomad life.</p>
          </div>
        </div>
      </section>
    );
  };

  export default Blog;
  

