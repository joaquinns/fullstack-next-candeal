/* eslint-disable @next/next/no-img-element */

interface CardProps {
  name?: string;
  imageURL?: string;
  price?: number;
  category?: string;
  description?: string;
  handleAddToCart?: () => void;
}

export const Card = ({
  name = "Example",
  imageURL = "/candeal1.jpg",
  price = 8,
  category = "Pizza",
  description = "lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, voluptatem.",
}: CardProps) => {
  return (
    <article className="relative h-[420px] rounded shadow-md shadow-white/10 bg-white text-gray-600 flex flex-col justify-between">
      <img
        src={imageURL}
        alt={"imagen de " + name}
        className="w-full h-[200px] object-cover"
      />
      <div className="flex flex-col">
        <div className="flex justify-between items-center px-4">
          <h3 className="text-xl font-bold text-slate-950">{name}</h3>
          <span className="p-2 bg-[#ead5c2] text-black font-semibold rounded-full text-sm px-4 py-1">
            {category ?? "pizza"}
          </span>
        </div>
        <p className="p-4 line-clamp-3 text-base">{description}</p>
      </div>
      <footer className="flex justify-between items-center py-2 px-4">
        <span className="text-xl font-bold text-slate-950">${price}</span>
        <button className="px-4 py-2 rounded font-semibold bg-[#ead5c2] text-slate-950 hover:bg-[#e4a468] transition-colors duration-200 ease-in-out ">
          Anadir al Carrito
        </button>
      </footer>
    </article>
  );
};
