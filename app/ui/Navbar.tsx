/* eslint-disable @next/next/no-img-element */
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prev) => !prev);
  };

  const [animateOpacity, setAnimateOpacity] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (toggleMenu) {
      // Activa la opacidad después de 500ms (duración de translate)
      timeout = setTimeout(() => setAnimateOpacity(true), 300);
    } else {
      // Desactiva la opacidad inmediatamente al cerrar
      setAnimateOpacity(false);
    }
    return () => clearTimeout(timeout);
  }, [toggleMenu]);

  return (
    <header className="fixed top-0 z-50 w-full">
      <nav
        className="fixed top-0 h-16 w-full backdrop-filter backdrop-blur-sm bg-slate-950/30"
        aria-label="Main Navigation"
      >
        <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-full">
          <Link href="/" className="py-2 font-bold text-2xl text-[#ead5c2]">
            <img
              src="/logocandeal.jpg"
              alt=""
              width="50"
              className="rounded-full"
            />
          </Link>

          <button
            className="block text-white"
            aria-label="Toggle Menu"
            aria-controls="nav-menu"
            onClick={handleToggleMenu}
          >
            {!toggleMenu ? (
              // open button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                style={{ fill: "currentColor" }}
              >
                <path d="M4 11h12v2H4zm0-5h16v2H4zm0 12h7.235v-2H4z"></path>
              </svg>
            ) : (
              // Close button
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="42"
                viewBox="0 0 24 24"
                style={{ fill: "currentColor" }}
              >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
              </svg>
            )}
          </button>
        </div>
      </nav>

      {
        // Mobile Menu
        <div
          id="mobile-menu"
          className={`fixed top-16 left-0 bottom-0 w-full bg-black/50  transform transition-transform duration-500 ease-in-out z-50 ${
            toggleMenu ? "translate-x-0" : "translate-x-[-100%]"
          }`}
          aria-hidden={!toggleMenu}
          onClick={(e) => {
            e.stopPropagation();
            setToggleMenu(false);
          }}
        >
          <div
            className={`relative bg-zinc-950 h-full w-full md:w-[70%] lg:w-[40%] mr-auto shadow-sm transition all duration-300 ease-in-out ${
              animateOpacity
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-[20%]"
            }`}
          >
            <ul
              style={{
                backgroundImage: "url('/candealmenu.avif')",
                backgroundSize: "cover",
                backgroundPosition: "center 23%",
              }}
              className="flex flex-col justify-center items-center text-center w-full h-full pt-40 lg:pt-32 px-4 gap-1"
            >
              <li className="w-full">
                <Link
                  href="/menu"
                  className="font-bold bg-black text-slate-50 hover:bg-[#ead5c2] hover:text-black hover:border hover:border-black transition-all ease-in-out text-lg w-full h-full block py-4 rounded border border-black"
                >
                  Menu
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/"
                  className="font-bold bg-black text-slate-50 hover:bg-[#ead5c2] hover:text-black hover:border hover:border-black transition-all ease-in-out text-lg w-full h-full block py-4 rounded border border-black"
                >
                  Inicio
                </Link>
              </li>
            </ul>
          </div>
        </div>
      }
    </header>
  );
};
