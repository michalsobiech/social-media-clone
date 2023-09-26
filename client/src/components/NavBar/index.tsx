import {
  ChatBubbleOvalLeftIcon,
  UserIcon,
  BellIcon,
  PlusIcon,
} from "@heroicons/react/24/solid";
import { ReactElement, useState } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import NavSearch from "./NavSearch";
import { Navigation } from "./Navigation";
import IconButton from "@/components/ui/IconButton";

export default function NavBar(): ReactElement {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <nav className="fixed flex h-14 w-full border-b border-fb-gray-400 bg-fb-gray-700">
      <img
        src="/logo-icon.svg"
        className={twMerge(
          "absolute left-3 top-2 z-10 h-10 w-10 transition-all duration-100",
          isSearching && "pointer-events-none left-0 opacity-0",
        )}
        alt="logo-icon"
      />

      <div
        className={twJoin(
          "absolute left-0 top-0 h-full items-center",
          isSearching && "z-10",
        )}
      >
        <NavSearch searching={isSearching} setSearching={setIsSearching} />
      </div>

      <div className="h-full w-full px-28">
        <Navigation />
      </div>

      <div className="absolute right-0 top-0 flex h-full items-center">
        <div className="flex h-full flex-row items-center gap-x-2 pr-3">
          {/* Chat */}
          <IconButton>
            <PlusIcon className="h-6 w-6 text-fb-gray-100" />
          </IconButton>

          <IconButton>
            <ChatBubbleOvalLeftIcon className="h-6 w-6 text-fb-gray-100" />
          </IconButton>

          {/* Notifications */}
          <IconButton>
            <BellIcon className="h-6 w-6 text-fb-gray-100" />
          </IconButton>

          {/* Profile */}
          <IconButton>
            <UserIcon className="h-6 w-6 text-fb-gray-100" />
          </IconButton>
        </div>
      </div>
    </nav>
  );
}
