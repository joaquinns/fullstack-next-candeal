import { SectionParagraph } from "./SectionParagraph";
import { Subtitle } from "./Subtitle";

/* eslint-disable @next/next/no-img-element */
export const AmbientSection = () => {
  return (
    <section className="min-h-screen h-full flex flex-col items-center justify-center my-auto">
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center h-full w-full mx-auto gap-8 lg:gap-0">
        <div className="flex-1 h-full flex items-start justify-center px-4 py-8 md:px-0 lg:py-0">
          <img
            src="/ambientecandeal.jpg"
            className="h-[400px] md:h-[500px] w-[600px] lg:h-[600px] lg:w-full object-cover"
            alt="imagen del ambiente de candeal"
          />
        </div>
        <div className="flex-1 h-full flex items-end justify-center px-4 py-8 lg:px-0 lg:py-0">
          <div className="h-full w-full p-4">
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
