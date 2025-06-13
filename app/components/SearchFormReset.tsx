"use client";

import { useRouter } from "next/navigation";

const SearchFormReset = () => {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push("/categories")}
      className="text-sm text-blue-600 underline hover:text-blue-800 font-semibold"
    >
      Reset Search
    </button>
  );
};

export default SearchFormReset;
