"use client";
import React, { useState } from "react";
const Blog = () => {
  const names = ["Tim", "Joe", "Bel", "Lee"];
  const [results, setResults] = useState();
  return (
    <div className="bg-black text-white font-3xl text-center p-16">
      <h1>This is block page</h1>
    </div>
  );
};

export default Blog;
