"use server";

import { prisma } from "@/lib/prisma";
import { writeFile } from "fs/promises";
import path from "path";

export const createProductAction = async (formData: FormData) => {
  const name = formData.get("name") as string;
  const description = formData.get("description") as string;
  const price = parseFloat(formData.get("price") as string);
  const image = formData.get("image") as File;

  // creat validaciones con zod esto solo es un mock
  if (!name || !description || !price || !image) {
    return;
  }

  try {
    const bytes = await image.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Salva las imagenes en el public folder
    const filename = Date.now() + "-" + image.name.replace(/\s/g, "-");
    const filepath = path.join(
      process.cwd(),
      "../../public",
      "uploads",
      filename
    );
    await writeFile(filepath, buffer);

    // Save the product to the database (this is a mock implementation)
    // Recordar que tengo que validar la category y el subcategory debido a la relacion one to many
    const createdProduct = await prisma.product.create({
      data: {
        name,
        description,
        price,
        imageUrl: `/uploads/${filename}`,
        categoryId: 1,
      },
    });

    // Here you would typically save the product to your database
    console.log("Product saved:", createdProduct);

    return { message: "Product created successfully", createdProduct };
  } catch (error) {
    console.error("Error creating product:", error);
    return { error: "Error creating product" };
  }
};
