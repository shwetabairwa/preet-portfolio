import React from 'react';

function Navbar() {
  return (
    <nav className="bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-xl font-bold text-yellow-500">Preet.</div>
          </div>
          <div>
            <a href="#hire me" className="text-gray-800 hover:text-gray-600">Hire Me</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
