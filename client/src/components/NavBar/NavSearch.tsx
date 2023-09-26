import {
  ArrowLeftIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { ReactElement, useRef } from "react";
import { useClickAway, useKeyPressEvent } from "react-use";
import { twJoin, twMerge } from "tailwind-merge";

type Props = {
  searching: boolean;
  setSearching: (state: boolean) => void;
};

export default function SearchBar({
  searching,
  setSearching,
}: Props): ReactElement {
  const ref = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLInputElement | null>(null);

  useClickAway(ref, () => {
    if (searching) setSearching(false);
  });

  useKeyPressEvent("Escape", () => {
    if (searching) {
      setSearching(false);
      searchRef.current?.blur();
    }
  });

  return (
    <div
      ref={ref}
      className={twJoin("h-full lg:w-80", searching && "w-80 bg-fb-gray-700")}
    >
      {/* Search bar START */}
      <div className="flex h-14 w-full items-center gap-x-2 px-3 text-fb-gray-100">
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-fb-gray-500 focus-visible:bg-fb-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-fb-gray-100 disabled:invisible"
          disabled={!searching}
          onClick={() => setSearching(false)}
        >
          <ArrowLeftIcon
            className={twMerge(
              "h-5 w-10 translate-x-full opacity-0",
              searching && "translate-x-0 opacity-100 transition-all delay-75",
            )}
            strokeWidth={2}
          />
        </button>

        <label
          className={twMerge(
            "flex h-10 w-10 items-center rounded-full bg-fb-gray-500 px-2 py-1 focus-within:outline focus-within:outline-2 focus-within:outline-offset-4 focus-within:outline-fb-gray-100 lg:w-full lg:gap-x-2",
            searching && "w-full",
          )}
        >
          <input
            ref={searchRef}
            type="search"
            id="search"
            placeholder="Szukaj"
            role="combobox"
            aria-controls="search-results"
            autoComplete="off"
            aria-expanded={searching ? "true" : "false"}
            aria-haspopup="listbox"
            className={twMerge(
              "peer h-full w-0 bg-transparent focus-visible:outline focus-visible:outline-transparent lg:block lg:w-full [&::-webkit-search-cancel-button]:hidden",
              searching && "w-full",
            )}
            onClick={() => setSearching(true)}
            onChange={() => !searching && setSearching(true)}
          />

          <MagnifyingGlassIcon
            className="-order-1 h-5 w-5 transition-all peer-focus:w-0"
            strokeWidth={2}
          />
        </label>
      </div>
      {/* Search bar END */}

      {/* Search results START */}
      {searching ? (
        <ul
          id="search-results"
          role="listbox"
          className="fixed bottom-0 left-0 right-0 top-14 bg-fb-gray-700 px-3 py-2 text-fb-gray-100 md:static md:rounded-md"
        >
          {[1, 2, 3, 4, 5].map((num, i) => (
            <li
              key={i}
              role="option"
              className="w-full rounded-full px-2 py-1 hover:bg-fb-gray-500"
            >
              <p>Option {num}</p>
            </li>
          ))}
        </ul>
      ) : null}
      {/* Search results END */}
    </div>
  );
}
