// src/components/Navigation.tsx
import React, { useState } from "react";

const Hamburger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="md:hidden">
      <button
        className="relative h-10 w-10 rounded-xl text-white focus:outline-none"
        onClick={() => setOpen(!open)}
      >
        <span className="sr-only">Open main menu</span>
        <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? "rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className={`absolute block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out ${
              open ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>
    </nav>
  );
};

export default Hamburger;
