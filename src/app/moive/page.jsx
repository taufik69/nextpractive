import React from "react";
import Link from "next/link";
const Moive = () => {
  return (
    <div className="bg-black text-white font-3xl text-center p-16">
      <h1>This is moive page</h1>
      <Link href={"/moive/2"}>
        <button
          type="button"
          class="w-[30%] mt-5 text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2"
        >
          Purple
        </button>
      </Link>
    </div>
  );
};

export default Moive;
