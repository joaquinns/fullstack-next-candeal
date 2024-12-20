import { prisma } from "@/lib/prisma";
import { SubcategoryLink } from "./SubcategoryLink";

interface SubcategoriesFiltersProps {
  category: string;
}

export const SubcategoriesFilters = async ({
  category,
}: SubcategoriesFiltersProps) => {
  const data = await prisma.category.findMany({
    where: {
      name: category,
    },
    select: {
      subcategories: true,
    },
  });

  const subcategories = data[0].subcategories;

  return (
    <div className="flex flex-col sm:flex-row gap-2 w-full items-center">
      {subcategories.map((subcategory, index) => (
        <SubcategoryLink
          key={index}
          category={category}
          subcategory={subcategory.name}
        />
      ))}
    </div>
  );
};
