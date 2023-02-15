import React from "react";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Header() {
  return (
    <div className="flex items-center justify-between h-16 w-full border-b px-10">
      <div className="">
        <Link href="/">
          {" "}
          <h1 className="font-sans font-bold text-2xl text-green-900">
            Popcart
          </h1>
        </Link>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center font-semibold cursor-pointer">
          <UserIcon className="h-8 w-8" />
          <h1 className="text-base">Account</h1>
        </div>
        <div className="flex items-center font-semibold cursor-pointer">
          <ShoppingBagIcon className="h-8 w-8" />
          <h1 className="text-base">Cart</h1>
        </div>
      </div>
    </div>
  );
}

export default Header;
