jsx
import React from 'react';
import About from './components/About';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Inspiration from './components/Inspiration';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <header className="text-white text-center py-10">
        <h1 className="text-5xl font-bold">Simplicity</h1>
        <p className="text-lg italic mt-2">is the ultimate sophistication</p>
      </header>
      <Inspiration />
      <About />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
