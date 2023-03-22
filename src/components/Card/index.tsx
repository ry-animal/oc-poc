import Link from "next/link";
import React from "react";

interface CardProps {
  title?: string;
  variant?: string;
  href?: string;
  children?: React.ReactNode;
}

const Card = ({ title, children, variant, href }: CardProps) => (
  <Link
    href={href || ""}
    className={href ? "cursor-pointer" : "cursor-default"}
  >
    <section
      className={`translate container h-48 w-64 rounded-sm bg-slate-400 p-2 shadow-2xl outline outline-slate-500/50 transition duration-300 hover:translate-y-1 ${
        !!variant ? "h-64 w-80 sm:w-96" : "xs:h-36 xs:w-64 sm:h-32 sm:w-48"
      }`}
    >
      <h1 className="font-bold tracking-tight text-white">
        {title?.toUpperCase()}
      </h1>
      <div className="flex items-center justify-center">{children}</div>
    </section>
  </Link>
);

export default Card;
