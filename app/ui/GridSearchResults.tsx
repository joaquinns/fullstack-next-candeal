/* eslint-disable @next/next/no-img-element */
import { Product } from "@prisma/client";
import { Card } from "./Card";
import { Navigation } from "./Navigation";

interface GridSearchResultsProps {
  query?: string;
  page?: string;
  pageLimit?: string;
  category?: string;
  subcategory?: string;
}

export const GridSearchResults = async ({
  query,
  page = "1",
  category = "",
  pageLimit = "",
  subcategory = "",
}: GridSearchResultsProps) => {
  const url = new URL(`${process.env.NEXT_PUBLIC_BASE_URL}/api/menu`);
  if (query) url.searchParams.append("q", query);
  url.searchParams.append("category", category);
  if (subcategory) url.searchParams.append("subcategory", subcategory);
  url.searchParams.append("page", page);
  url.searchParams.append("limit", pageLimit);

  const res = await fetch(url.toString());
  const {
    products,
    totalPages,
  }: {
    products: Product[];
    totalPages: number;
    currentPage: number;
    limit: number;
    currentPageUrl: string;
    prevPageUrl: string | null;
    nextPageUrl: string | null;
  } = await res.json();

  return (
    <>
      {products.length < 1 ? (
        <h2 className="text-2xl font-bold py-2">No hay productos</h2>
      ) : (
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
                imageURL={
                  product.imageUrl !== "#" ? product.imageUrl : undefined
                }
                id={product.id}
                key={product.id}
                name={product.name}
                price={product.price}
                description={product.description}
              />
            ))}
          </div>
          <Navigation query={query} totalPages={totalPages} />
        </>
      )}
    </>
  );
};
