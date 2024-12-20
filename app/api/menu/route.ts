import { prisma } from "@/lib/prisma";
import { Product } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const query = searchParams.get("q");
  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 20);
  const category = searchParams.get("category") || "";
  const subcategory = searchParams.get("subcategory") || "";
  const skip = (page - 1) * limit;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const filters: any = {};

  if (query) {
    filters.OR = [
      { name: { contains: query, mode: "insensitive" } },
      { description: { contains: query, mode: "insensitive" } },
    ];
  }

  if (category) {
    if (filters.OR) {
      filters.AND = [{ category: { name: { equals: category } } }];
    } else filters.category = { name: { equals: category } };
  }

  /*   if (subcategory) {
    if (filters.OR) {
      filters.AND = [{ subcategory: { name: { equals: subcategory } } }];
    } else filters.subcategory = { name: { equals: subcategory } };
  } */

  if (subcategory) {
    if (filters.AND) {
      filters.AND.push({ subcategory: { name: { equals: subcategory } } });
    } else if (filters.OR) {
      filters.AND = [{ subcategory: { name: { equals: subcategory } } }];
    } else {
      filters.subcategory = { name: { equals: subcategory } };
    }
  }

  const foundedProducts: Product[] = await prisma.product.findMany({
    where: filters,
    skip,
    take: limit,
    include: { category: true, subcategory: true },
  });

  // Obtén el total de productos para el cálculo del número total de páginas
  const totalProducts = await prisma.product.count({ where: filters });
  const totalPages = Math.ceil(totalProducts / limit);

  const currentPageUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/menu?q=${query}&page=${page}&limit=${limit}${
    category ? `&category=${category}` : ""
  }${subcategory ? `&subcategory=${subcategory}` : ""}`;

  const prevPageUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/menu?q=${query}&page=${page - 1}&limit=${limit}${
    category ? `&category=${category}` : ""
  }${subcategory ? `&subcategory=${subcategory}` : ""}`;

  const nextPageUrl = `${
    process.env.NEXT_PUBLIC_BASE_URL
  }/menu?q=${query}&page=${page + 1}&limit=${limit}${
    category ? `&category=${category}` : ""
  }${subcategory ? `&subcategory=${subcategory}` : ""}`;

  return NextResponse.json({
    products: foundedProducts,
    totalPages,
    limit,
    currentPage: page,
    currentPageUrl,
    prevPageUrl: page - 1 < 1 ? null : prevPageUrl,
    nextPageUrl: page + 1 > totalPages ? null : nextPageUrl,
  });
}
