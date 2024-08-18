// src/components/Header.js
import React from "react";

const Header = () => {
  return (
    <header className="bg-[#135D66] text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My City Directory</h1>
        <nav>
          <a href="/" className="px-4">
            Home
          </a>
          <a href="/listings" className="px-4">
            Listings
          </a>
          <a href="/about" className="px-4">
            About
          </a>
          <a href="/contact" className="px-4">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
