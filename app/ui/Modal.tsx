"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: ReactNode;
  isModalOpen: boolean;
  onClose: () => void;
}

export const Modal = ({ children, isModalOpen, onClose }: ModalProps) => {
  const [isMounted, setIsMounted] = useState(false); // Controlar si el DOM está disponible,

  // Es necesario para que el modal se muestre después de que el componente se cargue en el cliente. Si no, da error
  useEffect(() => {
    setIsMounted(true); // Se monta después de que el componente se cargue en el cliente
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  const cssAnimationModal = isModalOpen ? "translate-x-0" : "translate-x-full";

  return createPortal(
    <div
      style={{ zIndex: 9999 }}
      className={`${cssAnimationModal} fixed top-0 bottom-0 inset-0 bg-black/70 transition-all ease-in-out duration-300`}
    >
      <div className="relative w-2/5 ml-auto h-full bg-white text-black p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded text-slate-950 bg-white border border-slate-950"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ fill: "currentcolor", transform: "msFilter" }}
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement
  );
};
