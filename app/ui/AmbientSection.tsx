"use client";
import "intersection-observer";
import Image from "next/image";
import { useScroll } from "../hooks/useScroll";
import { SectionParagraph } from "./SectionParagraph";
import { Subtitle } from "./Subtitle";

export const AmbientSection = () => {
  const [sectionRef, visible] = useScroll({
    threshold: 0.4,
    rootMargin: "0px",
  });

  return (
    <section
      ref={sectionRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen h-full flex flex-col items-center justify-center my-auto"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full w-full mx-auto gap-8 lg:gap-0">
        <div className="flex-1 h-full flex items-start justify-center px-4 py-8 md:px-0 lg:py-0">
          <Image
            blurDataURL="/ambientecandeal.jpg"
            placeholder="blur"
            loading="lazy"
            width={600}
            height={400}
            src="/ambientecandeal.jpg"
            className={`h-[400px] md:h-[500px] w-[600px] lg:h-[600px] lg:w-full object-cover transform transition-all duration-1000 ease-in-out ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-full"
            }`}
            alt="imagen del ambiente de candeal"
          />
        </div>

        <div
          className={`flex-1 h-full flex items-end justify-center px-4 py-8 lg:px-0 lg:py-0`}
        >
          <div
            className={`min-h-full h-full w-full px-4 lg:px-6 py-4 ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-full"
            } transition-all duration-1000 ease-in-out`}
          >
            <Subtitle>Ambiente</Subtitle>
            <SectionParagraph>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              assumenda temporibus architecto quidem maxime illum accusantium
              sunt modi similique officiis.
            </SectionParagraph>
          </div>
        </div>
      </div>
    </section>
  );
};
