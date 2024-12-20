"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface SubcategoryLinkProps {
  category: string;
  subcategory: string;
}

export const SubcategoryLink = ({
  category,
  subcategory,
}: SubcategoryLinkProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const categoryParam = params.get("subcategory");

  return (
    <Link
      href={`/menu?category=${category}&subcategory=${subcategory}`}
      className={`font-semibold py-2 px-4 rounded-full hover:bg-[#ead5c2] hover:text-slate-950 border border-slate-100 ${
        categoryParam === subcategory &&
        "bg-[#ead5c2] text-slate-950 border-transparent"
      }`}
    >
      {subcategory}
    </Link>
  );
};
