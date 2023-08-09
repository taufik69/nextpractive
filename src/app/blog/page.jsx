import React from "react";
import Image from "next/image";
import blogimg from "../../../public/download.jpg";
const Blog = () => {
  return (
    <div className="bg-black text-white font-3xl text-center p-16">
      <h1>This is blog page</h1>
      <Image
        src={blogimg}
        width={1000}
        quality={80}
        height={200}
        alt="Picture of the author"
      />
    </div>
  );
};

export default Blog;
