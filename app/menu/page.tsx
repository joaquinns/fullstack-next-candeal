/* eslint-disable @next/next/no-img-element */
import { Suspense } from "react";
import { Card } from "../ui/Card";
import { GridSearchResults } from "../ui/GridSearchResults";
import { GridSearchResultsSkeleton } from "../ui/GridSearchResultsSkeleton";
import { RestaurantMenu } from "../ui/RestaurantMenu";

export default async function Menu({
  searchParams,
}: {
  searchParams: {
    q?: string;
    page?: string;
    category?: string;
    limit?: string;
  };
}) {
  const { q, page, category, limit } = await searchParams;

  return (
    <main className="relative min-h-screen mx-auto pt-16 max-w-6xl px-4 xl:px-0">
      <RestaurantMenu />
      <section className="mx-auto">
        <div className="flex flex-col gap-4 mt-8">
          {q || category ? (
            <>
              <h2 className="text-xl font-bold">Nuestros productos</h2>
              <Suspense fallback={<GridSearchResultsSkeleton />}>
                <GridSearchResults
                  query={q}
                  page={page}
                  category={category}
                  pageLimit={limit}
                />
              </Suspense>
            </>
          ) : (
            <>
              <h2 className="text-xl font-bold">Los mas Pedidos</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                }}
              >
                {
                  // crear componente para mas vendidos?
                }
                <Card />
                <Card />
                <Card />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
