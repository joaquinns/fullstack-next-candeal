import { CardSkeleton } from "./skeletons/CardSkeleton";

export const GridSearchResultsSkeleton = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "1rem",
      }}
    >
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
};
