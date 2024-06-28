import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white">
      <div className=" mx-auto px-6 py-3 flex justify-between items-center">
        <a className="text-3xl font-bold text-red-500" href="#">
          witt.
        </a>
        <div className="hidden md:flex space-x-7 text-gray-800 font-medium">
          <Link href="#" className="hover:text-red-500">
            Home
          </Link>
          <Link href="#" className="hover:text-red-500">
            Pricing
          </Link>
          <Link href="#" className="hover:text-red-500">
            Blog
          </Link>
          <Link href="#" className="hover:text-red-500">
            FAQs
          </Link>
          <Link href="#" className="hover:text-red-500">
            About Us
          </Link>
        </div>
        <button className="block md:invisible"></button>
      </div>
    </nav>
  );
};

export default Navbar;
