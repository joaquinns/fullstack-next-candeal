import { Subtitle } from "./Subtitle";

export const Adress = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-8 w-full h-full min-h-screen px-4">
      <Subtitle>Donde encontrarnos?</Subtitle>
      <iframe
        className="rounded w-full md:w-[600px] h-[450px]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.061922034648!2d-71.45567498465272!3d10.41665686910992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e89c7be95fae849%3A0xd71b7ca313fa778b!2sCandeal!5e0!3m2!1ses!2sve!4v1734223713877!5m2!1ses!2sve"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
};
