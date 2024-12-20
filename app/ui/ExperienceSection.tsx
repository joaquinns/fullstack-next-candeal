"use client";
import React, { useEffect } from "react";
import { useScroll } from "../hooks/useScroll";
import { SectionParagraph } from "./SectionParagraph";
import { Subtitle } from "./Subtitle";

export const ExperienceSection = () => {
  const [videoRef, isIntersecting] = useScroll({
    threshold: 0.3,
    rootMargin: "20px",
  });

  const [experienceRef, experienceIsIntersecting] = useScroll({
    threshold: 0.6,
    rootMargin: "20px",
  });

  const animateVideo = `${
    isIntersecting
      ? "translate-x-0 opacity-100 scale-100"
      : "translate-x-full opacity-0 scale-20"
  } transition-all duration-1000 ease-in-out`;

  const animateExperience = `${
    experienceIsIntersecting
      ? "translate-y-0 opacity-100"
      : "translate-y-[-100%] opacity-0"
  } transition-all duration-1000 ease-in-out`;

  useEffect(() => {
    console.log(experienceIsIntersecting);
  });

  return (
    <section className="min-h-screen h-full">
      <div className="flex justify-center items-center min-h-screen h-full w-full mx-auto flex-col lg:flex-row gap-8 lg:gap-0">
        <div
          ref={experienceRef as React.RefObject<HTMLDivElement>}
          className={`w-full h-full px-4 md:px-6 flex flex-col items-start justify-center gap-8 ${animateExperience}`}
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
            ref={videoRef as React.RefObject<HTMLVideoElement>}
            className={animateVideo + " h-auto w-[300px] rounded"}
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
