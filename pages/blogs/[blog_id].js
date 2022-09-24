import React, { useState } from "react";
import PortableText from "react-portable-text";
import { client } from "../../hooks/sanityClient";
import { BiShareAlt } from "react-icons/bi";
import Articles from "../../components/Home/Articles";
import getFullDate from "../../hooks/getDate";
import Link from "next/link";
import imageUrlBuilder from "@sanity/image-url";

const BlogId = ({ blog, allBlogs }) => {
  const builder = imageUrlBuilder(client);
  const urlBuilder = (source) => {
    return builder.image(source);
  };
  return (
    <>
      <div className="w-[90%] lg:w-[80%] mx-auto">
        <div className="w-full flex items-center justify-between my-8">
          <span className="font-semibold text-xl cursor-pointer hover:text-[indigo] hover:underline">
            <Link href="/blogs">
              <a>All Blogs</a>
            </Link>
          </span>
        </div>
        <div className="my-8 w-full p-4 lg:p-12 rounded-md border-2">
          <div className="flex justify-between items-center flex-wrap">
            <h2 className="text-2xl md:text-3xl">{blog.title}</h2>
            <span className="font-semibold mt-2 text-sm text-[#808080] md:text-black md:text-xl">
              {getFullDate(blog._createdAt)}
            </span>
            <span
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                alert("Link Copied!");
              }}
              className="hidden md:flex items-center justify-center border-2 border-[gray] cursor-pointer rounded-full w-10 h-10 font-semibold"
            >
              <BiShareAlt className="text-xl" />
            </span>
          </div>
          <div className="my-8 rounded-lg overflow-hidden">
            <img
              src={
                blog.blogimage
                  ? urlBuilder(blog.blogimage).url()
                  : "/assets/blogImage.jpg"
              }
              alt="BlogImage"
            />
          </div>
          <div className="my-8 w-full">
            <PortableText
              content={blog.content}
              serializers={{
                h1: (props) => (
                  <h1 className="text-2xl font-semibold" {...props} />
                ),
                li: ({ children }) => <li>{children}</li>,
              }}
            />
          </div>
        </div>
      </div>
      <div className="w-full">
        <Articles articles={allBlogs} />
      </div>
    </>
  );
};

export default BlogId;

export async function getServerSideProps(context) {
  const slug = context.query.blog_id;
  const query = `*[_type == "blog" && slug.current == '${slug}']`;
  const blogs = await client.fetch(query);
  const query2 = `*[_type == "blog"][0...3]`;
  const allBlogs = await client.fetch(query2);

  return {
    props: {
      blog: blogs[0],
      allBlogs,
    },
  };
}
