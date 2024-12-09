/* eslint-disable @next/next/no-img-element */
export const HeroBackground = () => {
  return (
    <div className="lg:max-h-[1080px] grid grid-rows-6 sm:grid-rows-4 grid-cols-4 lg:grid-rows-6 lg:grid-cols-10 items-center justify-center gap-4 absolute left-0 right-0 bottom-0 top-0">
      <div className="absolute inset-0 bg-slate-950 w-full h-full z-10 opacity-50"></div>
      <img
        className="lg:row-start-3 lg:row-end-4 lg:col-star-3 lg:col-end-4 object-cover max-h-full w-full hidden lg:block"
        src="/candeal1.jpg"
        alt="Candeal imagen hero 1"
      />
      <img
        className="row-start-2 row-end-4 col-start-1 col-end-4 sm:row-start-1 sm:row-end-4 sm:col-start-1 sm:col-end-3 lg:row-start-2 lg:row-end-4 lg:col-start-4 lg:col-end-6 object-cover max-h-full w-full"
        src="/candeal2.jpg"
        alt="Candeal imagen hero 1"
      />
      <img
        className="row-start-4 row-end-6 col-start-2 col-end-6 sm:row-start-2 sm:row-end-5 sm:col-start-3 sm:col-end-5 lg:row-start-2 lg:row-end-6 lg:col-start-6 lg:col-end-9 object-cover max-h-full w-full"
        src="/candeal2.jpg"
        alt="Candeal imagen hero 1"
      />
    </div>
  );
};
