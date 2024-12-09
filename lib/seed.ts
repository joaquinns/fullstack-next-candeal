import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const pizzaCategory = await prisma.category.create({
    data: { name: "Pizza" },
  });
  const bebidasCategory = await prisma.category.create({
    data: { name: "Bebidas" },
  });
  const panaderiaCategory = await prisma.category.create({
    data: { name: "Panaderia" },
  });

  const products = await prisma.product.createMany({
    data: [
      {
        name: "Pizza Margarita",
        price: 8.0,
        image: "#",
        description:
          "Pizza Margarita es una pizza de calidad, con una variedad de ingredientes y una gran calidad. Es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: pizzaCategory.id,
      },
      {
        name: "Coctel de frutas",
        price: 3.0,
        image: "#",
        description:
          "Pizza Pepperoni es una pizza de calidad, con una variedad de ingredientes y una gran calidad. Es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: bebidasCategory.id,
      },
      {
        name: "Pan de Jamon",
        price: 10.0,
        image: "#",
        description:
          "Pan de Jamon es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: panaderiaCategory.id,
      },
    ],
  });

  console.log("Seeded successfully", {
    categories: [pizzaCategory, bebidasCategory, panaderiaCategory],
    products,
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
