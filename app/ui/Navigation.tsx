"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export const Navigation = ({
  totalPages,
  query,
}: {
  totalPages: number;
  query?: string;
}) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const categoryParam = params.get("category");
  const subcategoryParam = params.get("subcategory");

  return (
    <div className="flex justify-center gap-2 my-8">
      {Array.from({ length: totalPages }).map((_, i) => {
        const page = i + 1;
        const url = new URL("http://localhost:3000/menu");
        if (query) url.searchParams.append("q", query);
        if (categoryParam) url.searchParams.append("category", categoryParam);
        if (subcategoryParam)
          url.searchParams.append("subcategory", subcategoryParam);
        url.searchParams.append("page", page.toString());

        return (
          <Link
            href={url.toString()}
            key={i}
            className="bg-[#ead5c2] text-slate-950 font-bold py-2 px-4 rounded"
          >
            {page}
          </Link>
        );
      })}
    </div>
  );
};
