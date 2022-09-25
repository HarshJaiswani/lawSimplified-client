import React, { useState } from "react";
import Link from "next/link";
// import { BsHeart } from "react-icons/bs";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "../hooks/sanityClient";
import getFullDate from "../hooks/getDate";

const BlogCard = (props) => {
  const { article, index } = props;
  // const [fav, setFav] = useState([]);
  const builder = imageUrlBuilder(client);
  const urlBuilder = (source) => {
    return builder.image(source);
  };
  return (
    <div
      key={index}
      className="w-[300px] hover:shadow-lg m-4 border-2 p-4 bg-white rounded-md"
    >
      <img
        src={
          article.blogimage
            ? urlBuilder(article.blogimage).url()
            : "/assets/blogImage.jpg"
        }
        className="w-[300px] h-[170px] mr-10 mb-4 rounded-md"
        alt=""
      />
      <div className="w-full">
        <h2 className="font-semibold flex flex-col text-xl">
          {article.title}
          <div className="font-semibold my-2 text-gray-400 flex items-center text-sm">
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

export default BlogCard;
