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
        name: "Pizza Pepperoni",
        price: 8.0,
        imageUrl: "/candeal2.jpg",
        description:
          "Pizza Pepperoni es una pizza de calidad, con una variedad de ingredientes y una gran calidad. Es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: pizzaCategory.id,
        subcategoryId: null,
      },
      {
        name: "Pizza 2 formaggio",
        price: 8.0,
        imageUrl: "/candeal1.jpg",
        description: "Pizza con 2 varieades de queso, mozzarella y parmesano",
        categoryId: pizzaCategory.id,
        subcategoryId: null,
      },
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
        subcategoryId: 4,
      },
      {
        name: "Capuccino",
        price: 3.0,
        imageUrl: "#",
        description: "Capuccino clasico italiaano",
        categoryId: bebidasCategory.id,
        subcategoryId: 4,
      },
      {
        name: "Pan de Jamon",
        price: 10.0,
        imageUrl: "/panjamon.jpg",
        description:
          "Pan de Jamon es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: panaderiaCategory.id,
        subcategoryId: 2,
      },
      {
        name: "Pan de Jamon",
        price: 10.0,
        imageUrl: "/panjamon.jpg",
        description:
          "Pan de Jamon es una opción perfecta para aquellos que buscan una pizza con un sabor y una textura diferentes a las tradicionales.",
        categoryId: panaderiaCategory.id,
        subcategoryId: 2,
      },
      {
        name: "Cachitos de jamon",
        price: 10.0,
        imageUrl: "/cachito.jpg",
        description:
          "Deleitas tus desayunos con un cachito de jamon con masa de hojaldre",
        categoryId: panaderiaCategory.id,
        subcategoryId: 3,
      },
      {
        name: "Cachitos de jamon",
        price: 10.0,
        imageUrl: "/cachito.jpg",
        description:
          "Deleitas tus desayunos con un cachito de jamon con masa de hojaldre",
        categoryId: panaderiaCategory.id,
        subcategoryId: 3,
      },
      {
        name: "Cachitos de jamon",
        price: 10.0,
        imageUrl: "/cachito.jpg",
        description:
          "Deleitas tus desayunos con un cachito de jamon con masa de hojaldre",
        categoryId: panaderiaCategory.id,
        subcategoryId: 3,
      },
      {
        name: "Pan de Queso",
        price: 10.0,
        imageUrl: "/pansalado.jpg",
        description: "Pan clasico de Queso",
        categoryId: panaderiaCategory.id,
        subcategoryId: 2,
      },
      {
        name: "Pan de Queso",
        price: 10.0,
        imageUrl: "/pansalado.jpg",
        description: "Pan clasico de Queso",
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
