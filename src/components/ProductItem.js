import React from "react";
import Image from "next/image";
import pic from "../assets/4.jpeg";
import { StarIcon } from "@heroicons/react/24/outline";

function ProductItem() {
  return (
    <div className=" rounded-lg m-10 h-80 w-80 border">
      <Image className="rounded-t-lg" src={pic} />
      <div className="p-4">
        <h1 className="font-semibold text-lg">Men's Fashion Popcart Tshirt</h1>
        <h1 className="text-sm font-semibold">The perfect tshirt design</h1>
        <StarIcon className="h-4 w-4" />
        <button className="font-semibold rounded-full px-6 py-3 border mt-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductItem;
