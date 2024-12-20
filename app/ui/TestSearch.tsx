import { Product } from "@prisma/client";
import { Suspense } from "react";
import { Card } from "./Card";
import { CardSkeleton } from "./skeletons/CardSkeleton";

export const TestSearch = ({ products }: { products: Product[] }) => {
  return (
    <Suspense fallback={<CardSkeleton />}>
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
    </Suspense>
  );
};
