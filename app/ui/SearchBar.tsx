"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    const categoryParam = params.get("category");
    if (categoryParam) {
      params.delete("category");
    }
    if (term) {
      params.set("q", term);
    } else {
      params.delete("q");
    }

    console.log(params.toString());
    replace(`${pathname}?${params.toString()}`);
  }, 500);

  return (
    <form className="relative">
      <input
        defaultValue={searchParams.get("q")?.toString()}
        type="text"
        placeholder="Search menu items..."
        onChange={(e) => handleSearch(e.target.value)}
        className="w-full p-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-transparent"
      />
      <button
        type="submit"
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          style={{ fill: "currentColor", transform: "msFilter" }}
        >
          <path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
        </svg>
      </button>
    </form>
  );
}
