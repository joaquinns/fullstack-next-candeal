import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  tagHtml?: string;
  className?: string;
}

export const Container = ({ children, tagHtml, className }: ContainerProps) => {
  return tagHtml ? (
    React.createElement(
      tagHtml,
      { className: `max-w-6xl mx-auto px-4 lg:px-0 ${className}` },
      children
    )
  ) : (
    <div className={`max-w-6xl mx-auto px-4 lg:px-0 ${className}`}>
      {children}
    </div>
  );
};
