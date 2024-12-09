"use client";
import React, { useMemo, useState } from "react";
import { CategoryButton } from "./CategoryButton";
import { MenuItems } from "./MenuItems";
import { SearchBar } from "./SearchBar";

const categories = ["Pizzas", "Sandwiches", "Burgers", "Drinks", "Breads"];

const menuItems = {
  Pizzas: ["Margherita", "Pepperoni", "Vegetarian", "Hawaiian"],
  Sandwiches: ["Club", "BLT", "Grilled Cheese", "Tuna"],
  Burgers: ["Classic", "Cheeseburger", "Veggie", "Bacon Deluxe"],
  Drinks: ["Cola", "Lemonade", "Iced Tea", "Water"],
  Breads: ["Garlic Bread", "Focaccia", "Baguette", "Ciabatta"],
};

export function RestaurantMenu() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    if (!searchQuery) return null;

    const results: { [category: string]: string[] } = {};
    Object.entries(menuItems).forEach(([category, items]) => {
      const filteredCategoryItems = items.filter((item) =>
        item.toLowerCase().includes(searchQuery.toLowerCase())
      );
      if (filteredCategoryItems.length > 0) {
        results[category] = filteredCategoryItems;
      }
    });
    return Object.keys(results).length > 0 ? results : null;
  }, [searchQuery]);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setSelectedCategory(null);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {categories.map((category) => (
          <CategoryButton
            key={category}
            category={category}
            isSelected={selectedCategory === category}
            onClick={() => {
              setSelectedCategory(category);
              setSearchQuery("");
            }}
          />
        ))}
      </div>
      {filteredItems ? (
        Object.entries(filteredItems).map(([category, items]) => (
          <MenuItems key={category} category={category} items={items} />
        ))
      ) : selectedCategory ? (
        <MenuItems
          category={selectedCategory}
          items={menuItems[selectedCategory as keyof typeof menuItems]}
        />
      ) : null}
    </div>
  );
}
