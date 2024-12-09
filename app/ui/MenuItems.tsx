import React from "react";

interface MenuItemsProps {
  category: string;
  items: string[];
}

export function MenuItems({ category, items }: MenuItemsProps) {
  return (
    <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 mb-6">
      <h2 className="text-2xl font-semibold mb-4">{category}</h2>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-center">
            <span className="w-4 h-4 bg-primary rounded-full mr-3"></span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
