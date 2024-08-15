 jsx
  import React from 'react';

  const Inspiration = () => {
    return (
      <section className="text-center text-white bg-black py-20">
        <h2 className="text-4xl font-bold mb-4">Latest Inspiration</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {/* Inspiration placeholders */}
          <div className="bg-gray-700 p-6">Weekly Inspiration #18</div>
          <div className="bg-gray-700 p-6">Weekly Inspiration #17</div>
          <div className="bg-gray-700 p-6">Weekly Inspiration #16</div>
        </div>
      </section>
    );
  };

  export default Inspiration;
