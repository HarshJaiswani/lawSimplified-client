import React, { useState, useEffect } from "react";
import Link from "next/link";
// import { BsHeart, BsHeartFill } from "react-icons/bs";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../hooks/sanityClient";
import getFullDate from "../hooks/getDate";

const BlogBlock = (props) => {
  const { article, index } = props;
  // const [fav, setFav] = useState([]);
  const builder = imageUrlBuilder(client);
  const urlBuilder = (source) => {
    return builder.image(source);
  };
  return (
    <div
      key={index}
      className="w-fit max-w-[90%] lg:w-[80%] flex md:flex-row flex-col items-center border-2 md:border-t-0 md:border-l-0 md:border-r-0 p-4 my-4 hover:shadow-md bg-white rounded-md md:rounded-none overflow-hidden"
    >
      <img
        src={
          article.blogimage
            ? urlBuilder(article.blogimage).url()
            : "/assets/blogImage.jpg"
        }
        className="w-[300px] h-[170px] md:mr-10 mb-4 rounded-md"
        alt=""
      />
      <div className="w-full">
        <h2 className="font-semibold flex flex-col md:flex-row md:items-center justify-between text-xl">
          {article.title}
          <div className="font-semibold my-2 text-gray-400 flex flex-wrap items-center text-sm">
            <span>{getFullDate(article._createdAt)}</span>
            <span className="block w-1 h-1 mx-4 rounded-full bg-black"></span>
            <span>{article.content.length / 20} mins read</span>
          </div>
        </h2>
        <p className="my-4 text-sm text-slate-500">{article.descp}</p>
        <div className="flex justify-between items-center">
          <Link href={`/blogs/${article.slug.current}`}>
            <a>
              <button className="px-6 py-2 rounded-[4px] bg-blue-600 text-white cursor-pointer outline-none">
                Read More
              </button>
            </a>
          </Link>
          {/* {fav && !fav.includes(index) ? (
            <span
              onClick={() => setFav([...fav, index])}
              className="text-[crimson] cursor-pointer"
            >
              <BsHeart className="text-2xl" />
            </span>
          ) : (
            <span
              onClick={() => setFav([fav.filter((a) => a != index)])}
              className="text-[crimson] cursor-pointer"
            >
              <BsHeartFill className="text-2xl" />
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BlogBlock;
