import Link from "next/link";
import { IgIcon } from "../icons/igIcon";
import { WsIcon } from "../icons/wsIcon";
import { HeroBackground } from "./HeroBackground";

export const Hero = () => {
  return (
    <section className="relative min-h-screen h-full lg:max-h-[1080px] flex flex-col items-center justify-center  z-20">
      <HeroBackground />
      <div className="relative w-3/4 md:h-[200px] z-20">
        <h1 className="text-5xl text-center md:text-7xl w-full h-full flex items-center justify-center md:justify-around gap-2 md:gap-4 [text-shadow:_0_4px_4px_rgb(242_229_220_/_0.2)]">
          <span className="hidden lg:block md:self-end">Bienvenido a</span>
          <span className="hidden lg:block md:self-start">Candeal</span>
          <span className="lg:hidden">Bienvenido a Candeal</span>
        </h1>
      </div>
      <Link
        href="/menu"
        className="z-20 text-md my-4 lg:my-0 lg:absolute bottom-32 right-60 py-14 px-12 bg-[#f2e5dc] rounded-full text-slate-950 text-center font-semibold"
      >
        Menu
      </Link>
      <ul className="absolute left-0 lg:right-0 bottom-12 block lg:flex justify-start gap-2 z-20 max-w-6xl mx-auto lg:mx-auto px-4 lg:px-0">
        <li>
          <a
            target="_blank"
            href="#"
            className="bg-transparent p-2 hover:scale-125 transform transition-all ease-in-out duration-300 block"
          >
            <IgIcon width="42" height="42" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            href="#"
            className="bg-transparent p-2 text-green-500 hover:scale-125 transform transition-all ease-in-out duration-300 block"
          >
            <WsIcon width="42" height="42" />
          </a>
        </li>
      </ul>
    </section>
  );
};
