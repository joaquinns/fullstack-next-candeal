export const SectionParagraph = ({
  children,
  tailwindClass,
}: {
  children: React.ReactNode;
  tailwindClass?: string;
}) => {
  return (
    <p
      className={`${
        tailwindClass && tailwindClass
      } text-semibold text-xl md:text-2xl py-4`}
    >
      {children}
    </p>
  );
};
