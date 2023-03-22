import React from "react";

interface CardProps {
  title?: string;
  variant?: string;
  children?: React.ReactNode;
}

const Card = ({ title, children, variant }: CardProps) => {
  return (
    <section
      className={`container rounded-sm p-2 shadow-2xl outline outline-slate-500/50 ${
        !!variant ? "h-64 w-96" : "h-32 w-48"
      }`}
    >
      <h1 className="font-bold tracking-tight text-white">
        {title?.toUpperCase()}
      </h1>
      <div>{children}</div>
    </section>
  );
};

export default Card;
