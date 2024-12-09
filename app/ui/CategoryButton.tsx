import React from "react";

interface CategoryButtonProps {
  category: string;
  isSelected: boolean;
  onClick: () => void;
}

export function CategoryButton({
  category,
  isSelected,
  onClick,
}: CategoryButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors ${
        isSelected
          ? "bg-primary text-primary-foreground"
          : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
      }`}
      onClick={onClick}
    >
      {category}
    </button>
  );
}
