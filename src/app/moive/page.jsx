"use client";
import React from "react";
import Link from "next/link";

const Moive = () => {
  return (
    <div className="bg-black text-white font-3xl text-center p-16">
      <h1>This is moive page</h1>
      <Link href={"/moive/dynamic"}>
        <button className="bg-red-600 px-6 py-2 mt-5">see more</button>
      </Link>
    </div>
  );
};

export default Moive;
