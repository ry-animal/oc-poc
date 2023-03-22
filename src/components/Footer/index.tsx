import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="container relative bottom-0 mx-auto mt-24 flex items-center justify-center p-3">
      <Link href="/" className="text-xl font-bold tracking-tight text-white">
        <span className="text-slate-700">Blank</span> Connect{" "}
        <span className="text-slate-700">2023</span>
      </Link>
    </footer>
  );
};

export default Footer;
