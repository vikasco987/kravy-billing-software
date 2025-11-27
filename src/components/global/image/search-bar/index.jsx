"use client";

import React, { useState } from "react";
import { Search, Loader2 } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [loadingSearch, setLoadingSearch] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setLoadingSearch(true);

    const searchUrl = `https://app.foodsnap.in?search=${encodeURIComponent(
      query
    )}`;
    window.location.href = searchUrl;
  };

  return (
    <div className="w-full max-w-full px-3 md:px-4 relative">
      <form
        onSubmit={handleSubmit}
        className="flex items-center bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-2 shadow-md transition-all focus-within:ring-1 ring-[#0025cc]"
      >
        <Search className="text-gray-400 mr-2" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search dishes, tags, or cuisines..."
          className="w-full bg-transparent text-sm focus:outline-none text-gray-800 dark:text-white placeholder-gray-400"
        />

        <button
          type="submit"
          disabled={loadingSearch}
          className="ml-2 bg-[#0025cc] hover:bg-[#1c3eff] text-white px-4 py-1.5 text-sm rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loadingSearch ? (
            <Loader2 className="animate-spin h-4 w-4 mx-auto" />
          ) : (
            "Search"
          )}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
