"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { SearchBar } from "./SearchBar";

const CATEGORIES = [
  { id: 1, name: "Pizzas" },
  { id: 2, name: "Bebidas" },
  { id: 3, name: "Panaderia" },
];

export function RestaurantMenu() {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const categoryParam = params.get("category");

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Menu</h1>
      <SearchBar />
      <div className="flex flex-wrap justify-center gap-4 my-8">
        {CATEGORIES.map((category) => (
          <Link
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-colors hover:bg-[#ead5c2] hover:text-slate-950 ${
              categoryParam === category.name && "bg-[#ead5c2] text-slate-950"
            }`}
            href={`/menu?category=${category.name}`}
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
