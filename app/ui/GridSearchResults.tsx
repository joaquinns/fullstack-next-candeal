/* eslint-disable @next/next/no-img-element */
import { Product } from "@prisma/client";
import { Card } from "./Card";
import { Navigation } from "./Navigation";

interface GridSearchResultsProps {
  query?: string;
  page?: string;
  pageLimit?: string;
  category?: string;
}

export const GridSearchResults = async ({
  query,
  page = "1",
  category = "",
  pageLimit = "",
}: GridSearchResultsProps) => {
  const res = await fetch(
    `http://localhost:3000/api/menu?${
      query ? `q=${query}&` : ""
    }category=${category}&page=${page}&limit=${pageLimit}`
  );
  const {
    products,
    totalPages,
    currentPage,
    limit,
    currentPageUrl,
    prevPageUrl,
    nextPageUrl,
  }: {
    products: Product[];
    totalPages: number;
    currentPage: number;
    limit: number;
    currentPageUrl: string;
    prevPageUrl: string | null;
    nextPageUrl: string | null;
  } = await res.json();

  console.log({
    category,
    products,
    totalPages,
    currentPage,
    limit,
    currentPageUrl,
    prevPageUrl,
    nextPageUrl,
  });

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "1rem",
        }}
        className=""
      >
        {products.map((product: Product) => (
          <Card
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      <Navigation query={query} totalPages={totalPages} />
    </>
  );
};
