"use client";

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Modal } from "./Modal";

export const CartButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { cart, removeFromCart, updateQuantity, totalPrice } = useCart();

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const cssAnimationCart =
    isVisible || cart.length > 0
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10";

  return (
    <>
      <button
        className={`fixed bottom-8 right-4 xl:right-16 z-50 p-4 bg-white rounded-full shadow-md text-black border border-black ease-in-out transition-all duration-300 hover:scale-110 ${cssAnimationCart}`}
        onClick={handleToggleModal}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "currentColor", transform: "msFilter" }}
        >
          <path d="M21.822 7.431A1 1 0 0 0 21 7H7.333L6.179 4.23A1.994 1.994 0 0 0 4.333 3H2v2h2.333l4.744 11.385A1 1 0 0 0 10 17h8c.417 0 .79-.259.937-.648l3-8a1 1 0 0 0-.115-.921zM17.307 15h-6.64l-2.5-6h11.39l-2.25 6z"></path>
          <circle cx="10.5" cy="19.5" r="1.5"></circle>
          <circle cx="17.5" cy="19.5" r="1.5"></circle>
        </svg>
      </button>
      <Modal onClose={handleToggleModal} isModalOpen={isModalOpen}>
        <h2 className="text-2xl">Tu Carrito</h2>
        {cart.length < 1 ? (
          <p className="text-xl text-gray-500 text-center py-8">
            Tu carrito está vacío
          </p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between py-4 border-b"
            >
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-500">
                  ${item.price.toFixed(2)} c/u
                </p>
              </div>
              <div className="flex items-center">
                <button
                  className="h-8 w-8 rounded-full hover:bg-slate-200 border"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  -
                </button>
                <span className="mx-2 w-8 text-center">{item.quantity}</span>
                <button
                  className="h-8 w-8 rounded-full hover:bg-slate-200 border"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
                <button
                  className="h-8 w-8 ml-2 text-center"
                  onClick={() => removeFromCart(item.id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    style={{ fill: "currentColor", transform: "msFilter" }}
                  >
                    <path d="M5 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8h2V6h-4V4a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v2H3v2h2zM9 4h6v2H9zM8 8h9v12H7V8z"></path>
                    <path d="M9 10h2v8H9zm4 0h2v8h-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))
        )}
        {cart.length > 0 && (
          <div className="mt-4 space-y-4">
            <div className="flex justify-between items-center font-semibold">
              <span>Total:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="w-full">Crear pedido!</button>
          </div>
        )}
      </Modal>
    </>
  );
};
