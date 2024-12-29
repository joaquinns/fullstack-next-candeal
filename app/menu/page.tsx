import { Suspense } from "react";
import { Card } from "../ui/Card";
import { GridSearchResults } from "../ui/GridSearchResults";
import { GridSearchResultsSkeleton } from "../ui/GridSearchResultsSkeleton";
import { RestaurantMenu } from "../ui/RestaurantMenu";
import { SubcategoriesFilters } from "../ui/SubcategoriesFilters";

export default async function Menu({
  searchParams,
}: {
  searchParams: Promise<{
    q?: string;
    page?: string;
    category?: string;
    subcategory?: string;
    limit?: string;
  }>;
}) {
  const params = await searchParams;
  const { q, page, category, limit, subcategory } = params;

  return (
    <main className="relative min-h-screen mx-auto pt-16 max-w-6xl px-4 xl:px-0">
      <RestaurantMenu />
      <section className="mx-auto">
        <div className="flex flex-col gap-4 mt-4">
          {q || category ? (
            <>
              {category && <SubcategoriesFilters category={category} />}
              <h2 className="text-3xl font-bold py-2">Nuestros productos</h2>
              <Suspense fallback={<GridSearchResultsSkeleton />}>
                <GridSearchResults
                  subcategory={subcategory}
                  query={q}
                  page={page}
                  category={category}
                  pageLimit={limit}
                />
              </Suspense>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold">Los mas Pedidos</h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                  gap: "1rem",
                  margin: "2rem 0",
                }}
              >
                {
                  // crear componente para mas vendidos?
                }
                <Card id="1" />
                <Card id="2" />
                <Card id="3" />
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}
