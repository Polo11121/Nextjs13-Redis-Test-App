"use client";

import { ChangeEvent, useState } from "react";
import { Car } from "@/lib/schemas";

export const Search = () => {
  const [hints, setHints] = useState<Car[]>([]);

  const searchHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;

    if (searchTerm.length < 2) {
      setHints([]);
      return;
    }

    const res = await fetch(`/api/searchCars?searchTerm=${searchTerm}`);
    const data = await res.json();

    setHints(data.cars);
  };

  return (
    <form className="w-1/4">
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <div className="relative group">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 "
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          onChange={searchHandler}
          type="search"
          id="default-search"
          className=" block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 outline-none"
          placeholder="Search Mockups, Logos..."
          required
        />
        {hints.length > 0 && (
          <div className="invisible group-focus-within:visible absolute top-1 left-0 w-full mt-12 bg-white  shadow-lg rounded-lg">
            <ul className="py-1 border border-gray-300 rounded-lg bg-gray-50">
              {hints.map((hint) => (
                <li
                  key={hint.entityId}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                >
                  {hint.make}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </form>
  );
};
