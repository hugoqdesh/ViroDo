import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-56 px-8 py-8 text-white flex flex-col items-center md:flex-row md:justify-between max-w-6xl mx-auto">
      <div className="mb-8 md:mb-0 md:w-1/3">
        <p className="text-2xl font-semibold">Strkzone</p>
        <p className="text-gray-400">Martial arts for everyone</p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:gap-10 sm:grid-cols-3 md:w-1/3 md:justify-center">
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-tighter font-medium uppercase">
            Community
          </p>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-200 duration-200 text-sm"
          >
            Discord
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-200 duration-200 text-sm"
          >
            TikTok
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-200 duration-200 text-sm"
          >
            Email
          </Link>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm tracking-tighter font-medium uppercase">
            Legal
          </p>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-200 duration-200 text-sm"
          >
            Terms
          </Link>
          <Link
            href="/"
            className="text-gray-400 hover:text-gray-200 duration-200 text-sm"
          >
            Privacy
          </Link>
        </div>
      </div>

      <div className="mt-8 md:mt-0 text-gray-400 text-sm md:w-1/3 md:text-right">
        <p>&copy; 2024 Strkzone. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
