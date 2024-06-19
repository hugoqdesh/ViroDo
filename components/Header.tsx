import React from "react";

const Header = () => {
  return (
    <header className="fixed w-full left-1/2 transform -translate-x-1/2 border-b border-neutral-200/10 px-4 py-2 bg-[#121212] z-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-lg group cursor-pointer">
              <span className="text-white group-hover:text-red-500 font-medium transition duration-300">
                Strk
              </span>
              <span className="text-red-500 group-hover:text-white font-medium transition duration-300">
                Zon
              </span>
            </h1>
          </div>

          <div className="flex gap-6 ">
            <button>Log in</button>
            <button className="font-semibold bg-white/10 px-4 py-2 rounded-lg hover:bg-white/5 transition duration-300">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
