import React from "react";
import BlogCard from "../BlogCard";

const Articles = ({ articles }) => {
  return (
    <section className="w-full py-12" id="articles">
      <div className="w-[90%] lg:w-[80%] mx-auto h-full">
        <h3 className="font-semibold text-3xl py-4 text-center">
          Latest Articles
        </h3>
      </div>
      <div className="w-[90%] lg:w-[80%] mx-auto flex flex-wrap justify-center items-center">
        {articles.map((article, index) => (
          <BlogCard article={article} key={index} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
