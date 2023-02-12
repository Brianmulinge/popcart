import Image from "next/image";
import React from "react";
import pic from "../assets/banner.jpeg";

function Banner() {
  return (
    <div className="w-full h-96">
      <div className="flex items-center justify-between rounded-lg mx-10 my-6 h-full border bg-green-700 p-6">
        <div className="">
          <h1 className="font-bold text-3xl mb-4">
            Grab Upto 50% Off on Selected Fashion Tshirt
          </h1>
          <button className="font-semibold rounded-full px-6 py-3 border">
            Shop Now
          </button>
        </div>
        <div className="">
          <Image className="h-40 3-40k" src={pic} />
        </div>
      </div>
    </div>
  );
}

export default Banner;
