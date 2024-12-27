"use client";
import React from "react";
import { useScroll } from "../hooks/useScroll";
import { SectionParagraph } from "./SectionParagraph";
import { Subtitle } from "./Subtitle";

export const ExperienceSection = () => {
  const [experienceRef, isVisible] = useScroll({
    threshold: 0.3,
    rootMargin: "0px",
  });

  const baseClassesForAnimations = "transition-all duration-1000 ease-in-out";

  return (
    <section
      ref={experienceRef as React.RefObject<HTMLDivElement>}
      className="min-h-screen h-full"
    >
      <div className="flex justify-center items-center min-h-screen h-full w-full mx-auto flex-col lg:flex-row gap-8 lg:gap-0">
        <div
          className={`w-full h-full px-4 md:px-6 flex flex-col items-start justify-center gap-8 ${baseClassesForAnimations} ${
            isVisible
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-full"
          }`}
        >
          <Subtitle>Mas que un lugar, una experiencia</Subtitle>
          <SectionParagraph tailwindClass="text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            officia adipisci similique suscipit expedita veniam doloribus
            dolorum eligendi dolores itaque!
          </SectionParagraph>
        </div>
        <div className="flex w-full h-full justify-center items-center">
          <video
            className={
              baseClassesForAnimations +
              ` h-auto w-[300px] rounded ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-full"
              }`
            }
            src="/experience.mp4"
            autoPlay
            controls
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};
