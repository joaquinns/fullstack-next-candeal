import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const pizzaCategory = await prisma.category.create({
    data: { name: "Pizzas" },
  });
  const bebidasCategory = await prisma.category.create({
    data: { name: "Bebidas" },
  });
  const panaderiaCategory = await prisma.category.create({
    data: { name: "Panaderia" },
  });
  const postreCategory = await prisma.category.create({
    data: { name: "Postres" },
  });

  const subcategories = await prisma.subcategory.createMany({
    data: [
      {
        name: "Pan dulce especial",
        categoryId: panaderiaCategory.id,
      },
      {
        name: "Pan salado especial",
        categoryId: panaderiaCategory.id,
      },
      {
        name: "Pastel de hojaldre",
        categoryId: panaderiaCategory.id,
      },
      {
        name: "Cafes",
        categoryId: bebidasCategory.id,
      },
    ],
  });

  const products = await prisma.product.createMany({
    data: [
      {
        name: "Pizza Margarita",
        price: 8.0,
        imageUrl: "#",
        description:
          "Pizza Margarita es una pizza de calidad, con una variedad de ingredientes y una gran calidad. Es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: pizzaCategory.id,
        subcategoryId: null,
      },
      {
        name: "Coctel de frutas",
        price: 3.0,
        imageUrl: "#",
        description:
          "Pizza Pepperoni es una pizza de calidad, con una variedad de ingredientes y una gran calidad. Es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: bebidasCategory.id,
        subcategoryId: null,
      },
      {
        name: "Pan de Jamon",
        price: 10.0,
        imageUrl: "#",
        description:
          "Pan de Jamon es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: panaderiaCategory.id,
        subcategoryId: null,
      },
      {
        name: "Pan de Jamon",
        price: 10.0,
        imageUrl: "#",
        description:
          "Pan de Jamon es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: panaderiaCategory.id,
        subcategoryId: 2,
      },
      {
        name: "Pan de Queso cabron",
        price: 10.0,
        imageUrl: "#",
        description: "Pan de Queso cabron",
        categoryId: panaderiaCategory.id,
        subcategoryId: 2,
      },
    ],
  });

  console.log("Seeded successfully", {
    categories: [
      pizzaCategory,
      bebidasCategory,
      panaderiaCategory,
      postreCategory,
    ],
    subcategories,
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
