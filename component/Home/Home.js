import React, { useEffect } from "react";
import Popular from "./Popular";
import Search from "./Search";
import Vision from "./Vision";

export default function Home() {
  return (
    <main className="relative">
      <div className="mx-auto mb-8 h-96 bg-gradient-to-br from-indigo-500 to-yellow-200">
      <div className="container mx-auto">
          <div className="flex items-center justify-between w-full rounded-lg h-96 item-center">
            <div className="">
              <div className="p-4 font-black md:text-3xl">
                TIME IS RUNNING OUT !
              </div>
              <Search />
              <div className="p-4 font-black md:text-2xl">
                Save on new, used, and hard to find items...
              </div>
            </div>
            <img
              className="transition ease-in-out img hover:rotate-6 w-36 h-36"
              src="https://cdn.pixabay.com/photo/2015/11/17/02/18/hourglass-1046841_960_720.png"
              alt="hero"
            />
          </div>
        </div>
        </div>
      <Popular />
      <Vision />
    </main>
  );
}
