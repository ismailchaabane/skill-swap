import SearchFormReset from "@/app/components/SearchFormReset";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <form action="/categories" method="GET" className="search-form w-full max-w-3xl mx-auto">
      {/* Flex container for input and button */}
      <div className="flex gap-2 border-4 border-black shadow-[4px_4px_0_0_#000]">
        <input
          type="search"
          name="q"
          placeholder="Search skills or people..."
          defaultValue={query}
          className="flex-grow p-4 font-georama font-extrabold text-black placeholder-gray-600 rounded-none outline-none"
        />

        <button
          type="submit"
          aria-label="Search"
          className="px-8 py-4 bg-black text-yellow-400 font-extrabold shadow-[4px_4px_0_0_#000] hover:bg-gray-900"
        >
          S
        </button>
      </div>

      {/* Reset button below input-row if query exists */}
      {query && (
        <div className="mt-3">
          <SearchFormReset />
        </div>
      )}
    </form>
  );
};

export default SearchForm;
