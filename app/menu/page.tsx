/* eslint-disable @next/next/no-img-element */
import { RestaurantMenu } from "../ui/RestaurantMenu";

export default async function Menu({
  searchParams,
}: {
  searchParams: { q?: string; page?: string };
}) {
  const { q, page } = await searchParams;
  console.log({ q, page });

  await fetch("http://localhost:3000/api/menu?q=" + q?.toString());

  return (
    <main className="relative min-h-screen mx-auto pt-16 max-w-6xl px-4 xl:px-0">
      <section className="mx-auto">
        <h2 className="text-center text-6xl">Los mas Pedidos</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "1rem",
          }}
          className=""
        >
          <article className="relative h-[420px] rounded shadow-md shadow-white/10 bg-white text-gray-600 flex flex-col justify-between">
            <img
              src="/candeal1.jpg"
              alt="Pizza"
              className="w-full h-[200px] object-cover"
            />
            <div className="flex flex-col">
              <div className="flex justify-between items-center px-4">
                <h3 className="text-xl font-bold text-slate-950">Margherita</h3>
                <span className="p-2 bg-[#ead5c2] text-black font-semibold rounded-full text-sm px-4 py-1">
                  pizza
                </span>
              </div>
              <p className="p-4 line-clamp-3 text-base">
                Pizza margarita mediana excelente para 4 personas. Con queso,
                pepperoni y los aditivos que gustes.
              </p>
            </div>
            <footer className="flex justify-between items-center py-2 px-4">
              <span className="text-xl font-bold text-slate-950">$10</span>
              <button className="px-4 py-2 rounded font-semibold bg-[#ead5c2] text-slate-950 hover:bg-[#e4a468] transition-colors duration-200 ease-in-out ">
                Anadir al Carrito
              </button>
            </footer>
          </article>
        </div>
      </section>
      <RestaurantMenu />
    </main>
  );
}
