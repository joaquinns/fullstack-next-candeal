export const Subtitle = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-4xl md:text-5xl lg:text-6xl text-center [text-shadow:_0_4px_4px_rgb(242_229_220_/_0.2)] w-full">
      {children}
    </h2>
  );
};
