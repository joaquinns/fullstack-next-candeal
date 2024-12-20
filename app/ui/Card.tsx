"use client";

import { useEffect, useRef, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useCart } from "../context/CartContext";

/* eslint-disable @next/next/no-img-element */

interface CardProps {
  id: string;
  name?: string;
  imageURL?: string;
  price?: number;
  category?: string;
  description?: string;
}

export const Card = ({
  id,
  name = "Example",
  imageURL = "/candeal1.jpg",
  price = 8,
  category = "Pizzas",
  description = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem.",
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showExpandButton, setShowExpandButton] = useState(false);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const { addToCart } = useCart();

  const notify = (name: string) =>
    toast(`Se ha añadido: ${name} al carrito`, {
      icon: "✅",
      className: "font-semibold text-slate-950 text-sm shadow-md",
    });

  const handleAddToCart = () => {
    addToCart({ id, name, price, quantity: 1 });
    notify(name);
  };

  // Detecta si el contenido excede 3 líneas
  useEffect(() => {
    const element = descriptionRef.current;
    if (element) {
      const lineHeight = parseFloat(getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 3; // Altura para 3 líneas
      if (element.scrollHeight > maxHeight) {
        setShowExpandButton(true); // Mostrar "Ver más" si hay más de 3 líneas
      }
    }
  }, []);

  return (
    <>
      <article className="relative min-h-[420px] rounded lg:shadow-md shadow-white/10 bg-white text-gray-600 flex flex-col justify-between overflow-hidden">
        <img
          src={imageURL}
          alt={"imagen de " + name}
          className="w-full h-[200px] object-cover"
        />

        {/* Contenido */}
        <div className="flex flex-col flex-1 justify-between">
          {/* Título y Categoría */}
          <div className="flex justify-between items-center px-4 pt-4">
            <h3 className="text-xl font-bold text-slate-950">{name}</h3>
            <span className="p-2 bg-[#ead5c2] text-black font-semibold rounded-full text-sm px-4 py-1">
              {category ?? "pizza"}
            </span>
          </div>

          <div className="p-4 flex-1 relative">
            <p
              ref={descriptionRef}
              className={`text-base ${
                !isExpanded ? "line-clamp-3" : "line-clamp-none"
              }`}
            >
              {description}
            </p>
            {showExpandButton && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-sm text-primary hover:underline mt-2"
              >
                {isExpanded ? "Ver menos" : "Ver más"}
              </button>
            )}
          </div>
        </div>

        <footer className="flex justify-between items-center py-2 px-4">
          <span className="text-xl font-bold text-slate-950">${price}</span>
          <button
            onClick={handleAddToCart}
            className="px-4 py-2 rounded font-semibold bg-[#ead5c2] text-slate-950 hover:bg-[#e4a468] transition-colors duration-200 ease-in-out"
          >
            Añadir al Carrito
          </button>
        </footer>
      </article>
      <Toaster />
    </>
  );
};
